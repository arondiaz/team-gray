//Card.tsx
import React from 'react';
export interface TradeCardProps {
	name: string;
	gender: string;
	species: string;
	status: string;
	image: string;
	text: string;
	styles?: {
		tradeCard?: string;
		tradePhoto?: string;
		styleImageProfile?: string;
		tradeInfo?: string;
		styleId?: string;
		tradeText?: string;
	};
}

const TradeCard: React.FC<TradeCardProps> = ({
	name,
	gender,
	species,
	status,
	image,
	styles,
}) => {
	return (
		<>
			<div className={styles?.tradeCard} tabIndex={0}>
				<div className={styles?.tradePhoto}>
					<img
						className={styles?.styleImageProfile}
						src={image}
						alt={`${name}`}
					/>
				</div>
				<div className={styles?.tradeInfo}>
					<p>Nombre: {name}</p>
					<p>Genero: {gender}</p>
					{species && <p>Especie: {species}</p>}
					<p>Estatus: {status}</p>
				</div>
			</div>
		</>
	);
};

export default TradeCard;
