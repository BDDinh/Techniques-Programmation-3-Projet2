import { Injectable } from '@nestjs/common';
import { LoadVolsInMongoDb } from './vol/load-data-in-mongo-dbservice.service';
import { LoadForfaitsInMongoDb } from './forfait/load-data-in-mongo-dbservice.service';
@Injectable()
export class AppService {

  constructor(private loadVolsInMongoDb: LoadVolsInMongoDb, private loadForfaitsInMongoDb: LoadForfaitsInMongoDb){}

  loadAllData(): Promise<String> {
    return this.loadVolsInMongoDb.loadData()
          .then( () => this.loadForfaitsInMongoDb.loadData() )
            .then( () => "Load data fini" );
  }// Fin loadAllData
}
