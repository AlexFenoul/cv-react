import React, { useState } from 'react';
import { } from 'react-redux';
import { } from './headerSlice.js';
import styles from './Header.module.css';

import { Head } from './head/Head';
import { Navbar } from './navbar/Navbar';


export function Header() {

  return (
    <header>
      <Head />
      <Navbar />
    </header>
  );
}
