import { Route, Routes } from 'react-router-dom';
import Header from '../../components/Header';
import { routes } from '../routes';
import { Footer } from '../../components/Footer';

export const RouteSwitch = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.url} element={route.element}></Route>
        ))}
      </Routes>

      <Footer />
    </>
  );
};
