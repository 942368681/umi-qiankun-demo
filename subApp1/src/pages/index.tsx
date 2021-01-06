import React from 'react';
import styles from './index.less';
import { useSelector, Link, useStore, getDvaApp } from 'umi';

export default (props: any) => {
  return (
    <div>
      <h2 className={styles.title}>subApp1</h2>
      <Link to={`/page1`}>to page1</Link>
    </div>
  );
}
