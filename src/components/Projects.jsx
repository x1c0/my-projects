import React from "react";
import ProjectCard from "./ProjectCard";

function Projects({ projects }) {
  return (
    <section id="projects" className="pt-4 pb-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark dark:text-gray-100">
        My Projects
      </h2>
      <div className="space-y-16">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
