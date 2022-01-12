import { Component, Input, OnChanges } from '@angular/core';
import { ThemeOption } from 'ngx-echarts';
import { NgxChartSeries, NgxPieChartRoseType } from '../../models';
import { NgxChartService } from '../../services';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnChanges {
  @Input() isLoading: boolean = false;
  @Input() theme: string | ThemeOption = '';
  @Input() colors: string[] = [];
  @Input() title = '';
  @Input() name: string = 'Area';
  @Input() roseType: NgxPieChartRoseType = NgxPieChartRoseType.AREA;
  @Input() legend: string[] = [];
  @Input() series: NgxChartSeries[] = [];

  options: any = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {d}%',
    },
    calculable: true,
  };

  constructor(private _ngxChartsService: NgxChartService) {}

  ngOnChanges() {
    this._loadData();
  }

  private _loadData() {
    const options = this._ngxChartsService.pieSimpleOptionsMapper(
      this.legend,
      this.series,
      this.name,
      this.roseType
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
