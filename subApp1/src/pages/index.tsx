import React from 'react';
import styles from './index.less';
import { useModel } from 'umi';

export default () => {
  const masterProps = useModel('@@qiankunStateFromMaster');
  console.log(masterProps.globalState)
  return (
    <div>
      <h1 className={styles.title}>subApp1</h1>
    </div>
  );
}
