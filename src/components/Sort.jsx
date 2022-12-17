import React from 'react';

export const Sort = ({
  selectedSort,
  setSelectedSort,
  handleSetNameOfSorted,
}) => {
  const [showSortMenu, setShowSortMenu] = React.useState(false);

  const list = ['популярности', 'цене', 'алфавиту'];

  const onClickSelected = (id) => {
    if (id === 0) {
      handleSetNameOfSorted('rating');
    } else if (id === 1) {
      handleSetNameOfSorted('price');
    } else {
      handleSetNameOfSorted('title');
    }
    setSelectedSort(id);
    setShowSortMenu(!showSortMenu);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span>
          <button onClick={() => setShowSortMenu(!showSortMenu)}>
            {list[selectedSort]}
          </button>
        </span>
      </div>
      {showSortMenu && (
        <div className="sort__popup">
          <ul>
            {list.map((value, id) => {
              return (
                <li>
                  <button
                    key={id}
                    onClick={() => {
                      onClickSelected(id);
                    }}
                    className={selectedSort === id ? 'active' : ''}
                  >
                    {value}
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
