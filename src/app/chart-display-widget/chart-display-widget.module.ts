import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartDisplayWidgetRoutingModule } from './chart-display-widget-routing.module';
import { ChartDisplayWidgetComponent } from './chart-display-widget.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { LineChartComponent } from './components/line-chart/line-chart.component';

@NgModule({
  declarations: [ChartDisplayWidgetComponent, PieChartComponent, LineChartComponent],
  imports: [CommonModule, ChartDisplayWidgetRoutingModule, NgxEchartsModule],
})
export class ChartDisplayWidgetModule {}
