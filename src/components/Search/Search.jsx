import React, { useContext } from 'react';
import styles from './Search.module.scss';
import { SearchPizza } from '../../App';
import lupa from '../../assets/img/lupa.svg';
import cancel from '../../assets/img/cancel.svg';

export const Search = () => {
  const { searchText, setSearchText } = useContext(SearchPizza);

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={lupa} alt="лупа" />
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className={styles.input}
        placeholder="Поиск пицц.."
      ></input>
      {searchText && (
        <img
          onClick={() => setSearchText('')}
          className={styles.iconClose}
          src={cancel}
          alt="cancel"
        />
      )}
    </div>
  );
};
