"use client"

import Footer from "./components/Footer";
import DynamicRenderer from "./components/dynamicStructure";

export default function Home() {
  const links = [
    {
      title: 'Professional Bartender',
      description: 'Expert in crafting cocktails with a flair, making every event memorable with exceptional drink service.',
      href: '/bartender'
    },
    {
      title: 'Freelance Web Developer',
      description: 'Specialized in building responsive, user-friendly websites with modern technologies like Next.js and React.',
      href: '/web-dev'
    },
    {
      title: 'Branding Consultant',
      description: 'Helping businesses create compelling brand identities that resonate with their target audience and stand out in the market.',
      href: '/branding'
    },
    {
      title: 'Senior Software Engineer',
      description: 'Bringing over 7 years of experience in software development, focusing on scalable, high-performance applications.',
      href: '/comingsoon'
    }
  ];

  const heading = [
    {
      "type": "div",
      "props": { "id": "fancy-heading" },
      "children": [
        {
          "type": "div",
          "props": { "className": "line" },
          "children": [
            { "type": "p", "props": { "className": "word" }, "children": "Tanner" },
            { "type": "p", "props": { "className": "word" }, "children": "Cottle" }
          ]
        },
        {
          "type": "div",
          "props": { "className": "line" },
          "children": [
            { "type": "p", "props": { "className": "word" }, "children": "Software" },
            { "type": "p", "props": { "className": "word" }, "children": "&" },
            { "type": "p", "props": { "className": "word" }, "children": "More" }
          ]
        },
        {
          "type": "div",
          "props": { "className": "line" },
          "children": [
            { "type": "a", "props": { "id":"phone", "className": "word fancy", "href": "tel: 7737574506" }, "children": "773.757.4506", "enhance": true, "enhancedClass": "letter" }
          ]
        },
        {
          "type": "div",
          "props": { "className": "line" },
          "children": [
            { "type": "a", "props": { "id":"email", "className": "word fancy", "href": "mailto: tanner.k.cottle@gmail.com" }, "children": "Email", "enhance": true, "enhancedClass": "letter" }
          ]
        }
      ]
    }
  ]

  const handleMouseMove = (e: any) => {
    if(typeof document !== 'undefined') {
      for(const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
    
        (card as any).style.setProperty("--mouse-x", `${x}px`);
        (card as any).style.setProperty("--mouse-y", `${y}px`);
      };
    }
  }

  const handleOnMouseMove = (e: any) => {
    const blob = typeof document !== 'undefined' && document.getElementById("blob");
    const {clientX, clientY} = e

    blob?.animate({
      left: `${clientX}px`,
      top: `${clientY}px`,
      transform: 'translate(-50%, -50%)'
    }, { duration: 1500, fill: "forwards"})
  }

  return (
    <main className="main flex min-h-screen backdrop-blur-2xl flex-col items-center justify-between p-24 overflow-x-hidden" onMouseMove={handleOnMouseMove}>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b p-6 backdrop-blur-2xl text-lg border-neutral-800 bg-zinc-800/30 from-inherit lg:border-0 lg:bg-transparent lg:static lg:w-auto  lg:rounded-xl">
          Introducing
        </h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:size-auto lg:bg-none lg:hidden">
          <h2
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 lg:backdrop-blur-2xl lg:border-neutral-800 lg:text-lg lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30"
            rel="noopener noreferrer"
          >
            Tanner Cottle
          </h2>
        </div>
      </div>

      <div id="blob"></div>
      {/* <div id="blur"></div> */}

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:transla3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-[#FF00FF] before:to-[#0900FF] before:opacity-10 after:from-[#0900FF] after:via-[#FF00FF] after:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:animate-morph after:animate-glow">
      </div>

      {/* <div className="relative z-[-1] flex place-items-center">
        <div className="before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:blur-2xl before:content-[''] before:bg-gradient-to-br before:from-transparent before:to-[#0900FF] before:opacity-10 before:animate-morph sm:before:w-[480px] lg:before:h-[360px]"></div>
        <div className="after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-3 after:bg-gradient-conic after:blur-2xl after:content-[''] after:from-transparent after:via-[#FF00FF] after:opacity-40 after:animate-glow sm:after:w-[240px]"></div>
      </div> */}

      <DynamicRenderer json={heading} />

      <div 
        className="cards mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left lg:mb-20"
        onMouseMove={handleMouseMove}
      >
        {
          links.map(link => (
            <a 
              key={link.title}
              className="card group rounded-lg border px-5 py-4 m-2 backdrop-blur-2xl border-neutral-700 bg-neutral-800/30"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-content">
                  <h2 className="mb-3 text-xl font-semibold">
                    {link.title}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {link.description}
                  </p>
              </div>
            </a>
          ))
        }
      </div>

      <Footer />
    </main>
  );
}
