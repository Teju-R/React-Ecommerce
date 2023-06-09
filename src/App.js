
import './App.css';
import{Routes,Route} from 'react-router-dom'
import HomePage from './Cointainer/HomePAge/HomePage';
import ProductPage from './Cointainer/ProductPage/ProductPage';
import Navbar from './Component/Navbar/Navbar';
import SecondNavbar from './Component/Navbar/SecondNavbar';
import ThirdNavbar from './Component/Navbar/ThirdNavbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <SecondNavbar/>
    <ThirdNavbar/>
      {/* <Routes>
        <Route path="/" element={<Navbar/>}/>
        
        <Route path="/" element={<SecondNavbar/>}/>
        <Route path="/product" element={<ProductPage/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
