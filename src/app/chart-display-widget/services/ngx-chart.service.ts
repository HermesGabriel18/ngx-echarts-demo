import { Injectable } from '@angular/core';
import { NgxChartSeries } from '../models';

@Injectable({
  providedIn: 'root',
})
export class NgxChartService {
  constructor() {}

  pieLegendMapper = (legendData: string[]) => {
    return {
      ...(legendData && {
        legend: {
          left: 'center',
          bottom: 'bottom',
          data: [...legendData],
        },
      }),
    };
  };

  pieSeriesMapper = (seriesData: NgxChartSeries[]) => {
    return {
      ...(seriesData && {
        data: [...seriesData],
      }),
    };
  };

  lineSimpleOptionsMapper = (
    legendData: string,
    seriesData: NgxChartSeries[]
  ) => {
    return {
      ...(legendData && {
        legend: {
          left: 'center',
          bottom: 'bottom',
          data: [legendData],
        },
      }),
      ...(seriesData && {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: seriesData.map((data) => data.name),
        },
        series: [
          {
            ...(legendData && {
              name: legendData,
            }),
            type: 'line',
            stack: 'counts',
            areaStyle: { origin: 'auto' },
            data: seriesData.map((data) => data.value),
          },
        ],
      }),
    };
  };

  barSimpleOptionsMapper = (
    legendData: string,
    seriesData: NgxChartSeries[]
  ) => {
    return {
      ...(legendData && {
        legend: {
          left: 'center',
          bottom: 'bottom',
          data: [legendData],
        },
      }),
      ...(seriesData && {
        xAxis: {
          data: seriesData.map((data) => data.name),
        },
        series: {
          ...(legendData && {
            name: legendData,
          }),
          type: 'bar',
          data: seriesData.map((data) => data.value),
        },
      }),
    };
  };

  advancedBarOptionsMapper = (seriesData: NgxChartSeries[]) => {
    const categories = this._removeDuplicateEntries(seriesData, 'category').map(
      (item) => item.category
    ) as string[];
    const names = this._removeDuplicateEntries(seriesData, 'name').map(
      (data) => data.name
    );

    return {
      ...(categories &&
        categories.length > 0 && {
          legend: {
            left: 'center',
            bottom: 'bottom',
            data: categories,
          },
        }),
      ...(seriesData && {
        xAxis: {
          data: names,
        },
        series: this._buildBarSeries(categories, seriesData),
      }),
    };
  };

  private _removeDuplicateEntries(
    arr: NgxChartSeries[],
    entry: string
  ): NgxChartSeries[] {
    return arr.filter(
      (v: any, i, a) => a.findIndex((t: any) => t[entry] === v[entry]) === i
    );
  }

  private _buildBarSeries(
    categories: string[],
    arr: NgxChartSeries[]
  ): NgxChartSeries[] {
    let data: any[] = [];
    let series: any[] = [];
    categories.forEach((category) => {
      data = [];
      arr
        .filter((item) => item.category === category)
        .forEach((item) => {
          data = [...data, item.value];
        });
      series = [
        ...series,
        {
          name: category,
          type: 'bar',
          data: data,
        },
      ];
    });
    return series;
  }
}
