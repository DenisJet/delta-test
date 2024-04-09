import { DataItemProps } from '@/mockData';
import './Graph.module.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function Graph({ title, thisDay, yesterday, thisDayWeek }: DataItemProps) {
  const options = {
    title: {
      text: `${title}`,
    },
    xAxis: {
      categories: ['', '', ''],
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    series: [
      {
        data: [thisDay, yesterday, thisDayWeek],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
