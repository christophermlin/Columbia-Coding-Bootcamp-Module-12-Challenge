# React Portfolio: Christopher Lin

## Project Overview
This project is a single-page React portfolio for Christopher Lin, built with Vite, React, and TypeScript. It showcases professional work, technical proficiencies, and contact information in a modern, responsive, and accessible design. The portfolio is designed to meet the standards and acceptance criteria outlined in the Columbia Coding Bootcamp Challenge.

## Features
- **Header**: Displays the developer's name and navigation links for About Me, Portfolio, Contact, and Resume. The header is visually consistent and responsive across all sections.
- **Navigation**: Clicking a navigation link updates the main content area without reloading the page. The active tab is visually highlighted and semi-transparent.
- **About Me**: Shows a recent photo/avatar and a detailed bio about Christopher Lin.
- **Portfolio**: Displays a responsive grid of project cards, each with a background image, project title, and links to the live app and GitHub repository. The layout adapts for desktop, tablet, and mobile.
- **Contact**: Includes a form with fields for name, email, and message. Real-time validation provides feedback for required fields and email format. (No backend; form does not submit data.)
- **Resume**: Provides a downloadable PDF resume and a list of technical proficiencies.
- **Footer**: Contains links to GitHub, LinkedIn, and other professional profiles.
- **Responsive Design**: The layout adapts to all screen sizes, ensuring a great experience on desktop and mobile.
- **Accessibility**: Uses semantic HTML, ARIA labels, and keyboard navigation for an inclusive user experience.

## Technologies Used
- React (with TypeScript)
- Vite
- CSS (custom, with modern layout and responsive design)
- Assets: Custom images, background patterns, and avatar

## Screenshot

![Portfolio Screenshot](./Develop/src/assets/Screen%20Capture.PNG)

## Getting Started
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.
4. Build for production with `npm run build`.

- Link to hosted application on Netlify: <https://taupe-sunburst-ac56d1.netlify.app/>

## File Structure
- `src/components/` — React components for each section (AboutMe, Portfolio, Contact, Resume, Header, Footer)
- `src/assets/` — Images and background patterns
- `public/` — Static files (including `resume.pdf`)
- `src/App.css` — Main styling for layout, theming, and responsiveness

## Customization
- Update project data in `Portfolio.tsx` to showcase your own work.
- Replace the avatar and background images in `src/assets/` as desired.
- Update the resume PDF in the `public/` folder.

## Credits
Created by Christopher Lin for the Columbia Coding Bootcamp React Portfolio Challenge.

---

© 2025 Christopher Lin. All rights reserved.
