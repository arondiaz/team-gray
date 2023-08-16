import { useState, useEffect } from 'react';
import { ICategories } from '../interfaces/Category.interface';
import { CategoriesService } from '../services/Categories.service';
import { HttpClient } from '@miracledevs/paradigm-web-fetch';

export function useCategories() {
  const [trades, setTrades] = useState<ICategories[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const http = new HttpClient();
        const categoryService = new CategoriesService(http);
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

  return { trades, setTrades };
}
