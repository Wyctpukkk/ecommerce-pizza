import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBLock = () => {
  return (
    <div>
      <div className={styles.smile}>😕</div>
      <h2 className={styles.root}> Ничего не найдено </h2>
      <h4 className={styles.root}>
        К сожалению данная страница отсутствует в нашем интернет магазине
      </h4>
    </div>
  );
};

export default NotFoundBLock;
