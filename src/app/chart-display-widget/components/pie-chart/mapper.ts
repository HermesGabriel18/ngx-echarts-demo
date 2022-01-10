import { PieChartSeries } from './pie-chart-interface';

export const legendMapper = (legendData: string[]) => {
  return {
    ...(legendData && {
      legend: {
        data: [...legendData],
      },
    }),
  };
};

export const seriesMapper = (seriesData: PieChartSeries[]) => {
  return {
    ...(seriesData && {
      data: [...seriesData],
    }),
  };
};
