import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type HotelDocument = Hotel & Document;

@Schema({_id: false})
//@Schema()
export class Hotel {
    @Prop({ required: true })
    nom: string;

    @Prop({ required: true })
    coordonnees: string;

    @Prop({ required: true })
    nombreEtoiles: number;

    @Prop({ required: true })
    nombreChambres: number;

    @Prop({ required: true })
    caracteristiques: string[];
}
export const HotelSchema = SchemaFactory.createForClass(Hotel);



/*

https://stackoverflow.com/questions/62762492/nestjs-how-to-create-nested-schema-with-decorators
https://www.examplefiles.net/cs/778757
https://stackoverflow.com/questions/67849597/how-to-write-nested-dtos-in-nestjs
https://dev.to/avantar/validating-nested-objects-with-class-validator-in-nestjs-1gn8

https://www.codegrepper.com/code-examples/javascript/schema+for+nested+object+json+in+mongoos+nestjs

*/