import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
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
		if (size.width > 768 && menuOpen) {
			setMenuOpen(false);
		}
	}, [size.width, menuOpen]);

	{
		/* Toggle menu open/close state */
	}
	const menuToggleHandler = () => {
		setMenuOpen((prevMenuOpen) => !prevMenuOpen);
	};

	{
		/* Active link state (currently set to '/' */
	}
	const [activeLink] = useState('/');

	return (
		<header className={classes.header}>
			<div className={classes.header__content}>
				<div className={classes.header__content__logo}>
					<img src='/logo_fastwork_purple.svg' alt='Logo' />
				</div>
				<nav
					className={`${classes.header__content__nav} ${
						menuOpen ? classes.isMenu : ''
					}`}>
					<ul>
						{/* Home link */}

						<li>
							<Link
								to='/'
								className={`${activeLink === '/' ? classes.active : ''} ${
									classes.activeBar
								}`}>
								Home
							</Link>
						</li>

						{/* Trades link */}

						<li>
							<Link
								to='/trades'
								className={`${activeLink === '/trades' ? classes.active : ''} ${
									classes.activeBar
								}`}>
								Oficios
							</Link>
						</li>

						{/* About link */}

						<li>
							<Link
								to='/about'
								className={`${
									activeLink === '/nosotros' ? classes.active : ''
								} ${classes.activeBar}`}>
								Sobre nosotros
							</Link>
						</li>

						{/* Privacy Policy link */}

						<li>
							<Link
								to='/privacy-policy'
								className={`${
									activeLink === '/politica' ? classes.active : ''
								} ${classes.activeBar}`}>
								Política
							</Link>
						</li>
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
