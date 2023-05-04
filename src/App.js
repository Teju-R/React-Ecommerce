
import './App.css';
import{Routes,Route} from 'react-router-dom'
import HomePage from './Cointainer/HomePAge/HomePage';
import ProductPage from './Cointainer/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
