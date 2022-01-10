import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-display-widget',
  templateUrl: './chart-display-widget.component.html',
  styleUrls: ['./chart-display-widget.component.scss'],
})
export class ChartDisplayWidgetComponent {
  name: string = 'Testing';
  type: string = 'bar';
  legendData = [
    'rose1',
    'rose2',
    'rose3',
    'rose4',
    'rose5',
    'rose6',
    'rose7',
    'rose8',
  ];
  seriesData = [
    { value: 10, name: 'rose1' },
    { value: 5, name: 'rose2' },
    { value: 15, name: 'rose3' },
    { value: 25, name: 'rose4' },
    { value: 20, name: 'rose5' },
    { value: 35, name: 'rose6' },
    { value: 30, name: 'rose7' },
    { value: 40, name: 'rose8' },
  ];
}
