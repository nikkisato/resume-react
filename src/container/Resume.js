import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Contact from '../components/Contact/Contact';
import Education from '../components/Education/Education';
import Skills from '../components/Skills/Skills';

import Experience from '../components/Experience/Experience';
export default class Resume extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Contact />
        <Skills />
        <Education />
        <Experience />
      </>
    );
  }
}
