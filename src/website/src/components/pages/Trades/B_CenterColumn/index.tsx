// CenterColumn.tsx
import React, { useState, useEffect } from 'react';
import { TradeCard } from '../Card/index';
import { IProfessionalUser } from '../../../../interfaces/ProfessionalUser.interface';
import GenderFilter from '../GenderFilter';
import SpinnerLogo from '../../../shared/Spinner';

import styles from './CenterColumn.module.scss';

interface CenterColumnProps {
  tradeData: IProfessionalUser[];
  onCardClick: (person: IProfessionalUser) => void;
}

export const CenterColumn: React.FC<CenterColumnProps> = ({
  tradeData,
  onCardClick,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] =
    useState<IProfessionalUser[]>(tradeData);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);

  const calculateAge = (birthdate: string) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const ageInMilliseconds = today.getTime() - birthDate.getTime();
    const ageInYears = Math.floor(
      ageInMilliseconds / (365 * 24 * 60 * 60 * 1000)
    );
    return ageInYears;
  };

  useEffect(() => {
    applyGenderFilter();
  }, [genderFilter, tradeData]);

  const applyGenderFilter = () => {
    if (genderFilter === null) {
      setFilteredData(tradeData);
    } else {
      const filteredData = tradeData.filter(
        (person) => person.gender.toLowerCase() === genderFilter.toLowerCase()
      );
      setFilteredData(filteredData);
    }
  };

  const handleGenderFilterChange = (selectedGender: string | null) => {
    setGenderFilter(selectedGender);
  };

  const handleCardClick = (person: IProfessionalUser) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onCardClick({
        ...person,
        age: calculateAge(person.birth_date),
      });
    }, 2000);
  };

  return (
    <>
      <div className={styles.centerColumn}>
        <div className={styles.filterContainer}>
          <GenderFilter
            genderFilter={genderFilter}
            onGenderFilterChange={handleGenderFilterChange}
          />
        </div>
        <div className={styles.scrollableList}>
          {isLoading ? (
            <div className={styles.spinnerContainer}>
              <SpinnerLogo />
            </div>
          ) : (
            filteredData.map((m) => (
              <div key={m.id} onClick={() => handleCardClick(m)}>
                <TradeCard
                  img={m.img}
                  name={m.name}
                  lastName={m.last_name}
                  birthDate={m.birth_date}
                  gender={m.gender}
                  styles={{
                    tradeCard: styles.tradeCard,
                    styleImageProfile: styles.styleImageProfile,
                    tradeInfo: styles.tradeInfo,
                    tradePhoto: styles.tradePhoto,
                    tradeText: styles.tradeText,
                  }}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
