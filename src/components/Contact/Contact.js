import React from 'react';
import data from '../resume2';

export default function Contact() {
  return (
    <div>
      <p>
        <b>Profile:</b> {data.Profile.summary}{' '}
      </p>
      <p>
        <b>Email: </b>
        {data.contact[0].email}
      </p>
      <p>
        <b>Website:</b>
        {data.contact[0].website}
      </p>
      <p>
        <b>Phone:</b> {data.contact[0].Phone}
      </p>
    </div>
  );
}
