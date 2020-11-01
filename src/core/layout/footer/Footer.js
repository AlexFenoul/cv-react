import React, { useState } from 'react';
import { } from 'react-redux';
import { } from './footerSclice.js';
import styles from './Footer.module.css';

import { SocialMedia } from './social-media/SocialMedia';
import { Curriculum } from './curriculum/Curriculum';


export function Footer() {

  return (
    <footer className={styles.footer}>
      <div>
      <SocialMedia />

      </div>
      <div>
      <Curriculum />

      </div>
    </footer>
  );
}
