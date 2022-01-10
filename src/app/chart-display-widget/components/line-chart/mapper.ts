import { LineChartSeries } from './line-chart.interface';

export const optionsSimpleMapper = (
  legendData: string,
  seriesData: LineChartSeries[]
) => {
  return {
    ...(legendData && {
      legend: {
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
