// LeftColumn.tsx

import { useState, useEffect } from 'react';
import styles from './LeftColumn.module.scss';
import { ICategories } from '../../../../interfaces/Category.interface';
import { CategoriesService } from '../../../../services/Categories.service';
import { HttpClient } from '@miracledevs/paradigm-web-fetch';

export const LeftColumn: React.FC = () => {
  const [trades, setTrades] = useState<ICategories[]>([]);

  const http = new HttpClient();
  const categoryService = new CategoriesService(http);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await categoryService.getAll();
        if (data) {
          setTrades(data as ICategories[]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleCategory = async (id: string) => {
    const pedido = await fetch(
      `http://www.localhost:5000/api/professional_user/category/${id}`
    );
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
