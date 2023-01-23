import React, { useEffect, useRef } from "react";

import { Link } from "react-router-dom";
import "./FooterStyle.scss";
import Waves from "../Waves/Waves";

const getPercentageBtwMinMax = (min, max, currentSize) => {
  return Math.round(((currentSize - min) / max) * 100 * 100) / 100;
};
export default function Footer() {
  const footerStyleRef = useRef(null);
  const resizeHandler = (e) => {
    if (footerStyleRef.current) {
      const windowWidth = e.target.innerWidth;
      if (windowWidth >= 300 && windowWidth <= 1640) {
        const currentPercent = getPercentageBtwMinMax(
          300,
          1640 - 300,
          windowWidth
        );
        const deg = 94 + (currentPercent * 0.5) / 100;

        footerStyleRef.current.style.background = `linear-gradient(${deg}deg, #00ffff 0%, #ff00ff 100%)`;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

  return (
    <>
      <footer>{/* <Waves /> */}</footer>
    </>
  );
}
