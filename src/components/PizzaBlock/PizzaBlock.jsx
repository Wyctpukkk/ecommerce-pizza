import React from 'react';
import { useDispatch } from 'react-redux';
import { addPizza } from '../../redux/slices/cartSlice';

export const PizzaBlock = ({ id, price, title, imageUrl, sizes, types }) => {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const dispatch = useDispatch();

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
              dispatch(
                addPizza({
                  id,
                  price,
                  title,
                  imageUrl,
                  activeSize,
                  activeType,
                })
              )
            }
            className="button button--outline button--add"
          >
            <span>Добавить</span>
            {/* {arrayPizzas > 0 && <i>{countCart}</i>} */}
          </button>
        </div>
      </div>
    </div>
  );
};
