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
  starbucks,
  factech,
  smartSolutions,
  tesla,
  shopify,
  microsoft,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  linux,
  github,
  frontendimg,
  backendimg,
  vendor
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
    id: "resume",
    title: "Resume",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End",
    icon: web,
    backendIcon: backend,
    backendimg: backendimg,
    frontendimg: frontendimg,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
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
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "linux",
  //   icon: linux,
  // },
  // {
  //   name: "github",
  //   icon: github,
  // },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Factech",
    icon: factech,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      `<a href="#project" rel="noopener noreferrer" style="color: #3498db; text-decoration: underline;">
        <b>FacTech Vendor</b>
      </a>: Leading the development of a scalable vendor management solution from scratch, projected to generate 50K+ monthly revenue per client, enhancing invoice and PO management for improved client satisfaction.`,
      `<b>Frontend Leadership</b>: Redesigned UI/UX for the entire
      <a href="https://factech.co.in/" target="_blank" rel="noopener noreferrer" style="color: #3498db; text-decoration: underline;">
        Factech site
      </a>including the Admin portal and other products like Kaizen, Purchase, and Inventory, boosting user engagement by <b>30%</b> and reducing support tickets by <b>20%</b>.`,
      "<b>Backend Optimization</b>: Streamlined RESTful APIs, achieving a <b>40% increase</b> in data processing speed and a <b>25% improvement</b> in system response time, enhancing platform performance.",
      "<b>Mentorship & Team Building</b>: Mentored and guided interns to achieve a <b>100% task completion rate</b>, fostering team collaboration and productivity."
    ],       
  },
  {
    title: "Python [Django] Developer",
    company_name: "Smart Solutions",
    icon: smartSolutions,
    iconBg: "#fff",
    date: "Dec 2022 - Mar 2023",
    points: [
      `<b>UI/UX Enhancement</b>: Led the design and implementation of <b>Responsive UI/UX</b> for a new project from the ground up, leveraging Google Charts to deliver visually engaging and data-driven insights, resulting in a <b>40%</b> improvement in user interaction and satisfaction through effective data visualization.`,
      `<b>Backend Development</b>: Developed optimized Python functions to emulate complex Excel functionalities, while managing efficient database CRUD operations via <b>Django</b>, creating a seamless, user-friendly solution that streamlined decision-making processes and improved operational efficiency by <b>30%</b>.`
    ],
  },
  {
    title: "Microsoft Virtual Intern",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#383E56",
    date: "Dec 2021 - Mar 2022",
    points: [
      `Earned recognition as one of the <b>Top 1000 interns</b>, receiving a 
      <a href="https://www.linkedin.com/posts/soham-shankar-more_learn-futurereadytalent-internship-activity-6916800984048431104-zLKg?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" style="color: #3498db; text-decoration: underline;">
        Microsoft Azure Certification
      </a>, 
      for outstanding performance.`,
      "Completed 190+ hours of self-paced learning on core Azure services, covering essential <b>cloud skills<b> for industry relevance.",
      "Attended 5 industry-aligned sessions and participated in hands-on labs with Microsoft Learn sandbox for practical experience.",
      "Successfully deployed a <b>Project</b> on Microsoft Azure, gaining real-world insights into various Azure services and their applications.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Factech Vendor",
    description:
      "Building a <b>Vendor Management App</b> enabling vendors to log in, manage profiles, and view a <b>Dashboard</b> with insights into Purchase Orders, Invoices, Payments, and their statuses. <b>Features</b>: Simplified PO management, invoice creation and tracking, profile editing, and real-time status updates. Tech Stack: <b>React.js</b> for frontend, <b>PHP Laravel/Lumen</b> for backend, with <b>MySQL</b> and <b>Neo4j</b> for database management. Focused on <b>Responsiveness</b> across all devices, scalability, intuitive UX/UI, and performance, designed to handle 10,000+ vendors and streamline procurement processes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "neo4j",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: vendor,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
