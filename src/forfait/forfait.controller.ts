import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ForfaitService } from './forfait.service';
import { CreateForfaitDto } from './dto/create-forfait.dto';
import { UpdateForfaitDto } from './dto/update-forfait.dto';

@Controller('forfait')
export class ForfaitController {
  constructor(private readonly forfaitService: ForfaitService) {}

  @Post()
  create(@Body() createForfaitDto: CreateForfaitDto) {
    return this.forfaitService.create(createForfaitDto);
  }

  @Get()
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
}
