import React, { useState } from 'react';
import { } from 'react-redux';
import { } from './skillSlice.js';
import styles from './Skill.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(competence, year, interest) {
  return { competence, year, interest};
}

const rows = [
  createData('HTML-CSS-JS', 5, 7),
  createData('SQL-NoSQL ', 5, 9),
  createData('PowerBI', 1, 7),
  createData('.Net', 1, 8),
  createData('NodeJS', 4, 9),
  createData('React-Angular', 3, 10)
];

export function Skill() {
  const classes = useStyles();

  return (
    <div className={styles.competenceContainer}>
      <div className={styles.competence}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Compétences</TableCell>
                <TableCell align="right">Années d'expèriences</TableCell>
                <TableCell align="right">intérêt&nbsp;(/10)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.competence}>
                  <TableCell component="th" scope="row">
                    {row.competence}
                  </TableCell>
                  <TableCell align="right">{row.year}</TableCell>
                  <TableCell align="right">{row.interest}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

