import React from 'react';

const projects = [
  {
    title: "Project Alpha",
    description: "A web app for managing tasks efficiently.",
    link: "https://github.com/yourusername/project-alpha",
  },
  {
    title: "Beta Blog",
    description: "A personal blogging platform with markdown support.",
    link: "https://github.com/yourusername/beta-blog",
  },
  {
    title: "Gamma Graph",
    description: "A visualization tool for data scientists.",
    link: "https://github.com/yourusername/gamma-graph",
  },
];

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Jane Doe</h1>
        <p style={{ fontSize: '1.25rem', color: '#555' }}>
          Full Stack Developer & Designer
        </p>
        <p>
          <a href="mailto:jane.doe@email.com" style={{ color: '#0070f3', textDecoration: 'none' }}>
            jane.doe@email.com
          </a>
          {' | '}
          <a href="https://github.com/janedoe" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'none' }}>
            GitHub
          </a>
          {' | '}
          <a href="https://www.linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'none' }}>
            LinkedIn
          </a>
        </p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          Hello! I'm Jane, a passionate developer with experience in building web applications,
          designing user interfaces, and solving challenging problems. I love exploring new technologies and crafting elegant solutions.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Projects</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {projects.map((project, idx) => (
            <li key={idx} style={{ marginBottom: '1.5rem', background: '#fafafa', padding: '1rem', borderRadius: '8px' }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', fontSize: '1.1rem', fontWeight: 'bold', textDecoration: 'none' }}>
                {project.title}
              </a>
              <p style={{ margin: '0.5rem 0 0 0', color: '#444' }}>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
