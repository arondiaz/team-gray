import styles from './Home.module.scss';
import personImage from '../../shared/person_image.png';
import CommonAccessButton from './Users-Buttons/CommonAccessButton';

export const Home: React.FC = () => {
	return (
		<div>
			{/* Person image / logo container */}
			<div>
				<img
					src={personImage}
					alt='Person using a smartphone'
					className={styles.personImage}
				/>
			</div>
			<div className={styles.isotipoLogoContainer}>
				<img
					src='/isotype_home.svg'
					alt='Logo'
					className={styles.isotipoLogo}
				/>
			</div>

			{/* Slogan text */}
			<div className={styles.textSloganContainer}>
				<p className={styles.slogan}>Conectando habilidades.</p>
				<p className={styles.slogan}>Construyendo oportunidades.</p>

				{/* Access buttons */}
				<CommonAccessButton
					buttonText='contratar'
					buttonSubText='un servicios'
					userType='usuarios'
				/>
				<CommonAccessButton
					buttonText='ofrecer'
					buttonSubText='mis servicios'
					userType='profesionales'
				/>
			</div>
		</div>
	);
};

export default Home;
