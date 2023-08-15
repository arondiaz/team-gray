import React from 'react';

export interface GenderFilterProps {
	genderFilter: string | null;
	onGenderFilterChange: (selectedGender: string | null) => void;
}

const GenderFilter: React.FC<GenderFilterProps> = ({
	genderFilter,
	onGenderFilterChange,
}) => {
	const handleGenderFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedGender = e.target.value;
		onGenderFilterChange(selectedGender === 'All' ? null : selectedGender);
	};

	return (
		<div>
			<label>
				<input
					type='radio'
					value='All'
					checked={genderFilter === null}
					onChange={handleGenderFilterChange}
				/>
				Todos
			</label>
			<label>
				<input
					type='radio'
					value='Male'
					checked={genderFilter === 'Male'}
					onChange={handleGenderFilterChange}
				/>
				M
			</label>
			<label>
				<input
					type='radio'
					value='Female'
					checked={genderFilter === 'Female'}
					onChange={handleGenderFilterChange}
				/>
				F
			</label>
			<label>
				<input
					type='radio'
					value='Unknown'
					checked={genderFilter === 'Unknown'}
					onChange={handleGenderFilterChange}
				/>
				NB
			</label>
		</div>
	);
};

export default GenderFilter;
