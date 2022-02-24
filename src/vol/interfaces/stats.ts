import { ChartDataSets } from "chart.js";
import { Label } from 'ng2-charts';

export interface StatsPrix { 
    lineChartData: ChartDataSets[];
    lineChartLabels: Label[];
}  

export interface StatsPartsDeMarche {
    radarChartLabels: Label[];
    radarChartData: ChartDataSets[];
}  