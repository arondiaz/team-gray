import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { routes } from '../../routes/routes';
import classes from './Header.module.scss';

{
	/* State to control the menu open/close */
}
const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	{
		/* State to store window size*/
	}
	const [size, setSize] = useState({
		width: 0,
		height: 0,
	});

	{
		/* Handle window resize event */
	}
	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);

		{
			/* Cleanup event listener on component unmount */
		}
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	{
		/* Close menu if window width is greater than 768px */
	}
	useEffect(() => {
		if (size.width > 768) {
			setMenuOpen(false);
		}
	}, [size.width]);

	{
		/* Toggle menu open/close state */
	}
	const menuToggleHandler = () => {
		setMenuOpen((prevMenuOpen) => !prevMenuOpen);
	};

	return (
		<header className={classes.header}>
			<div className={classes['header__content']}>
				<div className={classes['header__content__logo']}>
					<NavLink to='/home' className={classes.logoLink}>
						<img src='../isotype_header.svg' alt='Logo-FastWork' />
					</NavLink>

					<NavLink to='/home' className={classes.logoLink}>
						<span className={classes.logoTextFast}>Fast</span>
						<span className={classes.logoTextWork}>Work</span>
					</NavLink>
				</div>
				<nav
					className={`${classes.header__content__nav} ${
						menuOpen ? classes.isMenu : ''
					}`}>
					<ul>
						{routes.map((route) => (
							<li key={route.url}>
								{route.showNavigation && (
									<NavLink
										to={route.url}
										className={({ isActive }) =>
											`${isActive ? classes.active : ''}`
										}>
										{route.label}
									</NavLink>
								)}
							</li>
						))}
					</ul>
				</nav>
				<div className={classes.header__content__toggle}>
					{/* Menu toggle button */}

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
