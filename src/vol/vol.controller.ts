import { Controller, Get, Post, Body, Patch, Put, Param, Delete } from '@nestjs/common';
import { VolService } from './vol.service';
import { Vol } from './schemas/Vol.schema';

@Controller('vol')
export class VolController {

    constructor(private readonly volService: VolService) {}

    // http://localhost:3000/vol/avecBoeing737
    @Get("/avecBoeing737")
    async findAvecBoeing737(): Promise<Vol[]>  {
      return this.volService.findVolsAvecBoeing737();
    }
}
