import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
      <div className={classes.header__content}>
        <div className={classes.header__content__logo}>
          <img src='/logo_fastwork_purple.svg' alt='Logo-FastWork' />
        </div>
        <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ''}`}>
          <ul>
            {/* Home link */}

            <li>
              <NavLink to='home' className={({ isActive }) => `${isActive ? classes.active : ''}`}>
                Home
              </NavLink>
            </li>

            {/* Trades link */}

            <li>
              <NavLink to='trades' className={({ isActive }) => `${isActive ? classes.active : ''}`}>
                Oficios
              </NavLink>
            </li>

            {/* About link */}

            <li>
              <NavLink to='about' className={({ isActive }) => `${isActive ? classes.active : ''}`}>
                Sobre nosotros
              </NavLink>
            </li>

            {/* Privacy Policy link */}

            <li>
              <NavLink to='privacy-policy' className={({ isActive }) => `${isActive ? classes.active : ''}`}>
                Política
              </NavLink>
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
