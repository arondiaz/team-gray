import React from 'react';

interface ProfileImagesProps {
	categoryId: number;
}

interface ImagePaths {
	[key: number]: string;
}

const ProfileImages: React.FC<ProfileImagesProps> = ({ categoryId }) => {
	const basePath = 'src/components/pages/Trades/assets';
	const imagePaths: ImagePaths = {
		1: 'electrician.png',
		2: 'plumber.png',
		3: 'carpenter.png',
		4: 'painter.png',
		5: 'bricklayer.png',
		6: 'gasman.png',
		7: 'gardener.png',
		8: 'air_conditioning_technician.png',
		9: 'locksmith.png',
		10: 'roofer.png',
		11: 'security_system_installer.png',
		12: 'glazier.png',
		13: 'floor_installer.png',
		14: '',
		15: 'interior_designer.png',
		16: 'computer_technical_support.png',
	};

	const imagePath = `${basePath}/${imagePaths[categoryId]}`;

	return <img src={imagePath} alt={`Categoría ${categoryId}`} />;
};

export default ProfileImages;
