import { Injectable } from '@nestjs/common';
import { Vol, VolSchema } from './schemas/vol.schema';
import { VOLS } from './mock/mock-vols';

@Injectable()
export class LoadVolsInMongoDb{

    async loadData():Promise<void>{
      
      const mongoose = require('mongoose');
      const dbLink = 'mongodb://localhost:27017/test';
      const db = await mongoose.createConnection(dbLink).asPromise();
      mongoose.set('debug', true);

      const session = await db.startSession();
      
      const VolModel = db.model('Vol', VolSchema );

      if( VolModel.forfaits ){
         VolModel.forfaits.drop();
      }
      
      VolModel.createCollection();

      VolModel.insertMany( VOLS ).then(function(){
         console.log("Succès !!! Data vols insérés")  // Success
      }).catch(function(error){
         console.log(error)                           // Failure
      });

    }// loadData
}