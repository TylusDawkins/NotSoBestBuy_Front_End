import '../../styles/Nav.css'
import { NavLink, Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Nav = ({authenticated, user, handleLogOut}) => {
    let authenticatedOptions
    if (user) {
        authenticatedOptions = 
        <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
        <NavLink onClick={handleLogOut} to='/'>
            Sign Out
        </NavLink>
            </li>
        </ul>
    }

//attention
    const publicOptions = (
        <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <NavLink className="nav-link" to='/register' exact='true'>
                                <i className="fa-solid fa-id-card"></i>Register
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link" to='/signin' exact='true'>
                                <i className="fa-solid fa-arrow-right-to-bracket"></i>SignIn
                            </NavLink>
                        </li>
                        </ul>
    )

    return (
        <nav className='navbar navbar-expand-lg navbar-mainbg'>
            <NavLink className="navbar-brand navbar-logo" to="/" exact="true">
                NotsoBestBuy
            </NavLink>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                    <i className='fas fa-bars text-white'></i>
                </button>

                <div
                className='collapse navbar-collapse'
                id="navbarSupportedContent">
                    <ul className='navbar-nav ml-auto'>
                        <div className='hori-selector'>
                            <div className='left'></div>
                            <div className='right'></div>
                        </div>
                        <li className='nav-item active'>
                            <NavLink className="nav-link" to="/" exact="true">
                                <i className="fa-solid fa-house"></i>Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="/deals" exact="true">
                                <i className="fa-solid fa-tag"></i>Deals
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link" to={user!== null ? `/cart/${user.id}` : `/`} exact="true">
                                <i className="fa-solid fa-cart-arrow-down"></i>Cart
                            </NavLink>
                        </li>
                    </ul>
                            <SearchBar placeholder={'Search our products'}/>
                        {authenticated && user ? authenticatedOptions : publicOptions}
                </div>
        </nav>
    );
}

export default Nav;