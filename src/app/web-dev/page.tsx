"use client"
import ServiceRequestForm from "../components/ServiceRequestForm";
import { FaBullhorn, FaCocktail, FaRegLightbulb, FaShopify } from "react-icons/fa";
import { IconType } from "react-icons";
import { SiGooglemybusiness } from "react-icons/si";
import { GrCloudSoftware } from "react-icons/gr";
import { AiTwotoneCloud } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import Image from "next/image";
import BrandGrid from '../components/BrandGrid';

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
      "name": "projectType",
      "type": "select",
      "label": "Type of Project",
      "required": true,
      "options": [
        "Website Development",
        "Web Application (SaaS)",
        "E-commerce Platform",
        "Mobile App",
        "Other"
      ]
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
      "name": "technicalRequirements",
      "type": "textarea",
      "label": "Technical Requirements",
      "required": true
    },
    {
      "name": "message",
      "type": "textarea",
      "label": "Additional Information or Requests",
      "required": false
    }
  ]
  
  const links = [
    {
      title: 'Informational',
      description: 'Delivering expert-crafted content and experiences that make every informational site engaging and memorable.',
      icon: SiGooglemybusiness
    },
    {
      title: 'E-Commerce',
      description: 'Building robust e-commerce platforms, from Shopify integrations to custom-built online stores that drive sales and enhance user experience.',
      icon: FaShopify
    },
    {
      title: 'SaaS',
      description: 'Empowering businesses with innovative SaaS solutions that streamline operations and foster growth through cutting-edge cloud technologies.',
      icon: GrCloudSoftware,
      alt: AiTwotoneCloud
    },
    {
      title: 'Mobile App',
      description: 'Designing and developing intuitive mobile applications that provide seamless user experiences and drive business growth.',
      icon: BsPhoneFill
    },
    // {
    //   title: 'Digital Marketing',
    //   description: 'Crafting comprehensive digital marketing strategies that enhance online presence and drive targeted traffic to your business.',
    //   icon: FaBullhorn
    // },
    {
      title: 'SEO',
      description: 'Optimizing websites to rank higher on search engines, increasing visibility, and driving more organic traffic to your business.',
      icon: FaBullhorn
    },  
    {
      title: 'Consulting',
      description: 'Providing expert consulting services to help businesses navigate challenges, optimize operations, and achieve strategic goals.',
      icon: FaRegLightbulb
    }
  ];
  
  const brands = [
    {
      src: "https://www.svgrepo.com/show/303243/harley-wings-logo.svg",
      title: "Harley Davidson",
      href: "https://www.harley-davidson.com"
    },
    {
      src: "https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg",
      title: "McDonald's",
      href: "https://www.mcdonalds.com"
    },
    {
      src: "https://www.svgrepo.com/show/303508/walt-disney-pictures-logo.svg",
      title: "Disney",
      href: "https://www.disney.com"
    },
    {
      src: "https://www.svgrepo.com/show/303341/netflix-1-logo.svg",
      alt: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
      title: "Netflix",
      href: "https://www.netflix.com"
    },
    {
      src: "https://www.svgrepo.com/show/303398/levis-logo.svg",
      title: "Levi's",
      href: "https://www.levi.com"
    },
    {
      src: "https://www.svgrepo.com/show/303256/the-north-face-1-logo.svg",
      title: "The North Face",
      href: "https://www.thenorthface.com"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      title: "Nike",
      href: "https://www.nike.com",
      class: 'invert'
    },
    {
      src: "https://www.svgrepo.com/show/303132/coca-cola-logo.svg",
      title: "Coca-Cola",
      href: "https://www.coca-cola.com"
    },
    {
      src: "https://www.svgrepo.com/show/361978/amex.svg",
      alt: "https://www.svgrepo.com/show/266068/american-express.svg",
      title: "American Express",
      href: "https://www.americanexpress.com"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiQBKxpM5p8fNMkA3VL6gOnI6vlL29GvM-w&s",
      title: "Ally Bank",
      href: "https://www.ally.com"
    },
    // {
    //   src: "https://getlogovector.com/wp-content/uploads/2020/11/etrade-financial-corporation-logo-vector.png",
    //   title: "E-Trade",
    //   href: "https://www.etrade.com"
    // },
    // {
    //   src: "https://www.svgrepo.com/show/303564/h-m-logo.svg",
    //   title: "H&M",
    //   href: "https://hm.com"
    // }
  ];
  

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
    <main className="main flex min-h-screen flex-col items-center justify-between p-24"  onMouseMove={handleOnMouseMove}>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b pb-6 pt-8 backdrop-blur-2xl text-lg border-neutral-800 bg-zinc-800/30 from-inherit lg:border-0 lg:bg-transparent lg:static lg:w-auto  lg:rounded-xl">
          Tanner Cottle
        </h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:size-auto lg:bg-none">
          <h2
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 lg:backdrop-blur-2xl lg:border-neutral-800 lg:text-lg lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30"
            rel="noopener noreferrer"
          >
            Web Development
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


      <BrandGrid brands={brands} />

      <ServiceRequestForm serviceType="privateBartending" data={data} />
    </main>
  );
}
