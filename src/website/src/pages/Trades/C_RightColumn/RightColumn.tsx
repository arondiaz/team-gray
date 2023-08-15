// RightColumn.tsx
import React from 'react';
import TradeCard from '../Card';
import styles from './RightColumn.module.scss';
import { UpData } from '../A_LeftColumn/LeftColumn';

interface RightColumnProps {
	selectedPerson: UpData | null;
}

export const RightColumn: React.FC<RightColumnProps> = ({ selectedPerson }) => {
	return (
		<>
			<div className={styles.rightColumn}>
				<img
					className={styles.coverImage}
					src='src/pages/Trades/TradesImages/electrician.png'
					alt=''
				/>

				<div className={styles.uPlink}>
					<a
						href='https://miraclelab.com.ar/'
						className='buttonLink'
						target='_blank'
						rel='noopener noreferrer'>
						más información
					</a>
				</div>
				<div>
					{selectedPerson && (
						<TradeCard
							image={selectedPerson.image}
							name={selectedPerson.name}
							gender={selectedPerson.gender}
							species={selectedPerson.species}
							status={selectedPerson.status}
							text={selectedPerson.text}
							styles={{
								styleId: styles.styleId,
								styleImageProfile: styles.styleImageProfile,
								tradeInfo: styles.tradeInfo,
								tradeText: styles.tradeText,
							}}
						/>
					)}
					<div className={styles.scrollableText}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
							dictum ligula. Etiam non nulla vitae erat congue dictum nec eget
							ex. Nam nec suscipit quam, eget tincidunt nulla. Etiam volutpat
							finibus maximus. Nullam rhoncus non odio vel fermentum. Nulla
							facilisi. Fusce efficitur lectus vel orci volutpat tincidunt.
							Vestibulum ac lectus ac eros elementum feugiat. Nullam vel est eu
							ligula posuere hendrerit. Pellentesque et nibh id est viverra
							fringilla.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
