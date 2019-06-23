import React from 'react';
import Search from './../Components/Search/Search'
import CartCount from './../Components/Cart/CartCount'

const HeaderContainer = () => {
    return (
        <header style={{marginBottom: '30px'}}>
            <nav className="navbar navbar-expand-md  navbar-dark fixed-top bg-dark" style={{backgroundColor:'bisque'}}>
                <a className="navbar-brand col-sm-9" href="#">Poc Shop</a>
                <form className="form-inline mt-2 mt-md-0">
                    <Search />
                    <CartCount />
                </form>
            </nav>
        </header>
    );
};

export default HeaderContainer;

