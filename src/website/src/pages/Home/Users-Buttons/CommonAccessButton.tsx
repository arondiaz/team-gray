import React from 'react';
import styles from '../Home.module.scss';

interface UserButtonProps {
	buttonText: string;
	buttonSubText: string;
}

const UserButton: React.FC<UserButtonProps> = ({
	buttonText,
	buttonSubText,
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
				usuarios
			</span>
		</button>
	);
};

export default UserButton;
