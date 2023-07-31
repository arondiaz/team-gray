// LeftColumn.tsx

import React, { useState, useEffect } from 'react';
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

export interface LeftColumnProps {
  onFilteredData: (filteredData: UpData[]) => void;
  onResetFilter: () => void;
}

export const LeftColumn: React.FC<LeftColumnProps> = ({ onFilteredData, onResetFilter }) => {
  const [trades, setTrades] = useState<UpData[]>([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<UpData[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        const upDataList: UpData[] = data.results.map((character: any) => ({
          id: character.id,
          name: character.name,
          gender: character.gender,
          species: character.species,
          status: character.status,
          image: character.image,
        }));

        setTrades(upDataList);
        setFilteredData(upDataList);
      })
      .catch((error) => {
        console.error('Error fetching data from the API:', error);
      });
  }, []);

  useEffect(() => {
    applyFilters();
  }, [search]);

  const applyFilters = () => {
    if (search === '') {
      setFilteredData(trades);
    } else {
      const searchKeywords = removeAccents(search).toLowerCase().split(' ');
      const filteredData = trades.filter((dato) =>
        searchKeywords.some(
          (keyword) =>
            removeAccents(dato.name).toLowerCase().includes(keyword) ||
            removeAccents(dato.gender).toLowerCase().includes(keyword),
        ),
      );
      setFilteredData(filteredData);
    }
  };

  const handleSearchFilter = (value: string) => {
    setSearch(value);
  };

  const removeAccents = (text: string) => {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  };

  const handleResetFilter = () => {
    setSearch('');
    onResetFilter();
  };

  return (
    <div className={styles.leftColumn}>
      <div className={styles.searchContainer}>
        <input
          value={search}
          onChange={(e) => handleSearchFilter(e.target.value)}
          type='text'
          placeholder='Buscar por nombre...'
          className={styles.formControl}
        />
        <button onClick={handleResetFilter} className={styles.buttonReset}>
          Reset
        </button>
      </div>
      <div className={styles.scrollableList}>
        <table className={styles.tradeList}>
          <tbody>
            {filteredData.map((trade) => (
              <tr key={trade.id} onClick={() => onFilteredData([trade])}>
                <td>{trade.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
