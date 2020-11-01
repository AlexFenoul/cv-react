import React, { useState } from 'react';
import { } from 'react-redux';
import { } from './curriculumSlice.js';
import styles from './Curriculum.module.css';

import download from '../../../../assets/images/download.png';


export function Curriculum() {

  return (
    <div>
        <a href="/CV_Fenoul.pdf" download>
            <img className={styles.download} src={download} alt="CV" />
        </a>
    </div>
  );
}
