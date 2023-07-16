import styles from './Trades.module.scss';
import BgLayout from '../../shared/BgLayout';

export const Trades = () => {
	return (
		<>
			<div className={styles.pageContainer}>
				<h1 className={styles.pageTitle}>Oficios</h1>
			</div>
			<BgLayout />
		</>
	);
};
