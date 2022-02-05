import { Injectable } from '@nestjs/common';
import mongoose, {  Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Vol, VolDocument } from './schemas/vol.schema'; 

@Injectable()
export class VolService {
    constructor(
        @InjectModel(Vol.name) private readonly volModel: Model<VolDocument>,
    ) {}

    async findVolsAvecBoeing737(): Promise<Vol[]> {
        return this.volModel.find( { "plane.type": "Boeing 737" } ).exec();
    }
}
