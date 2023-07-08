import { Route, Routes, Navigate } from 'react-router-dom';
import { About, Trades, Home, PrivacyPolicy, ErrorPage } from '../../pages';
import { Footer } from '../../components/Footer/Footer';

export const RouteSwitch = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'home'} />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='trades' element={<Trades />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='privacy-policy' element={<PrivacyPolicy />}></Route>
        <Route path='404' element={<ErrorPage />}></Route>

        <Route path='*' element={<Navigate to='/404' />}></Route>
      </Routes>

      <Footer />
    </>
  );
};
