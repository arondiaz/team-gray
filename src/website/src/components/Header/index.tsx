import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaSignOutAlt } from 'react-icons/fa';
import { routes } from '../../routes/routes';
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
    if (size.width > 768) {
      setMenuOpen(false);
    }
  }, [size.width]);

  const menuToggleHandler = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const handleLogout = () => {
    // Logica del Logout(consultar)
  };

  return (
    <header className={classes.header}>
      <div className={classes['header__content']}>
        <div className={classes['header__content__logo']}>
          <NavLink to="/" className={classes.logoLink}>
            <img src="../isotype_header.svg" alt="Logo-FastWork" />
          </NavLink>

          <NavLink to="/" className={classes.logoLink}>
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
            <li>
              <button className={classes.logoutButton} onClick={handleLogout}>
                <FaSignOutAlt size={24} />{' '}
              </button>
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
