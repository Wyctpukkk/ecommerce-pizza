import React from 'react';
import { useState } from 'react';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { SearchPizza } from '../App';
import { useContext } from 'react';
import { ProductsSkeleton } from '../components/PizzaBlock/ProductsSkeleton';
import { Products } from '../components/PizzaBlock/Products';

export const Home = ({ handlePage }) => {
  const { searchText } = useContext(SearchPizza);
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [category, setCategory] = React.useState(0);
  const [sort, setSort] = React.useState(0);
  const [nameOfSorted, setNameOfSorted] = useState('');

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6395c5a790ac47c680731729.mockapi.io/pizzas?page=${handlePage}&limit=4${
        category === 0 ? '' : '&category=' + category
      }${searchText ? '&search=' + searchText : ''}${'&sortBy=' + nameOfSorted}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [category, sort, nameOfSorted, searchText, handlePage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories isActive={category} setIsActive={setCategory} />
        <Sort
          selectedSort={sort}
          setSelectedSort={setSort}
          handleSetNameOfSorted={setNameOfSorted}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? <ProductsSkeleton /> : <Products pizzas={pizzas} />}
      </div>
    </div>
  );
};
