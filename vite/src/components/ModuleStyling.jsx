import React from 'react';
import styles from './style.module.css';

function ModuleStyling() {
  return (
    <div>
      <h2 className={styles.header}>CSS module</h2>
      <h2 className='header'>Other way CSS module</h2>
    </div>
  );
}

export default ModuleStyling;
