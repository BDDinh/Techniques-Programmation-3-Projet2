import mongoose from 'mongoose'
const { Schema } = mongoose;

export const CatSchema = new Schema({
    destination: { type: String },
    villeDepart: { type: String },
    dateDepart: { type: String },
    dateRetour: { type: String },
    prix: { type: Number },
    rabais: { type: Number },
    vedette: { type: Boolean },
    hotel: { type: {
                 nom: { type: String },
                 coordonnees: { type: String },
                 nombreEtoiles: { type: String },
                 nombreChambres: { type: String },
                 caracteristiques:  [{ type: String }]
           }}
});

/*
https://docs.nestjs.com/techniques/mongodb
https://github.com/nestjs/nest/tree/master/sample/06-mongoose
https://dev-qa.com/1967862/how-do-i-fix-the-error-in-the-mongoose-diagram
https://github.com/nestjs/mongoose/blob/master/tests/e2e/schema-definitions.factory.spec.ts


https://www.linkedin.com/pulse/mongoose-harshal-yeole/
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);
*/