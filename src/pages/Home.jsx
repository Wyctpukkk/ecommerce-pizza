import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [category, setCategory] = React.useState(0);
  const [sort, setSorted] = React.useState(0);
  const [nameOfSorted, setNameOfSorted] = React.useState('rating');

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://6395c5a790ac47c680731729.mockapi.io/pizzas?sortBy=' +
        `${nameOfSorted}${category === 0 ? '' : '&category=' + category}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);

    function changeSort(sort) {
      if (sort === 0) {
        setNameOfSorted('rating');
      } else if (sort === 1) {
        setNameOfSorted('price');
      } else {
        setNameOfSorted('title');
      }
    }
    changeSort(sort);
    console.log(sort);
    console.log(nameOfSorted);
  }, [category, sort, nameOfSorted]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories isActive={category} setIsActive={setCategory} />
        <Sort selected={sort} setSelected={setSorted} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, id) => <Skeleton key={id} />)
          : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
