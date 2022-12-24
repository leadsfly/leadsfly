import React from "react";

function NavHeaderSVG() {
  return (
    <>
      <style jsx>{`
        polygon {
          fill: rgba(125, 155, 132, 0);
          stroke-width: 0.25;
          stroke: #ac90529a;
        }
      `}</style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100% 64"
        version="1.1"
        x="50%"
        y="28%"
        className="font-playfair text-3xl font-bold"
      >
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          LF
        </text>
      </svg>
    </>
  );
}

export default NavHeaderSVG;
