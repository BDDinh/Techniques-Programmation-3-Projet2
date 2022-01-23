import {
    MinLength,
    MaxLength,
    IsNotEmpty,
    ValidateNested,
    IsDefined,
    IsNotEmptyObject,
    IsObject,
    IsString,
    IsNumber,
    IsBoolean,
    IsDateString,
    IsPositive
  } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateHotelDto } from './create-hotel.dto';

export class CreateForfaitDto {

  @IsNotEmpty({ message: "Le nom de la ville doit être spécifié"})
  @IsString()
  readonly destination: string;

  @IsNotEmpty({
    message: "Le nom de la ville doit être spécifié"
    })
  @IsString()
  readonly villeDepart: string;

  @IsNotEmpty()
  @IsDateString()
  readonly dateDepart: string;

  @IsNotEmpty()
  @IsDateString()
  readonly dateRetour: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly prix: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly rabais: number;

  @IsNotEmpty()
  @IsBoolean()
  readonly vedette: boolean;

  @Type(() => CreateHotelDto)
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  readonly hotel: CreateHotelDto;
}

/*
https://stackoverflow.com/questions/53786383/validate-nested-objects-using-class-validator-and-nestjs
https://packagegalaxy.com/javascript/nestjs-class-validator
https://tipsfordev.com/validating-nested-objects-using-class-validator-in-nestjs
https://johnnn.tech/q/how-to-validate-an-array-of-objects-in-nestjs-using-dto/



// https://stackoverflow.com/questions/53786383/validate-nested-objects-using-class-validator-and-nestjs
// https://www.npmjs.com/package/class-transformer
// https://github.com/nestjs/nest/issues/4327
// https://www.titanwolf.org/Network/q/c0dc960b-cda8-4b2b-8278-16a896beaeb8/y
// https://lzomedia.com/blog/nestjs-cannot-get-nested-object-in-console-log-error-property-x-does-not-exist-on-type-dto/

https://circleci.com/blog/getting-started-with-nestjs-and-automatic-testing/
*/
