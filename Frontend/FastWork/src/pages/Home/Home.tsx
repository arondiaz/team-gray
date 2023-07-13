import styles from './Home.module.scss';
import personImage from '../../shared/person_image.png';
import ProfessionalUserButton from './Users-Buttons/ProfessionalUserButton';
import ClientUserButton from './Users-Buttons/ClientUserButton';

export const Home: React.FC = () => {
	return (
		<div className={styles.homeContainer}>
			{/* Person image / logo container */}
			<div className={styles.isotipoLogoContainer}>
				<img
					src={personImage}
					alt='Person using a smartphone'
					className={styles.personImage}
				/>

				<img
					src='/isotype_logo.svg'
					alt='Logo'
					className={styles.isotipoLogo}
				/>
			</div>

			{/* Slogan text */}
			<div className={styles.textSloganContainer}>
				<p className={styles.slogan}>Conectando habilidades.</p>
				<p className={styles.slogan}>Construyendo oportunidades.</p>

				{/* Access buttons */}
				<ProfessionalUserButton />
				<ClientUserButton />
			</div>
		</div>
	);
};

export default Home;
