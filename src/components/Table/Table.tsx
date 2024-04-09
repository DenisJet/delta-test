'use client';
import styles from './Table.module.css';
import { data } from '../../mockData';
import { useState } from 'react';
import Graph from '../Graph/Graph';
import cn from 'classnames';

export default function Table() {
  const [activeGraph, setActiveGraph] = useState(1);

  const percents = (thisDay: number, yesterday: number) => {
    return Math.round((thisDay / yesterday) * 100 - 100);
  };

  return (
    <table className={styles.table}>
      <tr className={styles.row}>
        <th className={styles.head}>Показатель</th>
        <th className={`${styles.head} ${styles.bgBlue}`}>Текущий день</th>
        <th className={styles.head}>Вчера</th>
        <th className={styles.head}>Этот день недели</th>
      </tr>
      {data.length &&
        data.map((el) => (
          <>
            <tr key={el.id} onClick={() => setActiveGraph(el.id)}>
              <td className={styles.cell}>{el.title} руб.</td>
              <td className={`${styles.cell} ${styles.bgBlue}`}>{el.thisDay}</td>
              <td
                className={cn(styles.cell, {
                  [styles.bgRed]: percents(el.thisDay, el.yesterday) < 0,
                  [styles.bgGreen]: percents(el.thisDay, el.yesterday) > 0,
                })}
              >
                {el.yesterday}
                <span
                  className={cn(styles.percents, styles.colorGreen, {
                    [styles.colorRed]: percents(el.thisDay, el.yesterday) < 0,
                  })}
                >
                  {percents(el.thisDay, el.yesterday)}%
                </span>
              </td>
              <td className={styles.cell}>{el.thisDayWeek}</td>
            </tr>
            {el.id === activeGraph ? (
              <tr>
                <td colSpan={4}>
                  <Graph
                    id={el.id}
                    title={el.title}
                    thisDay={el.thisDay}
                    yesterday={el.yesterday}
                    thisDayWeek={el.thisDayWeek}
                  />
                </td>
              </tr>
            ) : (
              ''
            )}
          </>
        ))}
    </table>
  );
}
