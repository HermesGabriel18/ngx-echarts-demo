import { BarChartSeries } from './bar-chart.interface';

export const optionsSimpleMapper = (
  legendData: string,
  seriesData: BarChartSeries[]
) => {
  return {
    ...(legendData && {
      legend: {
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
