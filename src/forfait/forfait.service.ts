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
