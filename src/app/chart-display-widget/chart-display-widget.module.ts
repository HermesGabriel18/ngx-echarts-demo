import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartDisplayWidgetRoutingModule } from './chart-display-widget-routing.module';
import { ChartDisplayWidgetComponent } from './chart-display-widget.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [ChartDisplayWidgetComponent, PieChartComponent],
  imports: [CommonModule, ChartDisplayWidgetRoutingModule, NgxEchartsModule],
})
export class ChartDisplayWidgetModule {}
