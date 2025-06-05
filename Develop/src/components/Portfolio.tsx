import React from 'react';

const projects = [
  {
    title: 'Bootcamp Project One',
    image: '/Flightplan_bg.png', 
    appLink: 'https://p1t1-akcj.github.io/ProjectOne/',
    repoLink: 'https://github.com/christophermlin/BootcampProject1',
  },
  {
    title: 'Bootcamp Module 7 Project',
    image: '/led-wall.jpg',
    appLink: '',
    repoLink: 'https://github.com/christophermlin/Columbia-Coding-Bootcamp-Module-7-Challenge',
  },
  {
    title: 'Bootcamp Module 8 Project',
    image: '/pastel-puzzles.jpg',
    appLink: '',
    repoLink: 'https://github.com/christophermlin/Columbia-Coding-Bootcamp-Module-8-Challenge',
  },
  {
    title: 'Bootcamp Module 9 Project',
    image: '/run-buddy.jpg',
    appLink: 'https://columbia-coding-bootcamp-module-9.onrender.com',
    repoLink: 'https://github.com/christophermlin/Columbia-Coding-Bootcamp-Module-9-Challenge',
  },
  {
    title: 'Bootcamp Module 10 Project',
    image: '/react-calc.jpg',
    appLink: '',
    repoLink: 'https://github.com/christophermlin/Columbia-Coding-Bootcamp-Module-10-Challenge',
  },
  {
    title: 'Bootcamp Module 12 Project',
    image: '/vite.svg',
    appLink: '',
    repoLink: 'https://github.com/christophermlin/Columbia-Coding-Bootcamp-Module-12-Challenge',
  },
];

const Portfolio: React.FC = () => (
  <section aria-labelledby="portfolio-heading">
    <div className="section-content">
      <h2 id="portfolio-heading">Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div
            key={project.title}
            className="portfolio-item"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: 220,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
              borderRadius: 10,
              padding: '1.5rem 1rem',
            }}
          >
            <div style={{
              background: 'rgba(255,255,255,0.85)',
              borderRadius: 8,
              padding: '1rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            }}>
              <h3>{project.title}</h3>
              <a href={project.appLink} target="_blank" rel="noopener noreferrer">Live App</a> |{' '}
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
