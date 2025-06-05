import React from 'react';

interface HeaderProps {
  section: 'about' | 'portfolio' | 'contact' | 'resume';
  setSection: (section: 'about' | 'portfolio' | 'contact' | 'resume') => void;
}

const navItems = [
  { key: 'about', label: 'About Me' },
  { key: 'portfolio', label: 'Portfolio' },
  { key: 'contact', label: 'Contact' },
  { key: 'resume', label: 'Resume' },
] as const;

const Header: React.FC<HeaderProps> = ({ section, setSection }) => (
  <header>
    <div className="header-inner">
      <h1 tabIndex={0}>Christopher Lin</h1>
      <nav aria-label="Main navigation">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.key}>
              <button
                className={section === item.key ? 'active' : ''}
                aria-current={section === item.key ? 'page' : undefined}
                onClick={() => setSection(item.key)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
