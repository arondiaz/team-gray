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
		<div>
			<img src={imageUrl} className={styles.imageProfile} alt='member' />
			<h2>{name}</h2>
			<ul>
				<li>
					<a href={githubUrl} target='_blank' rel='noopener noreferrer'>
						<img
							src='src\assets\icons\icon-github.svg'
							className={styles.icon}
							alt='icon-git'
						/>
					</a>
				</li>
				<li>
					<a href={linkedinUrl} target='_blank' rel='noopener noreferrer'>
						<img
							src='src\assets\icons\icon-linkedin.svg'
							className={styles.icon}
							alt='icon-linkedin'
						/>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default MemberCard;
