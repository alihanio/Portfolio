import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  universe,
  airbnb,
  health,
  bilingual,
  peackspace,
  mui,
  gitHub,
  sass,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "JavaScript Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "TypeScript Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "html",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "javaScript",
    icon: javascript,
  },
  {
    name: "typeScript",
    icon: typescript,
  },
  {
    name: "react",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Node",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "gitHub",
    icon: gitHub,
  },
  {
    name: "mui",
    icon: mui,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    iconBg: "#383E56",
    date: "PeackSoft House",
    points: [
      "Developing and maintaining web applications using React.js and related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    iconBg: "#E6DEDD",
    date: "Javascript eleven",
    points: [
      "Developing and maintaining mobile applications using React Native.",
      "Collaborating with designers and product managers to create intuitive and high-performing mobile user interfaces.",
      "Ensuring compatibility and smooth performance across both iOS and Android platforms.",
      "Participating in code reviews and providing feedback to enhance mobile app development practices.",
    ],
  },
  {
    title: "Frontend Mentor",
    iconBg: "#383E56",
    date: "PeackSoft House",
    points: [
      "As a frontend JavaScript-React mentor, I taught using my own method, guiding and developing 20 talented student programmers",
      "I emphasized practical lessons, ensuring a strong grasp of React concepts and best practices.",
      "Through personalized coaching and hands-on projects, I prepared them to excel in building robust applications.",
    ],
  },
  {
    title: "TypeScript Developer",
    iconBg: "#E6DEDD",
    date: "PeackSoft House",
    points: [
      "Utilizing TypeScript to enhance code quality and maintainability in web development projects.",
      "Implementing strong typing and interfaces to catch errors early and improve code reliability.",
      "Collaborating with team members to integrate TypeScript into existing JavaScript projects.",
      "Writing and maintaining comprehensive TypeScript documentation and type definitions for improved developer experience.",
    ],
  },
];

const projects = [
  {
    name: "AIR-BNB",
    description:
      "Disruption of Hospitality: Airbnb revolutionized traditional lodging by allowing individuals to rent their spaces, challenging the dominance of hotels.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/",
  },
  {
    name: "Bilingual",
    description:
      "Language Testing Revolution: Bilingual transforms language assessment with a dynamic platform, challenging conventional evaluation methods.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: bilingual,
    source_code_link: "https://github.com/",
  },
  {
    name: "University-Space",
    description:
      "Universe Space cultivates a seamless connection between students and faculty, enhancing academic collaboration through intuitive chat features.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: universe,
    source_code_link: "https://github.com/",
  },
  {
    name: "Health-Check",
    description:
      "Streamlining Access to Healthcare: Simplifying the process of finding available medical professionals with real-time availability information, optimizing accessibility.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Exceljs",
        color: "green-text-gradient",
      },
      {
        name: "Dayjs",
        color: "pink-text-gradient",
      },
    ],
    image: health,
    source_code_link: "https://github.com/",
  },
  {
    name: "Peack-Space",
    description:
      "Streamlining Social Interaction: Simplifying the process of connecting with friends and discovering new content through real-time updates, optimizing user engagement and interaction.",
    tags: [
      {
        name: "react.ts",
        color: "blue-text-gradient",
      },
      {
        name: "antd",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: peackspace,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
