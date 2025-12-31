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
    <div className="w-full bg-red-200">
      <div className="w-full grid grid-cols-8 grid-rows-20 gap-4 p-4 overflow-x-hidden">
        <div className="elem aspect-square" style={{ "--r": "1", "--c": "3" }}>
          <img
            src="./img/img1.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "1", "--c": "7" }}>
          <img
            src="./img/img2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "2", "--c": "1" }}>
          <img
            src="./img/img3.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "3", "--c": "4" }}>
          <img
            src="./img/img4.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "3", "--c": "5" }}>
          <img
            src="./img/img5.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "4", "--c": "2" }}>
          <img
            src="./img/img6.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "4", "--c": "6" }}>
          <img
            src="./img/img7.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "5", "--c": "7" }}>
          <img
            src="./img/img8.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "5", "--c": "8" }}>
          <img
            src="./img/img9.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "6", "--c": "5" }}>
          <img
            src="./img/img10.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "6", "--c": "3" }}>
          <img
            src="./img/img11.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "7", "--c": "1" }}>
          <img
            src="./img/img12.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "7", "--c": "4" }}>
          <img
            src="./img/img13.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "8", "--c": "2" }}>
          <img
            src="./img/img14.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "8", "--c": "1" }}>
          <img
            src="./img/img15.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "9", "--c": "8" }}>
          <img
            src="./img/img16.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "9", "--c": "6" }}>
          <img
            src="./img/img17.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "10", "--c": "8" }}>
          <img
            src="./img/img18.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="elem aspect-square" style={{ "--r": "10", "--c": "5" }}>
          <img
            src="./img/img19.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl uppercase text-center font-Onepiece">
          One piece
        </h1>
      </div>
      <div className="w-full h-screen mx-auto py-96 text-center text-black bg-[#D1D1D1] flex items-center justify-center relative z-[999] ">
        <p className="text-3xl w-3/4 font-regular leading-[2.5rem] text-left">
          One Piece is a high-fantasy adventure follows Monkey D. Luffy and his
          crew, the Straw Hat Pirates, as they navigate the Grand Line in search
          of the legendary treasure left by the Pirate King, Gol D. Roger. The
          world is technically divided into four seas by the Red Line and the
          Grand Line, governed by a strict World Government and the Marines. The
          series utilizes a complex power system involving Devil Fruits, which
          grant superhuman abilities at the cost of the ability to swim, and
          Haki, a manifestation of spiritual willpower. Narratively, the plot
          focuses on uncovering the Void Century through indestructible stone
          blocks called Poneglyphs, while exploring themes of absolute freedom
          and inherited will.
        </p>
      </div>
    </div>
  );
};

export default App;
