import './styles/App.css';
import React from 'react'
import { Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Deals from './pages/Deals';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';
import SearchResults from './pages/SearchResults';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/deals' element={<Deals/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/search' element={<SearchResults/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
