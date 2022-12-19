import React from 'react';
import { useState } from 'react';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { SearchPizza } from '../App';
import { useContext } from 'react';
import { ProductsSkeleton } from '../components/PizzaBlock/ProductsSkeleton';
import { Products } from '../components/PizzaBlock/Products';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/slices/filterSlice';

export const Home = ({ handlePage }) => {
  const { searchText } = useContext(SearchPizza);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const category = useSelector((state) => state.filter.category);
  const sort = useSelector((state) => state.filter.sort.sortProperty);
  const dispatch = useDispatch(setCategory());

  function setIsActive(id) {
    dispatch(setCategory(id));
  }

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6395c5a790ac47c680731729.mockapi.io/pizzas?page=${handlePage}&limit=4${
        category === 0 ? '' : '&category=' + category
      }${searchText ? '&search=' + searchText : ''}${'&sortBy=' + sort}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [category, searchText, handlePage, sort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories isActive={category} setIsActive={setIsActive} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? <ProductsSkeleton /> : <Products pizzas={pizzas} />}
      </div>
    </div>
  );
};
