import styles from '../Home.module.scss';

const ProfessionalUserButton = () => {
	return (
		<button className={styles.button}>
			<span>
				Quiero <span className={styles.buttonTextBold}>ofrecer</span> mis
				servicios
			</span>
			<br />
			Acceso
			<span className={`${styles.buttonTextBold} ${styles.buttonTextOcean}`}>
				{' '}
				trabajadores
			</span>
		</button>
	);
};

export default ProfessionalUserButton;
