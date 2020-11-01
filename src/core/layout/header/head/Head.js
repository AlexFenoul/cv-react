import React from 'react';
import { } from 'react-redux';
import { selectColor, changeColor } from './headSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Head.module.css';
import Switch from '@material-ui/core/Switch';

const logo = "logo.png"

export function Head() {

  const color = useSelector(selectColor);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.head}>
        <img className={styles.logo} src={logo} alt="Logo" />
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Curriculum Vitae</h1>
        </div>
        <div className={styles.switch}>
          <Switch
            checked={color}
            onChange={dispatch(changeColor())}
            name="checked"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </div>
      </div>
    </div>
    
  );
}
