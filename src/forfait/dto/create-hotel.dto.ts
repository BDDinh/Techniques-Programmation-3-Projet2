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
    @IsNotEmpty({message: "Le nom de l'hôtel doit être spécifié"})
    @IsString()
    readonly nom: string;

    @IsNotEmpty({message: "Les coordonnées de l'hôtel doit être spécifiées"})
    @IsString()
    readonly coordonnees: string;

    @IsNotEmpty({message: "L'évaluation en nombre d'étoiles de l'hôtel doit être spécifiée"})
    @IsNumber()
    @IsPositive()
    readonly nombreEtoiles: number;

    @IsNotEmpty({message: "Le nombre de chambres de l'hôtel doit être spécifié"})
    @IsNumber()
    @IsPositive()
    readonly nombreChambres: number;

    @IsArray()
    @ArrayNotEmpty({message: "Les caractéristiques de l'hôtel doivent être spécifiés"})
    readonly caracteristiques: string[];
}


// https://www.reddit.com/r/Nestjs_framework/comments/ql2rf2/dynamically_validate_date_and_time_values_using/
// https://dev.to/avantar/custom-validation-with-database-in-nestjs-gao
