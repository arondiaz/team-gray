import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaSignOutAlt } from 'react-icons/fa';
import { routes } from '../../routes/routes';
import classes from './Header.module.scss';
import { LogoutModal } from './Logout';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const notification = (color: string) => ({
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 5000,
    style: {
      fontWeight: 'bold',
      border: `0.1rem solid ${color}`,
    },
  });

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

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/');
    toast.success('¡Sesión cerrada con exito!', notification('green'));
  }

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
            {/* <li>
              <button
                className={classes.logoutButton}
                onClick={() => setIsModalOpen(true)}>
                <FaSignOutAlt size={24} />{' '}
              </button>
            </li> */}
          </ul>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} size={40} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} size={30} />
          )}
        </div>
        <LogoutModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => {
            handleLogout();
            setIsModalOpen(false);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
