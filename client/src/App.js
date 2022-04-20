import './styles/App.css';
import React from 'react'
import {useState, useEffect} from 'react'
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
import Register from './pages/Register'
import SignIn from './pages/SignIn';
import Checkout from './pages/Checkout';
import { CheckSession } from './services/Auth'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searching, setSearching] = useState("")

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])
  return (
    <SearchValueContext.Provider value={{searchValue, setSearchValue}}>
    <SearchResultsContext.Provider value={{searchResults, setSearchResults}}>
    <Router>
    <div className="App">
      <Nav 
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/deals' element={<Deals/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/signin' element={<SignIn 
                                          setUser={setUser} 
                                          toggleAuthenticated={toggleAuthenticated}/>}/>
        <Route path='/search/:id' element={<SearchResults/>}/>
        <Route path='/checkout' element={<Checkout 
                                              user={user}
                                              authenticated={authenticated}/>}/>
        {/* <Route path='/search/:id' */}
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
