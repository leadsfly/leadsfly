import React from "react";

function LineGradient({ width = "w-full" }) {
  // return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />;
  return (
    <hr
      className={`${width} bg-gradient-rainblue my-8 h-5 border-0 dark:bg-gradient-rainblue`}
    />
  );
}

export default LineGradient;
//<hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700">
