import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ThemeOption } from 'ngx-echarts';
import { CoolTheme } from '../../themes';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  theme: string | ThemeOption = '';
  coolTheme = CoolTheme;
  options: EChartsOption = {
    title: {
      text: "Nightingale's Rose Diagram",
      subtext: 'Mocking Data',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      left: 'center',
      bottom: 'bottom',
      data: [
        'rose1',
        'rose2',
        'rose3',
        'rose4',
        'rose5',
        'rose6',
        'rose7',
        'rose8',
      ],
    },
    calculable: true,
    series: {
      name: 'area',
      type: 'pie',
      radius: [30, 110],
      roseType: 'area',
      data: [
        { value: 10, name: 'rose1' },
        { value: 5, name: 'rose2' },
        { value: 15, name: 'rose3' },
        { value: 25, name: 'rose4' },
        { value: 20, name: 'rose5' },
        { value: 35, name: 'rose6' },
        { value: 30, name: 'rose7' },
        { value: 40, name: 'rose8' },
      ],
    },
  };
}
