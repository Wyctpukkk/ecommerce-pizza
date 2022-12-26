import React from 'react';
import styles from './EmptyCart.module.scss';
import { Link } from 'react-router-dom';

export const EmptyCart = () => {
  return (
    <div>
      <h2>В корзине пусто, вернитесь на главную за Пиццей ;)</h2>
      <div className={styles.contentEmptyCart}>
        <Link to="/">
          <button className={styles.btn}>Перейти на главную</button>
        </Link>
      </div>
    </div>
  );
};
