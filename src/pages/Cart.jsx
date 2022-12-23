import React from 'react';
import { Link } from 'react-router-dom';
import BasketBlack from '../assets/img/basket black.svg';
import { useSelector, useDispatch } from 'react-redux';
import { addPizza, clearCart, removePizza } from '../redux/slices/cartSlice';
import trashSvg from '../assets/img/trash.svg';

export const Cart = () => {
  const dispatch = useDispatch();
  const pizza = useSelector((state) => state.cartPizza.massiveOfPizzas);
  const totalPrice = useSelector((state) => state.cartPizza.totalPrice);
  const countCart = useSelector((state) => state.cartPizza.totalPizzas);

  function nameType(name) {
    if (name === 1) {
      return 'традиционное';
    } else {
      return 'тонкое';
    }
  }

  function nameSize(size) {
    if (size === 0) {
      return '26см';
    } else if (size === 1) {
      return '30см';
    } else {
      return '40см';
    }
  }

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <img width="40px" src={BasketBlack} alt="basket logo" />
            Корзина
          </h2>
          <div className="cart__clear">
            <img src={trashSvg} alt="trash" />
            <button onClick={() => dispatch(clearCart())} className="clearCart">
              <span>Очистить корзину</span>
            </button>
          </div>
        </div>
        {pizza.map((obj, index) => {
          return (
            <div key={index} className="content__items">
              <div className="cart__item">
                <div className="cart__item-img">
                  <img
                    className="pizza-block__image"
                    src={obj.imageUrl}
                    alt="Pizza"
                  />
                </div>
                <div className="cart__item-info">
                  <h3>{obj.title}</h3>
                  <p>
                    {nameType(obj.activeType)},{nameSize(obj.activeSize)}
                  </p>
                </div>
                <div className="cart__item-count">
                  <button className="button button--outline button--circle cart__item-count-minus">
                    -
                  </button>
                  <b>{obj.count}</b>
                  <button
                    onClick={() => dispatch(addPizza(obj))}
                    className="button button--outline button--circle cart__item-count-plus"
                  >
                    +
                  </button>
                </div>
                <div className="cart__item-price">
                  <b>{obj.price}</b>
                </div>
                <div className="cart__item-remove">
                  <button
                    onClick={() => dispatch(removePizza(obj.id))}
                    className="button button--remove button--circle"
                  >
                    x
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="content__items">
          {/* <div className="cart__item">
            <div className="cart__item-img">
              <img
                className="pizza-block__image"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
            </div>
            <div className="cart__item-info">
              <h3>{title}</h3>
              <p>{activeType},{activeSize}</p>
            </div>
            <div className="cart__item-count">
              <button className="button button--outline button--circle cart__item-count-minus">
                -
              </button>
              <b>{massiveOfPizzas.lenght}</b>
              <button className="button button--outline button--circle cart__item-count-plus">
                +
              </button>
            </div>
            <div className="cart__item-price"><b>{totalPrise}</b></div>
            <div className="cart__item-remove">
              <button className="button button--remove button--circle">
                x
              </button>
            </div>
          </div> */}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{countCart}</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice}₽</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <span>Вернуться назад</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
