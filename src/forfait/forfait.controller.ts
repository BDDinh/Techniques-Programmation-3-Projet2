import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ForfaitService } from './forfait.service';
import { CreateForfaitDto } from './dto/create-forfait.dto';
import { UpdateForfaitDto } from './dto/update-forfait.dto';
import { LoadDataInMongoDbserviceService } from './load-data-in-mongo-dbservice.service';


@Controller('forfait')
export class ForfaitController {
  constructor(private readonly forfaitService: ForfaitService, 
             private readonly loadDataInMongoDbserviceService: LoadDataInMongoDbserviceService) {}

  /*           
  @Post()
  create(@Body() createForfaitDto: CreateForfaitDto) {
    return this.forfaitService.create(createForfaitDto);
  }

  @Get("/all")
  findAll() {
    return this.forfaitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.forfaitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateForfaitDto: UpdateForfaitDto) {
    return this.forfaitService.update(+id, updateForfaitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.forfaitService.remove(+id);
  }
  */

  // http://localhost:3000/forfait/loadData
  @Get("/loadData")
  loadData(): string {
    this.loadDataInMongoDbserviceService.loadData();
    return "loadData fini";
  }
}
