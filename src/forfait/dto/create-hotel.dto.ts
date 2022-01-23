export class CreateHotelDto {
    readonly nom: string;
    readonly coordonnees: string;
    readonly nombreEtoiles: number;
    readonly nombreChambres: number;
    readonly caracteristiques: string[];
}

