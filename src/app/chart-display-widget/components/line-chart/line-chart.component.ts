import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  isLoading = false;
  options: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5'],
    },
    xAxis: [
      {
        type: 'category',
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    dataZoom: [
      {
        type: 'inside',
      },
    ],
    series: [
      {
        name: 'X-1',
        type: 'line',
        stack: 'counts',
        areaStyle: { origin: 'auto' },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'X-2',
        type: 'line',
        stack: 'counts',
        areaStyle: { origin: 'auto' },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'X-3',
        type: 'line',
        stack: 'counts',
        areaStyle: { origin: 'auto' },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'X-4',
        type: 'line',
        stack: 'counts',
        areaStyle: { origin: 'auto' },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: 'X-5',
        type: 'line',
        stack: 'counts',
        areaStyle: { origin: 'auto' },
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };
}
