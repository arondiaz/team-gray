import { Route, Routes, Navigate } from 'react-router-dom';
import { About, Trades, Home, PrivacyPolicy, ErrorPage } from '../../pages';
import { Footer } from '../../components/Footer/Footer';
import Header from '../../components/HeaderMenu/Header';
import {Login} from "../../auth/Login/Login"

export const RouteSwitch = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to={'home'} />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='trades' element={<Trades />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='privacy-policy' element={<PrivacyPolicy />}></Route>
        <Route path='404' element={<ErrorPage />}></Route>
        <Route path='Login' element={<Login />}></Route>

        <Route path='*' element={<Navigate to='/404' />}></Route>
      </Routes>

      <Footer />
    </>
  );
};
