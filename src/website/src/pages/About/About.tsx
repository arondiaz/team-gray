import styles from './About.module.scss';
import MemberCard from './MemberCards';
import BgLayout from '../../shared/BgLayout';

export const About = () => {
	return (
		<div className={styles.aboutContainer}>
			<section>
				<div>
					<MemberCard
						name='Nicolás Loreto'
						imageUrl='src\assets\images\ProfilePhotos\nicolas.webp'
						githubUrl='https://github.com/NicoLoreto'
						linkedinUrl='https://www.linkedin.com/in/nico-loreto/'
					/>
				</div>
				<div>
					<MemberCard
						name='Hernán Gobulin'
						imageUrl='src\assets\images\ProfilePhotos\hernan.webp'
						githubUrl='https://github.com/hernan-go'
						linkedinUrl='https://www.linkedin.com/in/h-l-g/'
					/>
				</div>
				<div>
					<MemberCard
						name='Arón Díaz'
						imageUrl='src\assets\images\ProfilePhotos\aron.webp'
						githubUrl='https://github.com/arondiaz'
						linkedinUrl='https://www.linkedin.com/in/arondiaz/'
					/>
				</div>
				<div>
					<MemberCard
						name='Diego Hamui'
						imageUrl='src\assets\images\ProfilePhotos\diego.webp'
						githubUrl='https://github.com/DIEGOHAMUI'
						linkedinUrl='https://www.linkedin.com/in/diegojesushamui/'
					/>
				</div>
				<BgLayout />
			</section>
		</div>
	);
};
