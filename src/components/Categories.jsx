import React from 'react';

export const Categories = ({ isActive, setIsActive }) => {
  const categories = [
    'Все',
    'Мясные',
    'Вегатарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  function chooseIsActive(index) {
    setIsActive(index);
  }

  return (
    <div className="categories">
      <ul>
        <li>
          {categories.map((name, index) => {
            return (
              <button
                key={index}
                onClick={() => chooseIsActive(index)}
                className={isActive === index ? 'active' : ''}
              >
                {name}
              </button>
            );
          })}
        </li>
      </ul>
    </div>
  );
};
