import React from 'react';
import { PizzaBlock } from './PizzaBlock';

export const Products = ({ pizzas }) => {
  return (
    <>
      {pizzas.map((obj) => (
        <PizzaBlock
          key={obj.id}
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
