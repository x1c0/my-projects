import React from "react";

function Footer({ githubUrl, linkedInUrl }) {
  return (
    <footer className="text-center py-10 mt-16">
      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
        &copy; {new Date().getFullYear()} Francisco Silva. Find me on{" "}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-teal dark:text-accent-yellow hover:underline font-medium"
        >
          GitHub
        </a>
        {" & "}
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-teal dark:text-accent-yellow hover:underline font-medium"
        >
          LinkedIn
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
