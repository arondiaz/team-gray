import React from 'react';
import styles from '../Home.module.scss';
import { Link } from 'react-router-dom';

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
	const isUserButton = userType.toLowerCase() === 'usuarios';
	return (
		<Link to={isUserButton ? 'trades' : '#'}>
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
		</Link>
	);
};

export default CommonAccessButton;
