import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Contact from '../components/Contact/Contact';
import Education from '../components/Education/Education';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Project/Projects';
import Experience from '../components/Experience/Experience';
import styles from './Resume.css';
export default class Resume extends Component {
  state = {};

  render() {
    return (
      <>
        <div className={styles.grid}>
          <Header />
          <Contact />
          <Skills />
          <Education />
          <Projects />
          <Experience />
        </div>
      </>
    );
  }
}
