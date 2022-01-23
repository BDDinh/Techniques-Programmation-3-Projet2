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
    IsArray,
    IsPositive,
    ArrayMinSize,
    ArrayNotEmpty
  } from 'class-validator';

export class CreateHotelDto {
    @IsNotEmpty({message: "Le nom de la ville doit être spécifié"})
    @IsString()
    readonly nom: string;

    @IsNotEmpty()
    @IsString()
    readonly coordonnees: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly nombreEtoiles: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly nombreChambres: number;

    @IsArray()
    @ArrayNotEmpty()
    readonly caracteristiques: string[];
}


// https://www.reddit.com/r/Nestjs_framework/comments/ql2rf2/dynamically_validate_date_and_time_values_using/
// https://dev.to/avantar/custom-validation-with-database-in-nestjs-gao
