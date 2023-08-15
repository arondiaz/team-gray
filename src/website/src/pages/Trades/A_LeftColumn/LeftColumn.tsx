// LeftColumn.tsx

import { useState, useEffect } from 'react';
import styles from './LeftColumn.module.scss';
export interface ICategory {
  id: number;
  name: string;
}

export const LeftColumn: React.FC = () => {
  const [trades, setTrades] = useState<ICategory[]>([]);

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

  const handleCategory = async (id: any) => {
    const pedido = await fetch(`http://www.localhost:5000/api/up/category/${id}`);
    const json = await pedido.json();
    console.log(json);
  };

  return (
    <div className={styles.leftColumn}>
      <div className={styles.searchContainer}></div>
      <div className={styles.scrollableList}>
        <table className={styles.tradeList}>
          <tbody>
            <ul>
              {trades.map((m) => (
                <button onClick={() => handleCategory(m.id)}>{m.name}</button>
              ))}
            </ul>
          </tbody>
        </table>
      </div>
    </div>
  );
};
