import React, { useState } from 'react';
import { } from 'react-redux';
import { } from './navbarSlice.js';
import styles from './Navbar.module.css';

import {
    NavLink,
  } from "react-router-dom";

export function Navbar() {

  return (
    <div className={styles.navbar}>
      <ul className={styles.listNavbar}>
        <li className={styles.listItem}>
          <NavLink exact activeClassName={styles.active} className={styles.link} to="/">Accueil</NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink activeClassName={styles.active} className={styles.link} to="/profil">Profil</NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink activeClassName={styles.active} className={styles.link} to="/parcours">Parcours</NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink activeClassName={styles.active} className={styles.link} to="/competence">Compétence</NavLink>
        </li>
      </ul>
    </div>
  );
}
