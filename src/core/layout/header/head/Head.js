import React, { useState } from 'react';
import { } from 'react-redux';
import { } from './headSlice.js';
import styles from './Head.module.css';

const logo = "logo.png"

export function Head() {

  return (
    <div className={styles.head}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Curriculum Vitae</h1>
      </div>
    </div>
  );
}
