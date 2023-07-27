// Trades.tsx
import React, { useState } from 'react';
import { LeftColumn, UpData } from './A_LeftColumn/LeftColumn';
import CenterColumn from './B_CenterColumn/CenterColumn';
import { RightColumn } from './C_RightColumn/RightColumn';
import styles from './Trades.module.scss';
import BgLayout from '../../shared/BgLayout';

export function Trades() {
	const [filteredData, setFilteredData] = useState<UpData[]>([]);
	const [selectedPerson, setSelectedPerson] = useState<UpData | null>(null);

	// Función para recibir los datos filtrados desde el componente LeftColumn
	const handleFilteredData = (filteredData: UpData[]) => {
		setFilteredData(filteredData);

		// Reinicia selectedPerson cuando cambian los filtros
		setSelectedPerson(null);
	};

	// Función para manejar el clic en una tarjeta en CenterColumn y actualizar selectedPerson
	const handleCardClick = (person: UpData) => {
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
					<LeftColumn
						onFilteredData={handleFilteredData}
						onResetFilter={handleResetFilter}
					/>
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
