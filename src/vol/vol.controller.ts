import { Controller, Get, Post, Body, Patch, Put, Param, Delete } from '@nestjs/common';
import { VolService } from './vol.service';
import { Vol } from './schemas/Vol.schema';
import { StatsPartsDeMarche, StatsPrix } from './interfaces/stats';
import { ChartDataSets } from "chart.js";
import { Label } from 'ng2-charts';


@Controller('vol/stats')
export class VolController {

    constructor(private readonly volService: VolService) {}

    // http://localhost:3000/vol/avecBoeing737
    @Get("/avecBoeing737")
    async findAvecBoeing737(): Promise<Vol[]>  {
      return this.volService.findVolsAvecBoeing737();
    }

    // http://localhost:3000/vol/prixCarburantParMois
    @Get("/prixCarburantParMois")
    async getPrixCarburant(): Promise<StatsPrix>  {
      let lineChartData: ChartDataSets[] = [{ data: [85, 72, 78, 75, 77, 75], label: 'Prix carburant' },];
      let lineChartLabels: Label[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'];

      let response:StatsPrix = { lineChartData, lineChartLabels };
      return response;
    }

    // http://localhost:3000/vol/partsDeMarche
    @Get("/partsDeMarche")
    async getPartsDeMarche(): Promise<StatsPartsDeMarche>  {
      let radarChartLabels: Label[] = ['Air France', 'Air Canada', 'Lufthansa', 'Swiss Air', 'British Airways', 'American Airlines', 'Delta Air Lines'];
      let radarChartData: ChartDataSets[] = [ { data: [0, 1, 2, 3, 4, 5, 6], label: 'Parts de marché' } ];

      let response:StatsPartsDeMarche = { radarChartLabels,
                                          radarChartData };
      return response;
    }
}
