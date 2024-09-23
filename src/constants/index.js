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
  mongodb,
  git,
  figma,
  docker,
  meta,
  huscle,
  softwareCornwall,
  shopify,
  huscleWebsite,
  payplotWebsite,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "about",
  },
  {
    id: "work",
    title: "work",
  },
  {
    id: "contact",
    title: "contact",
  },
];

const services = [
  {
    title: "student",
    icon: web,
  },
  {
    title: "full-stack developer",
    icon: mobile,
  },
  {
    title: "content creator",
    icon: backend,
  },
  {
    title: "project manager",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "full-stack engineer & project manager",
    company_name: "huscle",
    icon: huscle,
    iconBg: "#383E56",
    date: "sep 2023 - present",
    points: [
      "directed management of 2 major huscle projects, distributing tasks across teams in a fast-paced and user-centred environment.",
      "developed a responsive fitness app with react native, tamagui, and firebase, cut lines of code by more than 20% in refactoring sessions"
    ],
  },
  {
    title: "remote software developer",
    company_name: "software cornwall",
    icon: softwareCornwall,
    iconBg: "#E6DEDD",
    date: "Dec 2020",
    points: [
      "developed solutions using c++ on an arduino board",
      "utilised the agile methodology in a team challenge to solve stories",
      "used github to manage and collaborate on code with team members",
      "used circuit design software tinkerCAD to draw up and test circuit designs on breadboards connected to microcontrollers"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "huscle website",
    description:
      "a website for a fitness app that allows users to track their workouts, set goals, and compete with friends",
    image: huscleWebsite,
    source_code_link: "https://husclefitness.co.uk/",
  },
  {
    name: "payplot",
    description:
      "web application that allows users to visualise transactions for blockchain wallets, report wallets facilitating fraudulent activity and view credibility ratings for wallets",
    image: payplotWebsite,
    source_code_link: "https://github.com/hardiv/PayPlot",
  },
  {
    name: "360me",
    description:
      "a user-friendly platform for colleagues to provide eachother with constructive feedback, which is sent anonymously to the recipient via email",
    // image: tripguide,
    source_code_link: "https://github.com/hardiv/360me",
  },
];

export { services, technologies, experiences, testimonials, projects };