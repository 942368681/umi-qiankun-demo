import React from 'react';
import styles from './index.less';

export default (props: any) => {
  console.log(123234234, props)
  return (
    <div>
      <h1 className={styles.title}>subApp1</h1>
    </div>
  );
}
