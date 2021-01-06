import React from 'react';
import styles from './index.less';
import { Link } from 'umi';

export default (props: any) => {
  return (
    <div>
      <h3 className={styles.title}>page1</h3>
      <Link to={`/page2/page2comp1`}>to page2</Link>
    </div>
  );
}
