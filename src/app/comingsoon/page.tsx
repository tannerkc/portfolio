"use client";

import { useRef } from "react";
import DynamicRenderer from "../components/dynamicStructure";
import Footer from "../components/Footer";

export default function Home() {
  const heading = [
    {
      type: "div",
      props: { id: "fancy-heading" },
      children: [
        {
          type: "div",
          props: { className: "line" },
          children: [
            { type: "p", props: { className: "word fancy" }, children: "Coming " },
            { type: "a", props: { className: "word fancy", href: "https://linkedin.com/in/tanner-cottle" }, children: "Soon", enhance: true, enhancedClass: "letter" }
          ]
        },
      ]
    }
  ];

  const blobRef = useRef(null);

  const handleOnMouseMove = (e) => {
    const { clientX, clientY } = e;

    if (blobRef.current) {
      blobRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
          transform: 'translate(-50%, -50%)'
        },
        { duration: 1500, fill: "forwards" }
      );
    }
  };

  return (
    <main className="main flex min-h-screen backdrop-blur-2xl flex-col items-center justify-between p-24 overflow-x-hidden" onMouseMove={handleOnMouseMove}>
      <div ref={blobRef} id="blob"></div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-y-3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-[#FF00FF] before:to-[#0900FF] before:opacity-10 after:from-[#0900FF] after:via-[#FF00FF] after:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:animate-morph after:animate-glow">
      </div>

      <DynamicRenderer json={heading} />

      <Footer />
    </main>
  );
}
