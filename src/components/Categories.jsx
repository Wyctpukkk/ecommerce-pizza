import React from 'react';

const Categories = ({ isActive, setIsActive }) => {
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
        {categories.map((name, index) => {
          return (
            <li
              key={index}
              onClick={() => chooseIsActive(index)}
              className={isActive === index ? 'active' : ''}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
