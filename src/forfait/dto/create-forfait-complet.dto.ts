import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateHotelDto } from './create-hotel.dto';

export class CreateForfaitDto {
    readonly destination: string;
    readonly villeDepart: number;
    readonly dateDepart: string;

    readonly dateRetour: string;
    readonly prix: string;
    readonly rabais: string;
    readonly vedette: string;

    @Type(() => CreateHotelDto)
    @ValidateNested()
    readonly hotel: CreateHotelDto;
}

/*
https://circleci.com/blog/getting-started-with-nestjs-and-automatic-testing/

https://dev-qa.com/1967862/how-do-i-fix-the-error-in-the-mongoose-diagram

https://johnnn.tech/q/nestjs-define-map-array-to-be-used-in-mongoose-and-graphql/

*/
