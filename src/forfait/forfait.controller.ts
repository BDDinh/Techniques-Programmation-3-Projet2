import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ForfaitService } from './forfait.service';
import { CreateForfaitDto } from './dto/create-forfait.dto';
import { UpdateForfaitDto } from './dto/update-forfait.dto';
import { LoadDataInMongoDbservice } from './load-data-in-mongo-dbservice.service';
import { Forfait } from './schemas/Forfait.schema';

@Controller('forfait')
export class ForfaitController {
  constructor(private readonly forfaitService: ForfaitService, 
              private readonly loadDataInMongoDbservice: LoadDataInMongoDbservice) {}

      
  @Post()
  create(@Body() createForfaitDto: CreateForfaitDto) {
    return this.forfaitService.create(createForfaitDto);
  }

  // http://localhost:3000/forfait/loadData
  @Get("/loadData")
  loadData(): string {
    //this.loadDataInMongoDbserviceService.loadData();
    return "loadData fini";
  }

  // http://localhost:3000/forfait/
  @Get()
  async findAll(): Promise<Forfait[]>  {
    return this.forfaitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.forfaitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateForfaitDto: UpdateForfaitDto) {
    /*
     @Patch('/:id')
      updateUser(@Body() body: UpdateUserDto) {} // <-- Use as type annotation

    @Patch(':id')
    @ApiCreatedResponse({ type: User })
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return this.usersService.update(+id, updateUserDto);
    }


    */
    return this.forfaitService.update(+id, updateForfaitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.forfaitService.remove(+id);
  }
}
