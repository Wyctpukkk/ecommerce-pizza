import React from 'react';
import { PizzaBlock } from './PizzaBlock';

export const Products = ({ pizzas }) => {
  return (
    <>
      {pizzas.map((obj, index) => (
        <PizzaBlock
          key={obj.id}
          id={obj.id}
          price={obj.price}
          title={obj.title}
          imageUrl={obj.imageUrl}
          sizes={obj.sizes}
          types={obj.types}
        />
      ))}
    </>
  );
};
