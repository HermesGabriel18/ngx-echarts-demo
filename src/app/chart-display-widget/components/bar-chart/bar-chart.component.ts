import { Component, Input, OnChanges } from '@angular/core';
import { ThemeOption } from 'ngx-echarts';
import { NgxChartSeries } from '../../models';
import { NgxChartService } from '../../services';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnChanges {
  @Input() isLoading: boolean = false;
  @Input() advanced: boolean = false;
  @Input() theme: string | ThemeOption = '';
  @Input() colors: string[] = [];
  @Input() title = '';
  @Input() name: string = 'Line';
  @Input() series: NgxChartSeries[] = [];

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

  constructor(private _ngxChartsService: NgxChartService) {}

  ngOnChanges(): void {
    this._loadData();
  }

  private _loadData() {
    const options = this.advanced
      ? this._ngxChartsService.advancedOptionsMapper(this.series)
      : this._ngxChartsService.barSimpleOptionsMapper(this.name, this.series);
    this.options = {
      ...this.options,
      ...(this.colors.length > 0 && {
        color: [...this.colors],
      }),
      title: {
        text: this.title,
        left: 'center',
      },
      ...options,
    };
  }
}
