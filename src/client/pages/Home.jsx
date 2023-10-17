import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getProjects from '@wasp/queries/getProjects';

export function Home() {
  const { data: projects, isLoading, error } = useQuery(getProjects);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div>
      {/* Photo */}
      <img src="path/to/photo.jpg" alt="Profile Photo" />

      {/* Description */}
      <p>This is a description of myself.</p>

      {/* Projects */}
      <div>
        {/* Project 1 */}
        {projects.map((project) => (
          <div key={project.id}>
            <img src={project.image} alt="Project Screenshot" />
            <p>{project.description}</p>
            <a href={project.githubLink}>GitHub README</a>
            <a href={project.link}>Deployed Project</a>
          </div>
        ))}
      </div>

      {/* Resume */}
      <a href="path/to/resume.pdf" download>Download Resume</a>

      {/* Links to professional online accounts */}
      <div>
        <a href="https://github.com/your-github-account">GitHub</a>
        <a href="https://linkedin.com/your-linkedin-account">LinkedIn</a>
        {/* Add more links to other professional online accounts if applicable */}
      </div>

      {/* Contact information */}
      <div>
        <p>Email: your-email@example.com</p>
      </div>
    </div>
  );
}