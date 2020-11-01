import React, { useState } from 'react';
import { } from 'react-redux';
import { } from './pageNotFoundSlice.js';
import styles from './PageNotFound.module.css';


export function PageNotFound() {

  return (
    <div className={styles.PageNotFound}>
     <h2>[404] La page demander n'a pas été trouver</h2>
    </div>
  );
}
