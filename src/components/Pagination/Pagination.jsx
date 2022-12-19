import React from 'react';
import styles from './Pagination.module.scss';

export const Pagination = ({ handlePage, handleSetPage }) => {
  return (
    <div className={styles.root}>
      <button
        className={styles.btn}
        onClick={() => handleSetPage(handlePage === 1 ? '3' : handlePage - 1)}
      >
        {'<'}
      </button>
      <button className={styles.btn} onClick={() => handleSetPage(1)}>
        1
      </button>
      <button className={styles.btn} onClick={() => handleSetPage(2)}>
        2
      </button>
      <button className={styles.btn} onClick={() => handleSetPage(3)}>
        3
      </button>
      <button
        className={styles.btn}
        onClick={() => handleSetPage(handlePage === 3 ? '1' : handlePage + 1)}
      >
        {'>'}
      </button>
    </div>
  );
};
