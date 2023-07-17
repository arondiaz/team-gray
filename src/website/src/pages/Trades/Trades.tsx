import styles from './Trades.module.scss';
import BgLayout from '../../shared/BgLayout';

export const Trades = () => {
	return (
		<div className={styles.homepage}>
			<div className={styles['left-column']}>izquierda</div>
			<div className={styles['middle-column']}>medio</div>
			<div className={styles['right-column']}>derecha</div>
			<BgLayout />
		</div>
	);
};
