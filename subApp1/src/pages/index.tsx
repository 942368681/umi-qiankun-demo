import React from 'react';
import styles from './index.less';
import { useSelector, Link, useStore, getDvaApp } from 'umi';

export default (props: any) => {
  console.log(123234234, props, window.localStorage.getItem('userInfo'))
  console.log(11111111, window.EVENT_BUS)
  return (
    <div className={styles['app-container']}>
      <h2 className={styles.title}>subApp1</h2>
    </div>
  );
}
