import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    souvenirs,
    weather,
    css,
    calculator,
    reactjs,
    redux,
    tailwind,
    chatapp,
    nodejs,
    mongodb,
    git,
    nike,
    figma,
    docker,
    promtopia,
    meta,
    starbucks,
    tesla,
    TCS,
    accenture,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "FullStack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Tata Consultancy Services",
      icon: TCS,
      iconBg: "#383E56",
      date: "April 2021 - Feb 2024",
      points: [
        "Developed and maintained web applications using React.js and other related technologies.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implemented responsive design and ensuring cross-browser compatibility.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Senior Development Analyst",
      company_name: "Accenture",
      icon: accenture,
      iconBg: "#383E56",
      date: "May 2024 - Present",
      points: [
        "Collaborating with stakeholders during development processes to confirm creative proposals and design best practices.",
        "Testing web-based product functionality and delivered iterations to customer.",
        "Developing and maintaining using React.js, HTML, CSS and JavaScript to develop features for both mobile and desktop platforms.",
        "Following SDLC best practices within Agile environment to produce rapid iterations for clients.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Promtopia",
      description:
        "Promptopia is a open-source AI Prompting tool for modern world to discover, create and share creative prompts",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: promtopia,
      site:"https://promptopia-one-khaki.vercel.app",
      source_code_link: "https://github.com/Joy97D/promptopia",
    },
    {
      name: "E-Commerce",
      description:
        "E-commerce Landing page using Tailwind css",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nike,
      site:"https://nike-joy97d.vercel.app/",
      source_code_link: "https://github.com/Joy97D/Nike",
    },
    {
      name: "Chat Application",
      description:
        "Frontend Chat App react using chat engine",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-chat-engine",
          color: "green-text-gradient",
        },
      ],
      image: chatapp,
      site:"https://chat-app-lilac-eta.vercel.app/",
      source_code_link: "https://github.com/Joy97D/ChatApp",
    },
    {
      name: "Moments",
      description:"FullStack App to share cherished Moments",
      tags: [
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
      ],
      image: souvenirs,
      site:"https://github.com/Joy97D/souvenirs",
      source_code_link: "https://github.com/Joy97D/souvenirs",
    },
    {
      name: "Weather App",
      description:
        "Frontend App to get current weather and temperature for any city using weather API",
      tags: [
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
      ],
      image: weather,
      site:"https://weather-app-amber-eight-67.vercel.app/",
      source_code_link: "https://github.com/Joy97D/Weather",
    },
    {
      name: "Calculator",
      description:
        "Simple Calculator App",
      tags: [
        {
          name: "react",
          color: "green-text-gradient",
        },
      ],
      image: calculator,
      site:"https://github.com/Joy97D/Calculator",
      source_code_link: "https://github.com/Joy97D/Calculator",
    },
  ];
  
  export { services, technologies, experiences, projects };