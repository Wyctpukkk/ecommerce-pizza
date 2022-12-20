import React, { useCallback, useContext, useState } from 'react';
import styles from './Search.module.scss';
import { SearchPizza } from '../../App';
import lupa from '../../assets/img/lupa.svg';
import cancel from '../../assets/img/cancel.svg';
import debounce from 'lodash.debounce';

export const Search = () => {
  const { searchText, setSearchText } = useContext(SearchPizza);
  const [getFromInputText, setGetFromInputText] = useState('');

  const onChangeInput = (e) => {
    setGetFromInputText(e.target.value);
    testDebounce(e);
  };

  const testDebounce = useCallback(
    debounce((e) => {
      setSearchText(e.target.value);
    }, 500),
    []
  );

  const resetInput = () => {
    setSearchText('');
    setGetFromInputText('');
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={lupa} alt="лупа" />
      <input
        value={getFromInputText}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пицц.."
      ></input>
      {searchText && (
        <button onClick={() => resetInput()}>
          <img className={styles.iconClose} src={cancel} alt="cancel" />
        </button>
      )}
    </div>
  );
};
