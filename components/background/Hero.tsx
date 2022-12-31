import { ComponentType } from "react";
import styles from "./Hero.module.scss";
import NejTitle from "./NejTitle";
const Hero = (): JSX.Element => {
  return (
    <>
      <style jsx>{`
        polygon {
          fill: rgba(125, 155, 132, 0);
          stroke-width: 0.25;
          stroke: #ac90529a;
          opacity: 0.4;
        }
      `}</style>

      <div className={styles.HeroCase}>
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          fontFamily="Lato"
          className="bg-deep-blue z-0"
        >
          <defs>
            <linearGradient
              id="gradient1"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
              spreadMethod="pad"
            >
              <stop offset="0%" stopColor="#000000" stopOpacity={1} />
              <stop offset="0%" stopColor="#ffffff" stopOpacity={1} />
              <stop offset="80%" stopColor="#ffffff" stopOpacity={1} />
              <stop offset="100%" stopColor="#000000" stopOpacity={1} />
            </linearGradient>
            <mask id="mask4" x={0} y={0} width="100%" height="100%">
              <rect
                x={0}
                y={0}
                width="100%"
                height="100%"
                style={{ stroke: "none", fill: "url(#gradient1)" }}
              />
            </mask>
            <pattern
              id="hexagons"
              width={50}
              height="43.4"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(1) translate(87.5) rotate(0)"
            >
              <polygon
                points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
                id="hex1"
              />
              <use xlinkHref="#hex1" x={25} />
              <use xlinkHref="#hex1" x={-25} />
              <use xlinkHref="#hex1" x="12.5" y="-21.7" />
              <use xlinkHref="#hex1" x="-12.5" y="-21.7" />
            </pattern>
            <pattern
              id="hexagons1"
              width={50}
              height="43.4"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2) translate(0) rotate(0)"
            >
              <polygon
                points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
                id="hex"
              />
              <use xlinkHref="#hex" x={25} />
              <use xlinkHref="#hex" x={-25} />
              <use xlinkHref="#hex" x="12.5" y="-21.7" />
              <use xlinkHref="#hex" x="-12.5" y="-21.7" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            style={{
              stroke: "none",
              fill: "url(#hexagons1)",
              mask: "url(#mask4)",
            }}
          />
        </svg>
      </div>
    </>
  );
};

export default Hero;
