import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';

export const Sort = () => {
  const dispatch = useDispatch(setSort());
  const sort = useSelector((state) => state.filter.sort);
  const [showSortMenu, setShowSortMenu] = React.useState(false);
  const list = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'цене', sortProperty: 'price' },
    { name: 'названию', sortProperty: 'title' },
  ];

  const onClickSelected = (id) => {
    setShowSortMenu(false);
    dispatch(setSort(list[id]));
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span>
          <button onClick={() => setShowSortMenu(!showSortMenu)}>
            {sort.name}
          </button>
        </span>
      </div>
      {showSortMenu && (
        <div className="sort__popup">
          <ul>
            {list.map((value, id) => {
              return (
                <li key={id}>
                  <button
                    onClick={() => {
                      onClickSelected(id);
                    }}
                    className={value.id === sort.id ? 'active' : ''}
                  >
                    {value.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
