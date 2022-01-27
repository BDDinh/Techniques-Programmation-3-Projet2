import { Injectable } from '@nestjs/common';
//import { Schema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Forfait, ForfaitSchema } from './schemas/forfait.schema';
import { FORFAITS } from './mock/mock-forfaits';

@Injectable()
export class LoadDataInMongoDbservice{

    async loadData(): Promise<void>{
      
      const mongoose = require('mongoose');
      const dbLink = 'mongodb://localhost:27017/test';
      const db = await mongoose.createConnection(dbLink).asPromise();
      mongoose.set('debug', true);
      const session = await db.startSession();
  
      const ForfaitModel = db.model('Forfait', ForfaitSchema ); 

      /*       
      ForfaitModel.createCollection().then(function(collection) {
        console.log('Collection is created!');
      });
      */

      ForfaitModel.forfaits.drop();

      ForfaitModel.createCollection("forfaits", {
         validator: {
            $jsonSchema: {
               bsonType: "object",
               required: [ "destination", "villeDepart", "dateDepart", "dateRetour", "prix", "rabais", "vedette", "hotel" ],
               properties: {
                  destination: {
                     bsonType: "string",
                     description: "doit être une chaîne de caractères et est requise"
                  },
                  villeDepart: {
                     bsonType: "string",
                     description: "doit être une chaîne de caractères et est requise"
                  },
                  dateDepart: {
                     bsonType: "string",
                     description: "doit être une chaîne de caractères et est requise"
                  },
                  dateRetour: {
                     bsonType: "string",
                     description: "doit être une chaîne de caractères et est requise"
                  },
                  prix: {
                     bsonType: [ "double" ],
                     description: "doit être en format Double et est requis"
                  },
                  rabais: {
                     bsonType: [ "double" ],
                     description: "doit être en format Double et est requis"
                  },
                  vedette: {
                     bsonType: [ "bool" ],
                     description: "doit être en format booléen et est requis"
                  },
                  hotel: {
                     bsonType: "object",
                     required: [ "nom", "coordonnees", "nombreEtoiles", "nombreChambres", "caracteristiques" ],
                     properties: {
                        nom: {
                           bsonType: "string",
                           description: "doit être une chaîne de caractères et est requise"
                        },
                        coordonnees: {
                           bsonType: "string",
                           description: "doit être une chaîne de caractères et est requise"
                        },
                        nombreEtoiles: {
                           bsonType: "decimal",
                           description: "doit être en format décimal et est requis"
                        },
                        nombreChambres: {
                           bsonType: "int",
                           description: "doit être un entier et est requis"
                        },
                        caracteristiques: {
                           bsonType: "array",
                           items: {
                              "bsonType": "string"
                           },
                           description: "doit être des chaînes de caractères et est requis"
                        }
                     }
                  }
               }
            }
         }
      }).then(function(collection) {
         console.log('Collection a été crée avec succès!');
      });

      ForfaitModel.insertMany( FORFAITS ).then(function(){
        console.log("Succès !!! Data insérés")  // Success
      }).catch(function(error){
        console.log(error)                       // Failure
      }); 
    
    }// loadData
}


/*
// https://www.geeksforgeeks.org/mongoose-insertmany-function/
// https://stackoverflow.com/questions/24985684/mongodb-show-all-contents-from-all-collections
// https://giters.com/Automattic/mongoose/issues/10850  
// https://mongoosejs.com/docs/models.html

https://www.tutorialkart.com/nodejs/mongoose/insert-multiple-documents-to-mongodb/
https://docs.nestjs.com/techniques/mongodb


https://stackoverflow.com/questions/24985684/mongodb-show-all-contents-from-all-collections
https://giters.com/Automattic/mongoose/issues/10850  
https://docs.mongodb.com/mongodb-shell/run-commands/
https://www.mongodb.com/developer/quickstart/cheat-sheet/

https://progressivecoder.com/how-to-build-a-nestjs-mongodb-crud-application-using-mongoose/

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose


mongosh

db.users.find()
db.users.deleteMany({})

db.forfaits.find();
db.forfaits.deleteMany({})

show dbs
use test
show collections
db.Event.drop()

*/

/*
db.createCollection("students", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "name", "year", "major", "address" ],
         properties: {
            name: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            year: {
               bsonType: "int",
               minimum: 2017,
               maximum: 3017,
               description: "must be an integer in [ 2017, 3017 ] and is required"
            },
            major: {
               enum: [ "Math", "English", "Computer Science", "History", null ],
               description: "can only be one of the enum values and is required"
            },
            gpa: {
               bsonType: [ "double" ],
               description: "must be a double if the field exists"
            },
            address: {
               bsonType: "object",
               required: [ "city" ],
               properties: {
                  street: {
                     bsonType: "string",
                     description: "must be a string if the field exists"
                  },
                  city: {
                     bsonType: "string",
                     description: "must be a string and is required"
                  }
               }
            }
         }
      }
   }
})

https://docs.mongodb.com/realm/schemas/types/
https://docs.mongodb.com/manual/reference/operator/query/type/#std-label-document-type-available-types
https://docs.mongodb.com/manual/reference/operator/query/type/#mongodb-query-op.-type


*/