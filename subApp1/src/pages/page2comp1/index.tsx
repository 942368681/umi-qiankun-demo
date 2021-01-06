import React from 'react';
import styles from './index.less';
import { Link } from 'umi';

export default (props: any) => {
  const logout = () => {
    try {
      window.EVENT_BUS.goBackToLogin();
    } catch (error) {
      console.log('主应用未挂载');
    }
  };
  return (
    <div>
      <h3 className={styles.title}>page2comp1</h3>
      <button onClick={logout}>logout</button>
    </div>
  );
}
