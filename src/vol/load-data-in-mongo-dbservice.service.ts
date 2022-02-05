import { Injectable } from '@nestjs/common';
import { Vol, VolSchema } from './schemas/vol.schema';
import { VOLS } from './mock/mock-vols';

@Injectable()
export class LoadDataInMongoDbservice{

    async loadData(): Promise<void>{
      
      const mongoose = require('mongoose');
      const dbLink = 'mongodb://localhost:27017/test';
      const db = await mongoose.createConnection(dbLink).asPromise();
      mongoose.set('debug', true);
      const session = await db.startSession();
  
      const VolModel = db.model('Vol', VolSchema ); 

      VolModel.forfaits.drop();

      VolModel.createCollection("vols", {
         validator: {
            $jsonSchema: {
               bsonType: "object",
               required: [ "code", "price", "origin", "destination", "emptySeats", "hotel" ],
               properties: {
                  code: {
                     bsonType: "string",
                     description: "doit être une chaîne de caractères et est requise"
                  },
                  price: {
                     bsonType: [ "double" ],
                     description: "doit être en format Double et est requis"
                  },
                  origin: {
                     bsonType: [ "double" ],
                     description: "doit être en format Double et est requis"
                  },
                  destination: {
                     bsonType: [ "string" ],
                     description: "doit être une chaîne de caractères et est requis"
                  },
                  emptySeats: {
                     bsonType: [ "int" ],
                     description: "doit être en format entier et est requis"
                  },
                  hotel: {
                     bsonType: "object",
                     required: [ "type", "coordonnees" ],
                     properties: {
                        type: {
                           bsonType: "string",
                           description: "doit être une chaîne de caractères et est requise"
                        },
                        totalSeats: {
                           bsonType: "int",
                           description: "doit être un entier et est requis"
                        },
                     }
                  }
               }
            }
         }
      }).then(function(collection) {
         console.log('Collection a été crée avec succès!');
      });

      VolModel.insertMany( VOLS ).then(function(){
        console.log("Succès !!! Data insérés")  // Success
      }).catch(function(error){
        console.log(error)                       // Failure
      }); 
    
    }// loadData
}