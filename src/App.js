// import logo from './logo.svg';
import './App.css';
import { Routes,Route  } from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import Header from './containers/Header';
import NoPage from './containers/NoPage';

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome</h1> */}
        <Header/>
      <Routes>
          <Route path='/' element={<ProductListing/>}/>
          <Route path="/product/:productId" element={<ProductDetail/>}/>
          <Route path='*' element={<NoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
