import React from 'react';
import styles from './Pagination.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../redux/slices/paginationSlice';

export const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.pagination.page);
  const pages = [1, 2, 3];

  return (
    <div className={styles.root}>
      <button
        className={styles.btn}
        onClick={() => dispatch(setPage(page === 1 ? '3' : page - 1))}
      >
        {'<'}
      </button>
      {pages.map((value, id) => {
        return (
          <button
            key={id}
            className={styles.btn}
            onClick={() => dispatch(setPage(value))}
          >
            {value}
          </button>
        );
      })}

      <button
        className={styles.btn}
        onClick={() => dispatch(setPage(page === 3 ? '1' : page + 1))}
      >
        {'>'}
      </button>
    </div>
  );
};
