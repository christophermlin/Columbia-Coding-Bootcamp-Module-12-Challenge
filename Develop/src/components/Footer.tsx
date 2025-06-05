import React from 'react';

const Footer: React.FC = () => (
  <footer>
    <ul className="footer-links">
      <li>
        <a href="https://github.com/christophermlin" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <span role="img" aria-label="GitHub"></span>GitHub
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/christopher-lin-95586920a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <span role="img" aria-label="LinkedIn"></span>LinkedIn
        </a>
      </li>
      <li>
        <a href="https://stackoverflow.com/users/6169502/christopher-lin" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow">
          <span role="img" aria-label="Stack Overflow"></span>Stack Overflow
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
