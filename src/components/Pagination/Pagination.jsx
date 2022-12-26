import React from 'react';
import styles from './Pagination.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../redux/slices/paginationSlice';

export const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.pagination.page);
  const category = useSelector((state) => state.filter.category);
  const pages = [1, 2, 3];

  return (
    <>
      {category === 0 ? (
        <div className={styles.root}>
          <button
            className={styles.btn}
            onClick={() => dispatch(setPage(page === 1 ? 3 : page - 1))}
          >
            {'<'}
          </button>
          {pages.map((value, id) => {
            return (
              <button
                key={id}
                className={page === value ? styles.btn_active : styles.btn}
                onClick={() => dispatch(setPage(value))}
              >
                {value}
              </button>
            );
          })}

          <button
            className={styles.btn}
            onClick={() => dispatch(setPage(page === 3 ? 1 : page + 1))}
          >
            {'>'}
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
