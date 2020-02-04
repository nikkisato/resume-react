import React from 'react';
import styles from './Header.css';
import data from '../resume2';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>{data.contact[0].name}</h1>
    </header>
  );
}
