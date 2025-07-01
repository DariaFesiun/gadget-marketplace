import React from 'react';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.emptyWrapper}>
        <img
          src="./img/page-not-found.png"
          alt="Cart is empty"
          className={styles.emptyImage}
        />
        <p className={styles.empty}>Page Not Found</p>
      </div>
    </div>
  );
};
