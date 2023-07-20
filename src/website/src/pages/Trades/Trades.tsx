import styles from './Trades.module.scss';
import BgLayout from '../../shared/BgLayout';
import TileApp from './CommonTile/Tile';

export const Trades = () => {
	return (
		<div className={styles.homepage}>
			<TileApp />
			<BgLayout />
		</div>
	);
};
