import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { SearchPizza } from '../App';
import { useContext } from 'react';
import { ProductsSkeleton } from '../components/PizzaBlock/ProductsSkeleton';
import { Products } from '../components/PizzaBlock/Products';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/slices/filterSlice';
import { Pagination } from '../components/Pagination/Pagination';

export const Home = () => {
  const { searchText } = useContext(SearchPizza);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const category = useSelector((state) => state.filter.category);
  const sort = useSelector((state) => state.filter.sort.sortProperty);
  const page = useSelector((state) => state.pagination.page);
  const dispatch = useDispatch(setCategory());

  function setIsActive(id) {
    dispatch(setCategory(id));
  }

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://6395c5a790ac47c680731729.mockapi.io/pizzas?page=${page}&limit=4${
          category === 0 ? '' : '&category=' + category
        }${searchText ? '&search=' + searchText : ''}${'&sortBy=' + sort}`
      )
      .then((res) => {
        setPizzas(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [category, searchText, page, sort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories isActive={category} setIsActive={setIsActive} />
        <Sort />
      </div>
      {isLoading ? (
        <ProductsSkeleton />
      ) : pizzas.length === 0 ? (
        <h2 className="wrong_input">
          Пицца не найдена, возможно вы ошиблись попробуйте снова.
        </h2>
      ) : (
        <>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <Products pizzas={pizzas} />
          </div>
          <Pagination />
        </>
      )}
    </div>
  );
};
