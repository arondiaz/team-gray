import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import classes from './Header.module.scss';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const [size, setSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (size.width > 768 && menuOpen) {
			setMenuOpen(false);
		}
	}, [size.width, menuOpen]);

	const menuToggleHandler = () => {
		setMenuOpen((p) => !p);
	};

	const [activeLink, setActiveLink] = useState('/');

	const handleLinkClick = (
		event: React.MouseEvent<HTMLAnchorElement>,
		link: string
	) => {
		event.preventDefault();
		setActiveLink(link);
	};

	return (
		<header className={classes.header}>
			<div className={classes.header__content}>
				<div className={classes.header__content__logo}>
					{/* Navigation logo & items */}
					<img src='/logo_fastwork_purple.svg'></img>
				</div>

				{/* Navigation block */}
				<nav
					className={`${classes.header__content__nav} ${
						menuOpen ? classes.isMenu : ''
					}`}>
					<ul>
						{/* Navigation item: Home */}
						<li>
							<Link
								to='/'
								className={
									activeLink === '/'
										? `${classes.active} ${classes.activeBar}`
										: ''
								}>
								Home
							</Link>
						</li>
						{/* Navigation item: Oficios */}
						<li>
							<Link
								to='trades'
								className={
									activeLink === '/trades'
										? `${classes.active} ${classes.activeBar}`
										: ''
								}>
								Oficios
							</Link>
						</li>
						{/* Navigation item: Sobre nosotros */}
						<li>
							<Link
								to='/about'
								className={
									activeLink === '/nosotros'
										? `${classes.active} ${classes.activeBar}`
										: ''
								}>
								Sobre nosotros
							</Link>
						</li>
						{/* Navigation item: Política */}
						<li>
							<Link
								to='/privacy-policy'
								className={
									activeLink === '/politica'
										? `${classes.active} ${classes.activeBar}`
										: ''
								}>
								Política
							</Link>
						</li>
					</ul>
				</nav>

				<div className={classes.header__content__toggle}>
					{!menuOpen ? (
						<BiMenuAltRight onClick={menuToggleHandler} size={40} />
					) : (
						<AiOutlineClose onClick={menuToggleHandler} size={30} />
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
