import React, { useState } from 'react';
import { } from 'react-redux';
import { } from './socialMediaSlice.js';
import styles from './SocialMedia.module.css';

import twitter from '../../../../assets/images/social-media/png/013-twitter.png';
import linkedin from '../../../../assets/images/social-media/png/010-linkedin.png';
import github from '../../../../assets/images/social-media/png/017-github.png';


export function SocialMedia() {

  return (
      <div className={styles.socialMedia}>
          <a href="https://twitter.com/FenoulAlexandre">
            <img className={styles.socialImg} src={twitter} alt="twitter" />
          </a>
          <a href="https://www.linkedin.com/in/alexandre-fenoul/">
            <img className={styles.socialImg} src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/AlexFenoul">
            <img className={styles.socialImg} src={github} alt="github" />
          </a>
      </div>
  );
}
