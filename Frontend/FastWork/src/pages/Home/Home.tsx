import React from 'react';
import styles from './Home.module.scss'; // Importa los estilos del archivo .module.scss

export const Home = () => {
	return (
		<div className={styles.homeContainer}>
			<h1 className={styles.homeTitle}>Home</h1>
		</div>
	);
};
