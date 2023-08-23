import React from 'react';
import search from '../../img/search.png';
import cart from '../../img/cart.png'


const Header = () => {
    return ( 
        <header className='header'>
            <div className='header__logo'>
                <a href='#' className='header__logo-link'>
                    лого
                </a>
            </div>
            <div className='header__navigation'>
                <ul className='header__navigation-list'>
                    <li className='header__navigation-item'>
                        <a href='#' className='header__navigation-link'>
                            <span>пункт меню</span>
                        </a>
                    </li>
                    <li className='header__navigation-item'>
                        <a href='#' className='header__navigation-link'>
                            <span>пункт меню</span>
                        </a>
                    </li>
                    <li className='header__navigation-item'>
                        <a href='#' className='header__navigation-link'>
                            <span>пункт меню</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='header__search search'>
                <input type="text" className='search__input'></input>
                <button className='search__button'>
                    <img src={search} alt='Поиск' className='search__button__img'/>
                </button>
            </div>
            <button className='header__cart'>
                <img src={cart} alt="" />
            </button>
            <button className='header__call'>
                <span>Позвонить</span>
            </button>
        </header>
     );
}
 
export default Header;