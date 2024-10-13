import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import {useMediaQuery} from '@/hooks/use-media-query'

const chartSetting = {
  xAxis: [
    {
      label: 'pontos',
    },
  ],
  width: 200,
  height: 400,
};

const chartSettingLg = {
  xAxis: [
    {
      label: 'pontos',
    },
  ],
  categoryGapRatio: 0,
      barGapRatio: 0.2,
  width: 600,
  height: 400,
};

type LineProps = {
  dataset : any | undefined
}

export default function ChartsOverviewDemo({dataset} : LineProps) {
  const matches = useMediaQuery('(min-width:980px)');

  return (
    <>
    {matches && <BarChart
      dataset={dataset}    
      series={[{dataKey: 'value'}]}
      grid={{ vertical: true }}      
      yAxis={[{ scaleType: 'band', dataKey: 'question' }]}
      layout="horizontal"      
      {...chartSettingLg}
    />}
    {!matches && <BarChart
      dataset={dataset}
      series={[{ dataKey: 'value'}]}
      grid={{ vertical: true }}      
      yAxis={[{ scaleType: 'band', dataKey: 'question' }]}
      layout="horizontal"
      {...chartSetting}
    />}
    </>
  );
}