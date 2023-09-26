import React from 'react';
import logo from '../../img/logo.png'
import search from '../../img/search.png';
import cart from '../../img/cart.png'

// Styles
import './Header.scss'

const Header = () => {
    return ( 
        <header className='header'>
            <div className='header__logo'>
                <a href='/' className='header__logo-link'>
                    <img src={logo} alt="Эрмитаж Сервис"/>
                </a>
            </div>
            <div className='header__navigation'>
                <ul className='header__navigation-list'>
                    <li className='header__navigation-item'>
                        <a href='/' className='header__navigation-link'>
                            <span>заказать консультацию</span>
                        </a>
                    </li>
                    <li className='header__navigation-item'>
                        <a href='/' className='header__navigation-link'>
                            <span>объекты</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='header__search search'>
                <input type="text" className='search__input' placeholder='найти услугу'></input>
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