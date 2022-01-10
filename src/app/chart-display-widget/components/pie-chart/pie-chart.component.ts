import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ThemeOption } from 'ngx-echarts';
import { legendMapper, seriesMapper } from './mapper';
import { PieChartSeries, roseType } from './pie-chart.interface';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input() theme: string | ThemeOption = '';
  @Input() name: string = 'Area';
  @Input() roseType: roseType = roseType.AREA;
  @Input() legend: string[] = [];
  @Input() series: PieChartSeries[] = [];

  options: EChartsOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    calculable: true,
  };

  ngOnInit(): void {
    const legend = legendMapper(this.legend);
    const series = seriesMapper(this.series);
    this.options = {
      ...this.options,
      ...legend,
      series: {
        name: this.name,
        type: 'pie',
        radius: [30, 110],
        roseType: this.roseType,
        ...series,
      },
    };
  }
}
