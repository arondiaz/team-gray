import { useState, useEffect } from 'react';
import { ICategory } from '../interfaces/Category.interface';
import { categoryServiceInstance } from '../services/Category.service';

export function useCategories() {
  const [trades, setTrades] = useState<ICategory[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await categoryServiceInstance.getAll();
        if (data) {
          setTrades(data as ICategory[]);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return { trades, setTrades };
}
