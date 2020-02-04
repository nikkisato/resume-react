import React from 'react';
import data from '../resume2';

export default function Skills() {
  return (
    <div>
      <p>
        <b>{data.Skills[0].Area}</b>
        <br></br>
        {data.Skills[0].SkillSet[0].Name}
        <br></br>
        {data.Skills[0].SkillSet[1].Name}
        <br></br>
        {data.Skills[0].SkillSet[2].Name}
        <br></br>
        {data.Skills[0].SkillSet[3].Name}
        <br></br>
        {data.Skills[0].SkillSet[4].Name}
        <br></br>
        {data.Skills[0].SkillSet[5].Name}
      </p>
    </div>
  );
}
