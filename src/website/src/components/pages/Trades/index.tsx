// Index.tsx
import { useState } from 'react';
import { IProfessionalUser } from '../../../../src/interfaces/ProfessionalUser.interface';
import { LeftColumn } from './A_LeftColumn/index';
import { CenterColumn } from './B_CenterColumn/index';
import { RightColumn } from './C_RightColumn/index';
import styles from './Trades.module.scss';
import BgLayout from '../../shared/BackgroundLayout';

export function Trades() {
	const [filteredData, setFilteredData] = useState<IProfessionalUser[]>([]);
	const [selectedPerson, setSelectedPerson] =
		useState<IProfessionalUser | null>(null);

	const handleFilteredData = (filteredData: IProfessionalUser[]) => {
		setFilteredData(filteredData);

		setSelectedPerson(null);
	};

	const handleCardClick = (person: IProfessionalUser) => {
		setSelectedPerson(person);
	};

	return (
		<>
			<div className={styles.tradesContainer}>
				<div>
					<LeftColumn onCategoryClick={handleFilteredData} />
				</div>
				<div>
					<CenterColumn
						tradeData={filteredData}
						onCardClick={handleCardClick}
					/>
				</div>
				<div>
					<RightColumn selectedPerson={selectedPerson} />
				</div>
				<BgLayout />
			</div>
		</>
	);
}
