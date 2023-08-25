// Trades.tsx
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

	// Función para recibir los datos filtrados desde el componente LeftColumn
	const handleFilteredData = (filteredData: IProfessionalUser[]) => {
		setFilteredData(filteredData);

		// Reinicia selectedPerson cuando cambian los filtros
		setSelectedPerson(null);
	};

	// Función para manejar el clic en una tarjeta en CenterColumn y actualizar selectedPerson
	const handleCardClick = (person: IProfessionalUser) => {
		setSelectedPerson(person);
	};

	const handleResetFilter = () => {
		// Limpiar los datos filtrados
		setFilteredData([]);
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
