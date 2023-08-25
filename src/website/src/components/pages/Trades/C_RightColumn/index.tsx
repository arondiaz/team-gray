// RightColumn.tsx
import React from 'react';
import { IProfessionalUser } from '../../../../interfaces/ProfessionalUser.interface';
import { calculateAge } from '../utils';
import ProfileImages from '../assets/ProfileImage';

import styles from './RightColumn.module.scss';

interface RightColumnProps {
	selectedPerson: IProfessionalUser | null;
}

export const RightColumn: React.FC<RightColumnProps> = ({ selectedPerson }) => {
	return (
		<div className={styles.rightColumn}>
			<div className={styles.topBanner}>
				{' '}
				Perfil Profesional:{' '}
				{selectedPerson
					? `${selectedPerson.name} ${selectedPerson.lastname}`
					: 'Perfil Profesional'}
			</div>
			<div className={styles.coverImage}>
				{selectedPerson && (
					<ProfileImages categoryId={Number(selectedPerson.category_id)} />
				)}
			</div>

			{selectedPerson ? (
				<div className={styles.profileInfo}>
					<div className={styles.profileImage}></div>
					{/* <img className={styles.profileImage} src={selectedPerson.img} /> */}

					<table className={styles.profileTable}>
						<tbody>
							<tr>
								<th className={styles.profileTitle}>
									Link:{' '}
									<span className={styles.regularData}>
										{selectedPerson.link}
									</span>
								</th>
							</tr>
							<tr>
								<th className={styles.profileTitle}>
									Nombre:{' '}
									<span className={styles.regularData}>
										{selectedPerson.name} {selectedPerson.lastname}
									</span>
								</th>
							</tr>

							<tr>
								<th className={styles.profileTitle}>
									Edad:{' '}
									<span className={styles.regularData}>
										{calculateAge(selectedPerson.birthdate)}
									</span>
								</th>
							</tr>

							<tr>
								<th className={styles.profileTitle}>
									Email:{' '}
									<span className={styles.regularData}>
										{selectedPerson.email}
									</span>
								</th>
							</tr>

							<tr>
								<th className={styles.profileTitle}>
									Ciudad:{' '}
									<span className={styles.regularData}>
										{selectedPerson.city}
									</span>
								</th>
							</tr>
							<tr>
								<th className={styles.profileTitle}>
									Teléfono:{' '}
									<span className={styles.regularData}>
										{selectedPerson.tel}
									</span>
								</th>
							</tr>

							<tr>
								<th className={styles.profileTitle}>
									Género:{' '}
									<span className={styles.regularData}>
										{selectedPerson.gender}
									</span>
								</th>
							</tr>

							<tr>
								<th className={styles.profileTitle}>
									Número de Autorización:{' '}
									<span className={styles.regularData}>
										{selectedPerson.auth_number}
									</span>
								</th>
							</tr>
						</tbody>
					</table>
					<div className={styles.scrollableText}>
						<p>Sobre mí: {selectedPerson.about_me}</p>
					</div>
				</div>
			) : (
				<p>Selecciona un profesional para ver su perfil completo</p>
			)}
		</div>
	);
};
