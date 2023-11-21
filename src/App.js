import './App.css';
import './index.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import UpperNav from './components/Header/UpperNav';
import MainLogo from './components/Header/MainLogo';
import BottomNav from './components/Header/BottomNav';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header>
        <UpperNav />
        <MainLogo />
        <BottomNav />
      </Header>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
