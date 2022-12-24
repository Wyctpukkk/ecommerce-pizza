import React from 'react';
import emptyPng from '../assets/img/empty-cart.png';
import styles from './EmptyCart.module.scss';
import { Link } from 'react-router-dom';

export const EmptyCart = () => {
  return (
    <>
      <h2>В корзине пусто, вернитесь на главную за Пиццей ;)</h2>
      <img className={styles.iconCart} src={emptyPng} alt="empty-cart" />
      <div className="cart__bottom-buttons">
        <Link to="/" className="button button--outline button--add go-back-btn">
          <span>Перейти на главную</span>
        </Link>
      </div>
    </>
  );
};
