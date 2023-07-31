// CenterColumn.tsx
import React, { useState, useEffect } from 'react';
import TradeCard from '../Card';
import styles from './CenterColumn.module.scss';
import { UpData } from '../A_LeftColumn/LeftColumn';
import GenderFilter from '../GenderFilter';
import SpinnerLogo from '../../../shared/SpinnerLogo'; // Importamos el componente LogoSpinner

interface CenterColumnProps {
	tradeData: UpData[];
	onCardClick: (person: UpData) => void;
}

const CenterColumn: React.FC<CenterColumnProps> = ({
	tradeData,
	onCardClick,
}) => {
	const [isLoading, setIsLoading] = useState(false); // Estado para controlar el spinner
	const [filteredData, setFilteredData] = useState<UpData[]>(tradeData);
	const [genderFilter, setGenderFilter] = useState<string | null>(null);

	useEffect(() => {
		applyGenderFilter();
	}, [genderFilter, tradeData]);

	const applyGenderFilter = () => {
		if (genderFilter === null) {
			// Si el género es null, mostrar todos los perfiles sin aplicar el filtro
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

	const handleCardClick = (person: UpData) => {
		setIsLoading(true); // Mostramos el spinner antes de realizar la carga de datos

		// Simulamos una carga de datos con un retraso de 2 segundos
		setTimeout(() => {
			setIsLoading(false); // Ocultamos el spinner después de la carga de datos
			onCardClick(person); // Llamamos a la función onCardClick para mostrar la tarjeta en CenterColumn
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
					{/* Se muestra SpinnerLogo si isLoading es true */}
					{isLoading ? (
						<div className={styles.spinnerContainer}>
							<SpinnerLogo />
						</div>
					) : (
						// Mostramos los datos filtrados si isLoading es false
						filteredData.map((trade) => (
							<div key={trade.id} onClick={() => handleCardClick(trade)}>
								<TradeCard
									name={trade.name}
									gender={trade.gender}
									species={trade.species}
									status={trade.status}
									image={trade.image}
									text={trade.text}
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

export default CenterColumn;
