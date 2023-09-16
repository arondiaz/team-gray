import { professionalUserServiceInstance } from '../../../../services/ProfessionalUser.service';
import { IProfessionalUser } from '../../../../interfaces/ProfessionalUser.interface';
import { useCategories } from '../../../../hooks/useCategories';
import styles from './LeftColumn.module.scss';

export interface LeftColumnProps {
	onCategoryClick: (professionals: IProfessionalUser[]) => void;
}

export const LeftColumn: React.FC<LeftColumnProps> = ({ onCategoryClick }) => {
	const { trades } = useCategories();

	const handleCategory = async (id: string) => {
		const professionals =
			await professionalUserServiceInstance.getProfessionalUserByCategory(id);

		onCategoryClick(professionals as IProfessionalUser[]);
	};

	return (
		<div className={styles.leftColumn}>
			<div className={styles.topBanner}>Seleccionar Oficio</div>
			<div className={styles.scrollableList}>
				<table className={styles.tradeList}>
					<tbody>
						{trades.map((m) => (
							<tr key={m.id} onClick={() => handleCategory(m.id)}>
								<td>{m.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
