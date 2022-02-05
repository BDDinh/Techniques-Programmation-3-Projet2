import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type VolDocument = Vol & Document;

@Schema()
export class Vol {
    @Prop({ required: true })
    code: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    origin: string;

    @Prop({ required: true })
    destination: string;

    @Prop({ required: true })
    emptySeats: number;

    @Prop(raw({
        type: { type: String },
        totalSeats: { type: Number }
      }))
      plane: {
        type: string,
        totalSeats: number
      };

}
export const VolSchema = SchemaFactory.createForClass(Vol);
