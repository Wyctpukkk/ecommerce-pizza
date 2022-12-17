import React from 'react';
import LogoSvg from '../assets/img/pizza-logo.svg';
import { Link } from 'react-router-dom';
import { Search } from './Search/Search';
import BasketSvg from '../assets/img/basket.svg';

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={LogoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <img width="25" src={BasketSvg} alt="basket logo" />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
