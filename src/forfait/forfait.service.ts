import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(createForfaitDto: CreateForfaitDto): Promise<Forfait>  {
    const createdForfait = await this.forfaitModel.create(createForfaitDto);
    return createdForfait;
  }

  async findAll(): Promise<Forfait[]> {
    return this.forfaitModel.find().exec();
  }

  async findOne(id: number): Promise<Forfait> {
    const forfait = await this.forfaitModel
    .findById({ _id: id })
    .exec();

    if (!forfait) {
      throw new NotFoundException(`Forfait #${id} introuvable`);
    }

    return forfait;
  }

  async update(id: number, updateForfaitDto: UpdateForfaitDto): Promise<Forfait> {
    const existingForfait = await this.forfaitModel.findByIdAndUpdate(
      { _id: id },
      updateForfaitDto,
    );

    if (!existingForfait) {
      throw new NotFoundException(`Forfait #${id} introuvable`);
    }

    return existingForfait;
  }

  async remove(id: number) {
    const deletedForfait = await this.forfaitModel.findByIdAndRemove(id);
    return deletedForfait;
  }
}

/*
import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICustomer } from './interfaces/customer.interface';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';
import { Customer } from './schemas/customer.schema';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private readonly customerModel: Model<Customer>,
  ) {}

  public async findAll(
    paginationQuery: PaginationQueryDto,
  ): Promise<Customer[]> {
    const { limit, offset } = paginationQuery;

    return await this.customerModel
      .find()
      .skip(offset)
      .limit(limit)
      .populate('organization')
      .exec();
  }

  public async findOne(customerId: string): Promise<Customer> {
    const customer = await this.customerModel
      .findById({ _id: customerId })
      .populate('organization')
      .exec();

    if (!customer) {
      throw new NotFoundException(`Customer #${customerId} not found`);
    }

    return customer;
  }

  public async create(
    createCustomerDto: CreateCustomerDto,
  ): Promise<ICustomer> {
    const newCustomer = await this.customerModel.create(createCustomerDto);
    return newCustomer;
  }

  public async update(
    customerId: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<ICustomer> {
    const existingCustomer = await this.customerModel.findByIdAndUpdate(
      { _id: customerId },
      updateCustomerDto,
    );

    if (!existingCustomer) {
      throw new NotFoundException(`Customer #${customerId} not found`);
    }

    return existingCustomer;
  }

  public async remove(customerId: string): Promise<any> {
    const deletedCustomer = await this.customerModel.findByIdAndRemove(
      customerId,
    );
    return deletedCustomer;
  }
}
*/
