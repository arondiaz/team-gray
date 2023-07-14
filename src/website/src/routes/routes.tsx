import { Login } from '../auth/Login/Login';
import { Signup } from '../auth/Signup/Signup';
import { About, ErrorPage, Home, PrivacyPolicy, Trades } from '../pages';

export interface IRoute {
  url: string;
  label?: string;
  icon?: string;
  isPublic?: boolean;
  showNavigation?: boolean;
  element: JSX.Element;
}

export const routes = Object.freeze<IRoute[]>([
  {
    url: 'login',
    label: 'Log In',
    isPublic: true,
    element: <Login />,
  },
  {
    url: 'signup',
    label: 'Signup',
    showNavigation: true,
    isPublic: true,
    element: <Signup />,
  },
  {
    url: 'home',
    label: 'Home',
    isPublic: true,
    element: <Home />,
  },
  {
    url: 'trades',
    label: 'Trades',
    isPublic: true,
    element: <Trades />,
  },
  {
    url: 'about',
    label: 'About',
    isPublic: true,
    element: <About />,
  },
  {
    url: 'privacy-policy',
    label: 'Privacy Policy',
    isPublic: true,
    element: <PrivacyPolicy />,
  },
  {
    url: '*',
    isPublic: false,
    element: <ErrorPage />,
  },
]);
