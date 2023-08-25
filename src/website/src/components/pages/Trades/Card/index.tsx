//Card.tsx

import React from 'react';

export interface TradeCardProps {
	img?: string;
	name: string;
	lastName: string;
	birthDate: string;
	gender: string;

	styles?: {
		tradeCard?: string;
		tradePhoto?: string;
		styleImageProfile?: string;
		tradeInfo?: string;
		styleId?: string;
		tradeText?: string;
	};
}

const calculateAge = (birthdate: string) => {
	const today = new Date();
	const birthDate = new Date(birthdate);
	const ageInMilliseconds = today.getTime() - birthDate.getTime();
	const ageInYears = Math.floor(
		ageInMilliseconds / (365 * 24 * 60 * 60 * 1000)
	);
	return ageInYears;
};

export const TradeCard: React.FC<TradeCardProps> = ({
	img,
	name,
	lastName,
	birthDate,
	gender,

	styles,
}) => {
	return (
		<>
			<div className={styles?.tradeCard} tabIndex={0}>
				<div className={styles?.tradePhoto}>
					<img
						className={styles?.styleImageProfile}
						src={img}
						alt={`${name}`}
					/>
				</div>
				<div className={styles?.tradeInfo}>
					<p>Nombre: {name}</p>
					<p>Apellido: {lastName}</p>
					<p>Edad: {calculateAge(birthDate)}</p>
					<p>Genero: {gender}</p>
				</div>
			</div>
		</>
	);
};
export default TradeCard;
