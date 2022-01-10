import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ThemeOption } from 'ngx-echarts';
import { BarChartSeries } from './bar-chart.interface';
import { optionsSimpleMapper } from './mapper';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @Input() theme: string | ThemeOption = '';
  @Input() name: string = 'Bar';
  @Input() legend: string[] = [];
  @Input() series: BarChartSeries[] = [];

  options: any = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    yAxis: {
      type: 'value',
    },
    dataZoom: [
      {
        type: 'inside',
      },
    ],
  };

  ngOnInit(): void {
    const options = optionsSimpleMapper(this.name, this.series);
    this.options = {
      ...this.options,
      ...options,
    };
  }
}
