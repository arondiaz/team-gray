// utils.ts

export const calculateAge = (birthdate: string) => {
	const today = new Date();
	const birthDate = new Date(birthdate);
	const ageInMilliseconds = today.getTime() - birthDate.getTime();
	const ageInYears = Math.floor(
		ageInMilliseconds / (365 * 24 * 60 * 60 * 1000)
	);
	return ageInYears;
};
