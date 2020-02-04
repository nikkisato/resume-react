import React from 'react';
import data from '../resume2';

export default function Education() {
  return (
    <div>
      <h1>Experience</h1>
      <h2>{data.Experiences[0].companyName}</h2>
      <p>Title: {data.Experiences[0].roles[0].title}</p>
      <p>Start Date: {data.Experiences[0].roles[0].startDate}</p>
      <p>End Date: {data.Experiences[0].roles[0].endDate}</p>

      <h2>{data.Experiences[1].companyName}</h2>
      <p>Title: {data.Experiences[1].roles[0].title}</p>
      <p>Start Date: {data.Experiences[0].roles[0].startDate}</p>
      <p>End Date: {data.Experiences[0].roles[0].endDate}</p>
    </div>
  );
}
