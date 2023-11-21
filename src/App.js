import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx';
import Search from './components/Search.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
