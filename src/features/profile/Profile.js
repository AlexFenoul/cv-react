import React, { useState } from 'react';
import { } from 'react-redux';
import { } from './profileSlice.js';
import styles from './Profile.module.css';

import profilePicture from '../../assets/images/profilePicture.JPG';


export function Profile() {

  return (
    <div className={styles.profile}>
      <div className={styles.profilePictureContainer}>
        <img className={styles.profilePicture} src={profilePicture} alt="Profil" />
      </div>
      <div className={styles.information}>
        <div className={styles.infoUn}>
          <div>
            <label>Nom</label>
            <p className={styles.info}>Fenoul</p>
          </div>
          <div>
            <label>Prénom</label>
            <p className={styles.info}>Alexandre</p>
          </div>
          <div>
            <label>Age</label>
            <p className={styles.info}>21</p>
          </div>
          <div>
            <label>Taille</label>
            <p className={styles.info}>1m84</p>
          </div>
        </div>
        <div className={styles.infoDeux}>
          <label>Passe temps</label>
        </div>
      </div>
    </div>
  );
}
