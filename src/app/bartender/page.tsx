"use client"
import ServiceRequestForm from "../components/ServiceRequestForm";
import { FaCocktail } from "react-icons/fa";
import { IconType } from "react-icons";
import { GiCheeseWedge, GiChewedHeart, GiChewedSkull } from "react-icons/gi";

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
      "name": "eventDate",
      "type": "date",
      "label": "Date of Event",
      "required": true
    },
    {
      "name": "eventType",
      "type": "select",
      "label": "Type of Event",
      "required": true,
      "options": [
        "Birthday Party",
        "Wedding",
        "Corporate Event",
        "Other"
      ]
    },
    {
      "name": "message",
      "type": "textarea",
      "label": "Special Requests",
      "required": false
    }
  ]

  const links = [
    {
      title: 'Weddings',
      description: 'Crafting memorable experiences through expertly crafted cocktails, ensuring every wedding is celebrated in style with exceptional drink service.',
      icon: GiChewedHeart
    },
    {
      title: 'Private Parties',
      description: 'Creating stunning, user-friendly websites tailored for private parties and events, using cutting-edge technologies like Next.js and React to enhance engagement.',
      icon: GiChewedSkull
    },
    {
      title: 'Catering',
      description: 'Transforming businesses with compelling brand strategies that resonate deeply with their audience, ensuring they stand out and thrive in competitive markets.',
      icon: FaCocktail,
      alt: GiCheeseWedge
    }
  ];
  

  const handleMouseMove = (e: any) => {
    if (typeof document !== 'undefined') {
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
    <main className="main flex min-h-screen flex-col items-center justify-between p-24 mb-[10rem] lg:mb-0"  onMouseMove={handleOnMouseMove}>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b pb-6 pt-8 backdrop-blur-2xl text-lg border-neutral-800 bg-zinc-800/30 from-inherit lg:border-0 lg:bg-transparent lg:static lg:w-auto  lg:rounded-xl">
          Tanner Cottle
        </h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:size-auto lg:bg-none">
          <h2
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 lg:backdrop-blur-2xl lg:border-neutral-800 lg:text-lg lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30"
            rel="noopener noreferrer"
          >
            Bartending <FaCocktail />
          </h2>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-[#0900FF] before:opacity-10 after:from-transparent after:via-[#FF00FF] after:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        
      </div>
      <div id="blob"></div>

      <div 
        className="cards mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"
        onMouseMove={handleMouseMove}
      >
        {
          links.map(link => { 
            const IconComponent = link.icon as IconType;
            return (
            <div
            key={link.title}
              className="card group rounded-lg border px-5 py-4 m-2 backdrop-blur-2xl border-neutral-700 bg-neutral-800/30"
              style={{minHeight: 280}}
            >
              <div className="card-content">
                <span style={{ margin: '10px auto'}}>
                  <IconComponent color="grey" size={50} />
                </span>
                  <h2 className="mb-3 text-xl font-semibold">
                    {link.title}
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50">
                    {link.description}
                  </p>
              </div>
            </div>
          )})
        }
      </div>

      <ServiceRequestForm serviceType="privateBartending" data={data} />
    </main>
  );
}
