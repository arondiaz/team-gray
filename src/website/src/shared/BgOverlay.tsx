import styles from './BgOverlay.module.scss';
import { useEffect, useState } from 'react';

export default function BgOverlay() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setVisible(true);
		}, 100);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<div className={`${styles.overlayContainer} ${visible ? styles.show : ''}`}>
			<div className={styles.purpleOverlay}></div>
		</div>
	);
}
