import React from "react";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";
import CodeIcon from "../icons/CodeIcon";

const tagColorMap = {
  React:
    "bg-accent-yellow/20 text-primary-dark dark:bg-accent-yellow dark:text-gray-900",
  Firebase:
    "bg-accent-orange/20 text-primary-dark dark:bg-accent-orange dark:text-gray-900",
  TailwindCSS:
    "bg-primary-teal/20 text-primary-dark dark:bg-primary-teal dark:text-gray-900",
  default: "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-white",
};

function ProjectCard({ project }) {
  if (!project) {
    console.error("ProjectCard received undefined project prop");
    return null;
  }

  const { title, description, liveUrl, codeUrl, tags = [], imageUrl } = project;

  let imageContent;
  if (imageUrl) {
    imageContent = (
      <img
        className="h-auto w-full max-w-[160px] mx-auto"
        src={imageUrl}
        alt={`${title} logo`}
        loading="lazy"
      />
    );
  } else {
    const fallbackPlaceholderUrl = `https://placehold.co/600x400/cccccc/666666?text=${encodeURIComponent(
      title || "Project"
    )}`;
    imageContent = (
      <img
        className="object-contain max-h-80 w-full opacity-50"
        src={fallbackPlaceholderUrl}
        alt={`${title || "Project"} Placeholder`}
      />
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-200 dark:border-gray-700/50">
      <div className="md:flex">
        <div
          className="
            md:flex-shrink-0 md:w-1/3 bg-white flex items-center justify-center p-8
            min-h-[250px] md:min-h-full
            rounded-t-xl md:rounded-l-xl md:rounded-tr-none
            border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50
          "
        >
          {imageContent}
        </div>

        <div
          className="
            p-8 md:p-10
            flex flex-col justify-center
            flex-grow
            md:w-2/3
            border-gray-700/50
          "
        >
          <h3 className="text-2xl font-bold text-primary-dark dark:text-accent-yellow mb-3">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-dark-text-secondary mb-10 leading-relaxed whitespace-pre-line">
            {description}
          </p>
          <div className="mb-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`${
                  tagColorMap[tag] || tagColorMap["default"]
                } text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-auto">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center bg-primary-teal hover:opacity-90 text-white font-medium
                py-2 px-5 rounded-lg transition duration-300 text-sm shadow hover:shadow-md
              "
            >
              Open App
              <ExternalLinkIcon className="w-4 h-4 ml-2" />
            </a>
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center bg-accent-orange hover:opacity-90 text-primary-dark font-medium
                py-2 px-5 rounded-lg transition duration-300 text-sm shadow hover:shadow-md
              "
            >
              View Code
              <CodeIcon className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
