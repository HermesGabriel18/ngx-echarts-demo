import { Component, Input, OnChanges } from '@angular/core';
import { ThemeOption } from 'ngx-echarts';
import { NgxChartSeries } from '../../models';
import { NgxChartService } from '../../services';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnChanges {
  @Input() isLoading: boolean = false;
  @Input() theme: string | ThemeOption = '';
  @Input() colors: string[] = [];
  @Input() title = '';
  @Input() name: string = 'Line';
  @Input() series: NgxChartSeries[] = [];

  options: any = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    dataZoom: {
      type: 'inside',
    },
    yAxis: {
      type: 'value',
    },
  };

  constructor(private _ngxChartsService: NgxChartService) {}

  ngOnChanges(): void {
    this._loadData();
  }

  private _loadData() {
    const options = this._ngxChartsService.lineSimpleOptionsMapper(
      this.name,
      this.series
    );
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
