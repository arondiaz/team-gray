// LeftColumn.tsx

import { useState, useEffect } from 'react';
import styles from './LeftColumn.module.scss';
import { ICategories } from '../../../../interfaces/Category.interface';
import { CategoriesService } from '../../../../services/Categories.service';
import { HttpClient } from '@miracledevs/paradigm-web-fetch';
import { ProfessionalUserService } from '../../../../services/ProfessionalUser.service';
import { IProfessionalUser } from '../../../../interfaces/ProfessionalUser.interface';
import { useCategories } from '../../../../hooks/useCategories';

export const LeftColumn: React.FC = () => {
  const http = new HttpClient();
  const professionalUserService = new ProfessionalUserService(http);
  const { trades, setTrades } = useCategories();

  useEffect(() => {
    setTrades(trades);
  }, []);

  const [professional, setProfessional] = useState<IProfessionalUser[]>([]);

  const handleCategory = async (id: string) => {
    const request = await professionalUserService.getProfessionalUserByCategory(
      id
    );

    setProfessional(request as IProfessionalUser[]);
  };
  console.log(professional);
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
