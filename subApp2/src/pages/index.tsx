import React from 'react';
import styles from './index.less';

export default () => {
  window.addEventListener("postMsg", e => {
      console.log(e);
      console.log(`postMsg事件触发`);
  });
  return (
    <div>
      <h2 className={styles.title}>subApp2</h2>
      <div className={styles.long}></div>
    </div>
  );
}
