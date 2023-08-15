import React from 'react';
import styles from './About.module.scss';

interface MemberCardProps {
	name: string;
	imageUrl: string;
	githubUrl: string;
	linkedinUrl: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
	name,
	imageUrl,
	githubUrl,
	linkedinUrl,
}) => {
	return (
		<div className={styles.memberCard}>
			<img src={imageUrl} className={styles.imageProfile} alt='member' />
			<h2 className={styles.name}>{name}</h2>
			<div className={styles.socialIcons}>
				<a href={githubUrl} target='_blank' rel='noopener noreferrer'>
					<img
						src='src\assets\icons\icon-github.svg'
						className={styles.icon}
						alt='icon-git'
					/>
				</a>

				<a href={linkedinUrl} target='_blank' rel='noopener noreferrer'>
					<img
						src='src\assets\icons\icon-linkedin.svg'
						className={styles.icon}
						alt='icon-linkedin'
					/>
				</a>
			</div>
		</div>
	);
};

export default MemberCard;
