import './styles/App.css';
import React from 'react'
import {useState} from 'react'
import {  Routes, Route} from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom';
import {SearchValueContext, SearchResultsContext} from './components/SearchContext'

import Home from './pages/Home';
import Deals from './pages/Deals';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';
import SearchResults from './pages/SearchResults';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer';

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searching, setSearching] = useState("")

  return (
    <SearchValueContext.Provider value={{searchValue, setSearchValue}}>
    <SearchResultsContext.Provider value={{searchResults, setSearchResults}}>
    <Router>
    <div className="App">
      <Nav />
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/deals' element={<Deals/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='/search' element={<SearchResults/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
    </Router>
    </SearchResultsContext.Provider>
    </SearchValueContext.Provider>
  );
}

export default App;
