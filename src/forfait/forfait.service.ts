import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateForfaitDto } from './dto/create-forfait.dto';
import { UpdateForfaitDto } from './dto/update-forfait.dto';
import { Forfait, ForfaitlDocument } from './schemas/forfait.schema';

@Injectable()
export class ForfaitService {
  constructor(
    @InjectModel(Forfait.name) private readonly forfaitModel: Model<ForfaitlDocument>,
  ) {}

  create(createForfaitDto: CreateForfaitDto) {
    return 'This action adds a new forfait';
  }

  async findAll(): Promise<Forfait[]> {
    return this.forfaitModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} forfait`;
  }

  update(id: number, updateForfaitDto: UpdateForfaitDto) {
    return `This action updates a #${id} forfait`;
  }

  remove(id: number) {
    return `This action removes a #${id} forfait`;
  }
}
