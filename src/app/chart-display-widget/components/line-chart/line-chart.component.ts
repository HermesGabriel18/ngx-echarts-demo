import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ThemeOption } from 'ngx-echarts';
import { LineChartSeries } from './line-chart.interface';
import { optionsSimpleMapper } from './mapper';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() theme: string | ThemeOption = '';
  @Input() name: string = 'Line';
  @Input() legend: string[] = [];
  @Input() series: LineChartSeries[] = [];

  options: any = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    dataZoom: {
      type: 'inside',
    },
    yAxis: {
      type: 'value',
    },
  };

  ngOnInit(): void {
    const options = optionsSimpleMapper(this.name, this.series);
    this.options = {
      ...this.options,
      ...options,
    };
  }
}
