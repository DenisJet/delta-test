export interface DataItemProps {
  id: number;
  title: string;
  thisDay: number;
  yesterday: number;
  thisDayWeek: number;
}

export const data = [
  {
    id: 1,
    title: 'Выручка',
    thisDay: 500521,
    yesterday: 480521,
    thisDayWeek: 4805121,
  },
  {
    id: 2,
    title: 'Наличные',
    thisDay: 300000,
    yesterday: 300000,
    thisDayWeek: 300000,
  },
  {
    id: 3,
    title: 'Безналичный расчет',
    thisDay: 100000,
    yesterday: 100000,
    thisDayWeek: 100000,
  },
  {
    id: 4,
    title: 'Кредитные карты',
    thisDay: 100521,
    yesterday: 100521,
    thisDayWeek: 100521,
  },
  {
    id: 5,
    title: 'Средний чек',
    thisDay: 1300,
    yesterday: 900,
    thisDayWeek: 900,
  },
  {
    id: 6,
    title: 'Средний гость',
    thisDay: 1200,
    yesterday: 800,
    thisDayWeek: 800,
  },
  {
    id: 7,
    title: 'Удаления из чека (после оплаты)',
    thisDay: 1000,
    yesterday: 1100,
    thisDayWeek: 900,
  },
  {
    id: 8,
    title: 'Удаления из чека (до оплаты)',
    thisDay: 1300,
    yesterday: 1300,
    thisDayWeek: 900,
  },
  {
    id: 9,
    title: 'Количество чеков',
    thisDay: 34,
    yesterday: 36,
    thisDayWeek: 34,
  },
  {
    id: 10,
    title: 'Количество гостей',
    thisDay: 34,
    yesterday: 36,
    thisDayWeek: 32,
  },
];
