import React from 'react';
import styles from '../Home.module.scss';
import { Link } from 'react-router-dom';

interface CommonAccessButtonProps {
	buttonUsersText: string;
	buttonSubText: string;
	userType: string;
}

const CommonAccessButton: React.FC<CommonAccessButtonProps> = ({
	buttonUsersText,
	buttonSubText,
	userType,
}) => {
	const isUserButton = userType.toLowerCase() === 'usuarios';
	return (
		<Link to={isUserButton ? 'trades' : 'login'}>
			<button className={styles.buttonUsers}>
				<span>
					Quiero{' '}
					<span className={styles.buttonUsersTextBold}>{buttonUsersText}</span>{' '}
					{buttonSubText}
				</span>
				<br />
				Acceso
				<span
					className={`${styles.buttonUsersTextBold} ${styles.buttonUsersTextOcean}`}>
					{' '}
					{userType}
				</span>
			</button>
		</Link>
	);
};

export default CommonAccessButton;
