"use client"

import { useEffect, useState } from "react";
import ServiceRequestForm from "../components/ServiceRequestForm";

export default function Home() {
  const data = [
    {
      "name": "name",
      "type": "text",
      "label": "Your Name",
      "required": true
    },
    {
      "name": "email",
      "type": "email",
      "label": "Your Email",
      "required": true
    },
    {
      "name": "phone",
      "type": "tel",
      "label": "Phone Number",
      "required": true
    },
    {
      "name": "companyName",
      "type": "text",
      "label": "Company Name",
      "required": true
    },
    {
      "name": "brandingGoals",
      "type": "textarea",
      "label": "Branding Goals",
      "required": true
    },
    {
      "name": "budget",
      "type": "select",
      "label": "Budget",
      "required": true,
      "options": [
        "Less than $1,000",
        "$1,000 - $5,000",
        "$5,000 - $10,000",
        "More than $10,000"
      ]
    },
    {
      "name": "timeline",
      "type": "date",
      "label": "Desired Completion Date",
      "required": true
    },
    {
      "name": "message",
      "type": "textarea",
      "label": "Additional Information or Requests",
      "required": false
    }
  ]
  
  
  let shapes = [
    {
      color: '#0900ff'
    },
    {
      color: '#ff00ff'
    },
    {
      color: '#cc00cc'
    },
    {
      color: '#0600cc'
    },
    {
      color: '#8000ff'
    },
    {
      color: '#ff00ff'
    },
    {
      color: '#0900ff'
    }
  ]

  const [previousCombo, setPreviousCombo] = useState(0)

  useEffect(() => {
    const combinations = [
      { configuration: 1, roundness: 1 },
      { configuration: 1, roundness: 2 },
      { configuration: 1, roundness: 4 },
      { configuration: 2, roundness: 2 },
      { configuration: 2, roundness: 3 },
      { configuration: 3, roundness: 3 },
    ]

    const shapeWrapper = typeof document !== 'undefined' && document.getElementById("shape-wrapper");

    const uniqueRand = (min, max) => {
      let next = previousCombo;
      while (previousCombo == next) next = rand(min, max);
      return next;
    }

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

    setInterval(() => {
      const index = uniqueRand(0, combinations.length - 1), combination = combinations[index]

      console.log(`setting config: ${combination}`)

      if (shapeWrapper) {
        shapeWrapper.dataset.configuration = `${combination.configuration}`
        shapeWrapper.dataset.roundness = `${combination.roundness}`
  
        setPreviousCombo(index)
      }

    }, 3000)
  }, [])

  return (
    <main className="main flex min-h-screen backdrop-blur-2xl flex-col items-center justify-between p-24 overflow-x-hidden">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b pb-6 pt-8 backdrop-blur-2xl text-lg border-neutral-800 bg-zinc-800/30 from-inherit lg:border-0 lg:bg-transparent lg:static lg:w-auto  lg:rounded-xl">
          Tanner Cottle
        </h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:size-auto lg:bg-none">
          <h2
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 lg:backdrop-blur-2xl lg:border-neutral-800 lg:text-lg lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30"
            rel="noopener noreferrer"
          >
            Branding
          </h2>
        </div>
      </div>

      {/* <div id="blob"></div> */}
      {/* <div id="blur"></div> */}

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:transla3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-[#FF00FF] before:to-[#0900FF] before:opacity-10 after:from-[#0900FF] after:via-[#FF00FF] after:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:animate-morph after:animate-glow">
      </div>

      <div className="center-wrapping">
        <div id="shape-wrapper">
          {
            shapes.map((shape, i) => (
              <div key={shape.color + i} className="shape" style={{background: shape.color}}></div>
            ))
          }
        </div>
      </div>

      <ServiceRequestForm serviceType="brandingConsultant" data={data} />
    </main>
  );
}
