// import logo from './logo.svg';
import './App.css';
import CartPage from './Components/CartPage';
import Footer from './Components/Footer';
import { MainRoutes } from './Components/MainRoutes';

import { Navbar } from './Components/Navbar';
import Login from './login/Login';
// import {checkout} from "./Pages/checkout"

function App() {
  return (
    <div className="App">
        <Navbar/>
        <MainRoutes/>
        <Footer/>
          




    </div>
  );
}

export default App;
