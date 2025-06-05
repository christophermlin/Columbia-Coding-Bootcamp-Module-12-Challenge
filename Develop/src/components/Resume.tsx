import React from 'react';

const proficiencies = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'SQL',
  'MongoDB',
  'Git',
];

const Resume: React.FC = () => (
  <section aria-labelledby="resume-heading">
    <div className="section-content">
      <h2 id="resume-heading">Resume</h2>
      <a href="/resume.pdf" download>Download Resume (PDF)</a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default Resume;
