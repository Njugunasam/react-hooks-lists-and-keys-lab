import React from 'react';

function ProjectItem({ title, technologies }) {
  return (
    <div className="project-item">
      <h2>{title}</h2>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectItem;