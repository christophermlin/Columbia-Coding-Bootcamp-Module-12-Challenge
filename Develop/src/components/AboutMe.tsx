import React from 'react';
import avatar from '../assets/Christopher_Lin_Headshot.jpeg'; // Replace with your own avatar image

const AboutMe: React.FC = () => (
  <section aria-labelledby="about-heading">
    <h2 id="about-heading">About Me</h2>
    <img src={avatar} alt="Developer avatar" style={{ width: 120, borderRadius: '50%' }} />
    <p style={{ marginTop: '2.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
      Hi! I'm Christopher Lin, a passionate web developer with experience in React, TypeScript, and modern web technologies. I love to build accessible, performant, and beautiful web apps.
    </p>
    <p style={{ marginTop: '2.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
      My journey in technology began with a curiosity for how things work and a drive to create. Over the years, I've honed my skills in both front-end and back-end development, always striving to deliver seamless user experiences. I believe in the power of clean, maintainable code and enjoy collaborating with others to solve complex problems. When I'm not working, you can find me exploring art galleries, reading about design, or experimenting with new recipes in the kitchen. Let's build something amazing together!
    </p>
  </section>
);

export default AboutMe;
