import { Outlet } from 'react-router-dom';
import './App.css';
import NavbarMain from './components/NavBarMain.jsx'
import Footer from './components/Footer.jsx';
import Search from './components/Search/SearchMaking.jsx';

function App() {
  return (
    <>
      <NavbarMain />
      <Outlet />
      <Search/>
      <Footer />
    </>
  );
}

export default App;
