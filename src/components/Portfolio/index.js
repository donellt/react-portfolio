import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'food-n-fun',
      description: 'HTML/CSS/JS/jQuery',
      link: "https://allielynne20.github.io/GroupProject1/",
      repo: "https://github.com/allielynne20/GroupProject1"
    },
    {
      name: 'DC-adopt',
      description: 'MERN Stack',
      link: "https://dc-adopt.herokuapp.com/",
      repo: "https://github.com/hannahbrijenkins/DC-Adopt"
    },
    {
      name: 'NVDHA',
      description: 'Wordpress',
      link: "https://nvdha.com/",
      repo: "https://nvdha.com/"
    },
    {
      name: 'official-johnston-music',
      description: 'Wordpress',
      link: "https://officialjohnstonmusic.com/",
      repo: "https://officialjohnstonmusic.com/"
    },
    {
      name: 'GDM',
      description: 'Wordpress',
      link: "https://goldmandentalmanagement.com/",
      repo: "https://goldmandentalmanagement.com/"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
