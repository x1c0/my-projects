import React from "react";

function GradientDivider() {
  return (
    <div
      className="
      my-16 md:my-20 h-px bg-gradient-to-r from-transparent via-primary-teal/50 dark:via-accent-yellow/50 
      to-transparent max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto
    "
    ></div>
  );
}

export default GradientDivider;
