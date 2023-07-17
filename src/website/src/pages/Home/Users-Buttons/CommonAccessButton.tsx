import React from 'react';
import styles from '../Home.module.scss';

interface CommonAccessButtonProps {
	buttonText: string;
	buttonSubText: string;
	userType: string;
}

const CommonAccessButton: React.FC<CommonAccessButtonProps> = ({
	buttonText,
	buttonSubText,
	userType,
}) => {
	return (
		<button className={styles.button}>
			<span>
				Quiero <span className={styles.buttonTextBold}>{buttonText}</span>{' '}
				{buttonSubText}
			</span>
			<br />
			Acceso
			<span className={`${styles.buttonTextBold} ${styles.buttonTextOcean}`}>
				{' '}
				{userType}
			</span>
		</button>
	);
};

export default CommonAccessButton;
