import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPizza, addPrice } from '../../redux/slices/cartSlice';

export const PizzaBlock = ({ id, price, title, imageUrl, sizes, types }) => {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const dispatch = useDispatch();
  const prices = useSelector((state) => state.cartPizza.totalPrice);
  const arrayPizzas = useSelector((state) => state.cartPizza.massiveOfPizzas);

  function getPizza(obj) {
    dispatch(addPrice(prices + obj.price));
    arrayPizzas.map((value, index) => {
      return value.id === obj.id
        ? (console.log('ID'), (value.count = value.count + 1))
        : (dispatch(addPizza(obj)), console.log('NO'));
    });
  }
  console.log(arrayPizzas);

  // if (value.id === obj.id) {
  //   console.log('ID');
  //   value.count = value.count + 1;
  // } else {
  //   console.log('false');
  // }

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type, index) => {
              return (
                <button
                  onClick={() => setActiveType(index)}
                  className={activeType === index ? 'active' : ''}
                  key={index}
                >
                  {type === 0 ? 'Тонкое' : 'Традиционное'}
                </button>
              );
            })}
          </ul>
          <ul>
            {sizes.map((size, index) => {
              return (
                <button
                  onClick={() => setActiveSize(index)}
                  className={activeSize === index ? 'active' : ''}
                  key={index}
                >
                  {size} см.
                </button>
              );
            })}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price}руб.</div>
          <button
            onClick={() =>
              getPizza({
                id,
                price,
                title,
                imageUrl,
                activeSize,
                activeType,
                count: 0,
              })
            }
            className="button button--outline button--add"
          >
            <span>Добавить</span>
            {/* {obj.count && <i>0</i>} */}
          </button>
        </div>
      </div>
    </div>
  );
};
