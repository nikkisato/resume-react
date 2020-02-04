import React from 'react';
import data from '../resume2';
import styles from './Projects.css';

export default function Education() {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <h2>{data.Projects[0].title}</h2>
      <p><i>{data.Projects[0].tech}</i></p>
      <p>{data.Projects[0].description}</p>

      <h2>{data.Projects[1].title}</h2>
      <p><i>{data.Projects[1].tech}</i></p>
      <p>{data.Projects[1].description}</p>


      <h2>{data.Projects[2].title}</h2>
      <p><i>{data.Projects[2].tech}</i></p>
      <p>{data.Projects[2].description}</p>
    </div>
  );
}
