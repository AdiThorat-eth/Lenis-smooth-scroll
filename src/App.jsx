import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

const App = () => {
  const rafRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      // Clean up the loop first, then destroy the instance
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy();
    };
  }, []);

  return (
    <main className="w-full">
      <section className="w-full h-screen bg-red-500 text-white flex items-center justify-center text-6xl">
        <h3>Luffy</h3>
      </section>
      <section className="w-full h-screen bg-blue-500 text-white flex items-center justify-center text-6xl">
        <h3>Zoro</h3>
      </section>
      <section className="w-full h-screen bg-green-500 text-white flex items-center justify-center text-6xl">
        <h3>Sanji</h3>
      </section>
    </main>
  );
};

export default App;
