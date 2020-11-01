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
        <Link to="/profil">Profil</Link>
        <Link to="/parcours">Parcours</Link>
        <Link to="/competence">Compétence</Link>
    </div>
  );
}
