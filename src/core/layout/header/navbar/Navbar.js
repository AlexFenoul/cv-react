import React, { useState } from 'react';
import { } from 'react-redux';
import { } from './navbarSlice.js';
import styles from './Navbar.module.css';

import {
    Link,
  } from "react-router-dom";

export function Navbar() {

  return (
    <div className={styles.navbar}>
      <ul className={styles.listNavbar}>
        <li className={styles.listItem}>
          <Link className={styles.link} to="/profil">Profil</Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.link} to="/parcours">Parcours</Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.link} to="/competence">Compétence</Link>
        </li>
      </ul>
    </div>
  );
}
