// LeftColumn.tsx

import { useState, useEffect } from 'react';
import styles from './LeftColumn.module.scss';
export interface UpData {
  id: number;
  name: string;
  gender: string;
  species: string;
  status: string;
  image: string;
  text: string;
}

export const LeftColumn: React.FC = () => {
  const [trades, setTrades] = useState<UpData[]>([]);

  useEffect(() => {
    fetch('http://www.localhost:5000/api/categories')
      .then((response) => response.json())
      .then((data) => {
        setTrades(data);
      })
      .catch((error) => {
        console.error('Error fetching data from the API:', error);
      });
  }, []);

  console.log(trades.map((m) => m.id));

  return (
    <div className={styles.leftColumn}>
      <div className={styles.searchContainer}></div>
      <div className={styles.scrollableList}>
        <table className={styles.tradeList}>
          <tbody>
            <ul>
              {trades.map((m) => (
                <button>{m.name}</button>
              ))}
            </ul>
          </tbody>
        </table>
      </div>
    </div>
  );
};
