import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Hotel, HotelSchema } from "./hotel.schema"

export type ForfaitlDocument = Forfait & Document;

@Schema()
export class Forfait {
    @Prop({ required: true })
    destination: string;

    @Prop({ required: true })
    villeDepart: string;

    @Prop({ required: true })
    dateDepart: string;

    @Prop({ required: true })
    dateRetour: string;

    @Prop({ required: true })
    prix: number;

    @Prop({ required: true })
    rabais: number;

    @Prop({ required: true })
    vedette: boolean;

    @Prop({ required: true, type: HotelSchema })
    hotel: Hotel;
}
export const ForfaitSchema = SchemaFactory.createForClass(Forfait);


/*
https://docs.nestjs.com/techniques/mongodb
https://github.com/nestjs/nest/tree/master/sample/06-mongoose
*/