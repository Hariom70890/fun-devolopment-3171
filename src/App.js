// import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './Components/MainRoutes';
import { Navbar } from './Components/Navbar';
import {AllRoutes} from "./Components/AllRoutes"
function App() {
  return (
    <div className="App">
    {/* <MainRoutes/> */}
    <Navbar/>
    <AllRoutes/>
    </div>
  );
}

export default App;
