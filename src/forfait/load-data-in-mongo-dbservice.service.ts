import { Injectable } from '@nestjs/common';
//import { Schema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Forfait, ForfaitSchema } from './schemas/forfait.schema';
import { FORFAITS } from './mock/mock-forfaits';

@Injectable()
export class LoadDataInMongoDbserviceService {

  
  async loadData(): Promise<void>{
    
    // https://www.geeksforgeeks.org/mongoose-insertmany-function/
    // https://stackoverflow.com/questions/24985684/mongodb-show-all-contents-from-all-collections
    // https://giters.com/Automattic/mongoose/issues/10850  
    // https://mongoosejs.com/docs/models.html

    const mongoose = require('mongoose');
    const dbLink = 'mongodb://localhost:27017/test';
    const db = await mongoose.createConnection(dbLink).asPromise();
    mongoose.set('debug', true);
    const session = await db.startSession();
  
      
      // User model
     /* 
      const User = db.model('User', {
        name: { type: String },
        age: { type: Number }
      }); 
      
      const UserSchema = new mongoose.Schema({
        name: String,
        age: Number,
      });
      const User = db.model('User', UserSchema1 );
      */

    @Schema()
    class UserClass {
      @Prop({ required: true })
      name: string;
  
      @Prop({ required: true })
      age: Number;
    }
    const UserSchema2 = SchemaFactory.createForClass(UserClass);
    const User = db.model('User', UserSchema2 ); 

    // Function call
    User.insertMany([
      { name: 'Gourav', age: 20},
      { name: 'Kartik', age: 20},
      { name: 'Niharika', age: 20}
    ]).then(function(){
      console.log("Data inserted")  // Success
    }).catch(function(error){
      console.log(error)            // Failure
    }); 

    session.endSession();
    }// loadData

    // ======================================================================
    async loadData2(): Promise<void>{
      
      const mongoose = require('mongoose');
      const dbLink = 'mongodb://localhost:27017/test';
      const db = await mongoose.createConnection(dbLink).asPromise();
      mongoose.set('debug', true);
      const session = await db.startSession();
  
      const ForfaitModel = db.model('Forfait', ForfaitSchema ); 

      ForfaitModel.insertMany( FORFAITS ).then(function(){
        console.log("Succès !!! Data inserted")  // Success
      }).catch(function(error){
        console.log(error)            // Failure
      }); 
    
    }// loadData
}








/*
https://www.tutorialkart.com/nodejs/mongoose/insert-multiple-documents-to-mongodb/
https://docs.nestjs.com/techniques/mongodb


https://stackoverflow.com/questions/24985684/mongodb-show-all-contents-from-all-collections
https://giters.com/Automattic/mongoose/issues/10850  
https://docs.mongodb.com/mongodb-shell/run-commands/
https://www.mongodb.com/developer/quickstart/cheat-sheet/

https://progressivecoder.com/how-to-build-a-nestjs-mongodb-crud-application-using-mongoose/


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