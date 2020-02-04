import React from 'react';
import data from '../resume2';

export default function Education() {
  return (
    <div>
      <p>
        <b>{data.Education[0].school}</b> -
        {data.Education[0].description[0].endDate}
      </p>
      <p>{data.Education[0].description[0].description}</p>

      <p>
        <b>{data.Education[1].school}</b> -
        {data.Education[1].description[0].endDate}
      </p>
      <p>{data.Education[1].description[0].description}</p>
     
    </div>
  );
}
