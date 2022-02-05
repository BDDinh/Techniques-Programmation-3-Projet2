import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

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

    @Prop(raw({
        nom: { type: String },
        coordonnees: { type: String },
        nombreEtoiles: { type: Number },
        nombreChambres: { type: Number },
        caracteristiques:  [{ type: String }]
      }))
    hotel: {
        nom: string,
        coordonnees: string,
        nombreEtoiles: number,
        nombreChambres: number,
        caracteristiques: string[]
      };

}
export const ForfaitSchema = SchemaFactory.createForClass(Forfait);


/*
https://docs.nestjs.com/techniques/mongodb
https://github.com/nestjs/nest/tree/master/sample/06-mongoose
https://dev-qa.com/1967862/how-do-i-fix-the-error-in-the-mongoose-diagram
https://github.com/nestjs/mongoose/blob/master/tests/e2e/schema-definitions.factory.spec.ts


https://www.linkedin.com/pulse/mongoose-harshal-yeole/
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);

*/