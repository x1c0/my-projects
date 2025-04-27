import React from "react";
import GitHubIcon from "../icons/GitHubIcon";
import LinkedInIcon from "../icons/LinkedIn";
import CodeIcon from "../icons/CodeIcon";

function Intro({ profile }) {
  const { name, title, bio, githubUrl, linkedInUrl, profilePicUrl } = profile;

  return (
    <section className="flex flex-col md:flex-row items-center text-center md:text-left mb-16 md:mb-24">
      <div className="mb-8 md:mb-0 md:mr-10 flex-shrink-0">
        <img
          src={profilePicUrl}
          alt={name}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg border-4 border-white dark:border-primary-teal"
        />
      </div>

      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-1 leading-tight">
          {name}
        </h1>
        <p className="text-xl md:text-2xl font-medium text-primary-teal dark:text-accent-yellow mb-4 inline-flex items-center space-x-2">
          <span>{title}</span>
          <CodeIcon className="w-6 h-6" />
        </p>
        <p
          className="
            text-lg
            text-gray-600
            dark:text-gray-200 
            mb-6
            leading-relaxed
          "
        >
          {bio}
        </p>
        <div className="flex justify-center md:justify-start space-x-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-gray-500 dark:text-dark-text-secondary hover:text-primary-teal dark:hover:text-accent-yellow transition duration-300"
          >
            <GitHubIcon className="w-8 h-8" />
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-gray-500 dark:text-dark-text-secondary hover:text-primary-teal dark:hover:text-accent-yellow transition duration-300"
          >
            <LinkedInIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
