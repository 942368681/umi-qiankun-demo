import React from 'react';
import styles from './index.less';
import { useSelector, Link, useStore, getDvaApp } from 'umi';

export default (props: any) => {
  console.log(123234234, props, window.localStorage.getItem('userInfo'))
  console.log(11111111, window.EVENT_BUS)
  return (
    <div>
      <h1 className={styles.title} onClick={() => console.log(window.EVENT_BUS)}>subApp1</h1>
    </div>
  );
}
