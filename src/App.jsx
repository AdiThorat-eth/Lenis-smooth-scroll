import React from "react";
import Lenis from "lenis";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
      console.log(e);
    });
    // Initialize Lenis

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <div className="w-full h-[300vh]">
      <div className="w-full h-100vh bg-red"></div>
      <div className="w-full h-100vh bg-blue"></div>
      <div className="w-full h-100vh bg-green"></div>
    </div>
  );
};

export default App;
