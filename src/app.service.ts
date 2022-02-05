import { Injectable } from '@nestjs/common';
import { LoadVolsInMongoDb } from './vol/load-data-in-mongo-dbservice.service';
import { LoadForfaitsInMongo } from './forfait/load-data-in-mongo-dbservice.service';
@Injectable()
export class AppService {

  constructor(private loadVolsInMongoDb: LoadVolsInMongoDb, private loadForfaitsInMongo: LoadForfaitsInMongo){}

  loadAllData(): Promise<void> {
    return this.loadVolsInMongoDb.loadData()
          .then( () =>  this.loadForfaitsInMongo.loadData() );
  }// Fin loadAllData
}
