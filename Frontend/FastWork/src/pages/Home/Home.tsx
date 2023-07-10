import React from 'react';
import styles from './Home.module.scss';
import personImage from '../../shared/person_image.png'; // Ruta a la imagen de la persona

export const Home: React.FC = () => {
	return (
		<div className={styles.homeContainer}>
			<div className={styles.logoContainer}>
				<img src={personImage} alt='Persona' className={styles.personImage} />
				<img
					src='../../../public/isotipo_logo.svg'
					alt='Logo'
					className={styles.logo}
				/>
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Conectando habilidades.</h1>
				<h2 className={styles.subtitle}>Construyendo oportunidades.</h2>
			</div>
		</div>
	);
};
