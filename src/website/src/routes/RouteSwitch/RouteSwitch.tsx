import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '../../components/HeaderMenu/Header';
import { routes } from '../routes';
import { Footer } from '../../components/Footer/Footer';
import { Home } from '../../pages';

export const RouteSwitch = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route path={route.url} element={route.element}></Route>
        ))}
      </Routes>

      <Footer />
    </>
  );
};
