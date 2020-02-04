import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Contact from '../components/Contact/Contact';
import Education from '../components/Education/Education';

export default class Resume extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Contact />
        <Education />
      </>
    );
  }
}
