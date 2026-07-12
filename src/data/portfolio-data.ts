import ecoImageOne from "../assets/images/project/ecobanjar/eco-1.png";
import ecoImageTwo from "../assets/images/project/ecobanjar/eco-2.png";
import ecoImageThree from "../assets/images/project/ecobanjar/eco-3.png";
import examImageOne from "../assets/images/project/exam/exam-1.png";
import examImageTwo from "../assets/images/project/exam/exam-2.png";
import examImageThree from "../assets/images/project/exam/exam-3.png";
import ppidImageOne from "../assets/images/project/ppid/ppid-1.png";
import ppidImageTwo from "../assets/images/project/ppid/ppid-2.png";
import cssIcon from "../assets/icons/css.svg";

export const personalInfo = {
  name: "Athaullah Mustafa Madjid",
  shortName: "Mustafa Madjid",
  role: "Backend Developer",
  secondaryRole: "Informatics Engineering Student",
  location: "Lampung, Indonesia",
  email: "madjidmustafa@gmail.com",
  phone: "+62 821 7567 3461",
  resumeUrl: "/CV_Mustafa_English.pdf",
  githubUrl: "https://github.com/mustafamadjid",
  linkedinUrl:
    "https://www.linkedin.com/in/athaullah-mustafa-madjid-60a330245/",
  summary:
    "Final-year Informatics Engineering student with experience as a Backend Developer Intern, project team lead, as well as practicum and lecturer assistant. Strong interest in backend and full-stack development using Golang, JavaScript, Express.js, React.js, PostgreSQL, and MySQL.",
  about:
    "I am a final-year Informatics Engineering student at Institut Teknologi Sumatera with hands-on experience building backend services, relational database systems, and full-stack web applications. My work spans RESTful API development, database design, project leadership, and student mentoring. I enjoy turning structured problems into maintainable systems and helping teams move with clarity.",
};

export const navItems = [
  { label: "About Me", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export const skills = [
  { name: "Golang", icon: "https://cdn.simpleicons.org/go/111111" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/111111" },
  { name: "Express.js", icon: "https://cdn.simpleicons.org/express/111111" },
  { name: "React.js", icon: "https://cdn.simpleicons.org/react/111111" },
  { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/111111" },
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/111111" },
  { name: "CSS3", icon: cssIcon },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/111111" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/111111" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/111111" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/111111" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/111111" },
];

export const capabilities = [
  "RESTful API",
  "Database Design",
  "SQL",
  "Leadership",
  "Communication",
  "Collaboration",
  "Adaptability",
  "Mentoring",
];

export const experiences = [
  {
    position: "Fullstack Engineer Intern",
    organization: "HISSA Syariah Saham Indonesia",
    period: "Jun 2026 - Present",
    description: [
      "Building the HISSA Academy platform as a full-stack engineer.",
    ],
  },
  {
    position: "Backend Developer Intern",
    organization: "Public Relations Office of ITERA",
    period: "Jul 2025 - Aug 2025",
    description: [
      "Developed backend features for the ITERA PPID information system using Laravel and MySQL.",
      "Built structured data flows for public information requests and administrative content.",
      "Collaborated with stakeholders to align implementation with institutional workflows.",
    ],
  },
  {
    position: "Database Practicum Assistant",
    organization: "Institut Teknologi Sumatera",
    period: "Feb 2026",
    description: [
      "Assisted students in understanding relational database concepts, SQL, and schema design.",
      "Supported practicum sessions and helped troubleshoot implementation exercises.",
    ],
  },
  {
    position: "Lecturer Assistant - Selected Topics",
    organization: "Institut Teknologi Sumatera",
    period: "Sep 2025 - Nov 2025",
    description: [
      "Supported lecture delivery and student mentoring for selected informatics topics.",
      "Reviewed assignments and guided students through technical problem solving.",
    ],
  },
  {
    position: "Course Assistant (Intro to CS & Software)",
    organization: "Institut Teknologi Sumatera",
    period: "Feb 2024 - May 2024",
    description: [
      "Helped first-year students learn programming fundamentals and software concepts.",
      "Facilitated classroom support, discussions, and assignment feedback.",
    ],
  },
  {
    position: "Education Mentor & PR Staff",
    organization: "HMIF Mengabdi",
    period: "Nov 2024",
    description: [
      "Mentored education-focused community activities and supported public communication.",
      "Worked with a volunteer team to deliver approachable learning experiences.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  period: string;
  year: string;
  role: string;
  type: string;
  status: string;
  description: string;
  overview: string[];
  stack: string[];
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
  responsibilities: string[];
  features: string[];
  results: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "itera-ppid-system",
    name: "ITERA PPID System",
    period: "Jul 2025 - Aug 2025",
    year: "2025",
    role: "Backend Developer Intern",
    type: "Institutional Information System",
    status: "Internship project",
    description:
      "Institutional public information management system built to support request handling and administrative publication workflows.",
    stack: ["Laravel", "MySQL"],
    images: [
      {
        src: ppidImageOne,
        alt: "ITERA PPID system preview",
        caption: "Main system preview",
      },
      {
        src: ppidImageTwo,
        alt: "Public information workflow preview",
        caption: "Administrative workflow",
      },
    ],
    overview: [
      "This project focused on supporting the public relations office in managing public information services through a structured web-based system.",
      "The backend was designed to handle administrative data flows, public information request records, and content publication needs in a maintainable way.",
    ],
    responsibilities: [
      "Developed backend features using Laravel and MySQL.",
      "Structured database tables and relationships for public information workflows.",
      "Implemented data handling for request and administrative content modules.",
      "Collaborated with office stakeholders to align features with daily operational needs.",
    ],
    features: [
      "Public information request data management.",
      "Administrative publication workflow support.",
      "Relational database structure for institutional records.",
      "Backend endpoints prepared for dashboard-driven operations.",
    ],
    results: [
      "Improved clarity of public information data handling.",
      "Created a stronger backend foundation for institutional service workflows.",
      "Gained practical experience working with real stakeholder requirements.",
    ],
  },
  {
    slug: "web-based-examination-system",
    name: "Web-Based Examination System",
    period: "Mar 2026",
    year: "2026",
    role: "Full-Stack Developer",
    type: "Academic Final Project",
    status: "Completed",
    description:
      "Final project application for managing web-based examinations with a Golang backend, React interface, and PostgreSQL database.",
    stack: ["Golang", "React.js", "PostgreSQL"],
    images: [
      {
        src: examImageTwo,
        alt: "Web-based examination system preview",
        caption: "Examination dashboard preview",
      },
      {
        src: examImageOne,
        alt: "Exam management interface preview",
        caption: "Exam management flow",
      },
      {
        src: examImageThree,
        alt: "Student exam interface preview",
        caption: "Student-side experience",
      },
    ],
    overview: [
      "This application was built as a web-based examination platform that helps manage exam sessions, questions, participants, and results.",
      "The system combines a Golang backend, React frontend, and PostgreSQL database to keep the application structured across API, interface, and data layers.",
    ],
    responsibilities: [
      "Designed and implemented backend API flows using Golang.",
      "Built React interface sections for exam management and user interaction.",
      "Modeled PostgreSQL data for exams, participants, and related records.",
      "Connected frontend pages with backend services through RESTful API integration.",
    ],
    features: [
      "Exam session management.",
      "Question and participant data handling.",
      "Role-aware workflows for exam administration.",
      "PostgreSQL-backed persistence for structured academic data.",
    ],
    results: [
      "Delivered a complete final project application with separated frontend and backend layers.",
      "Strengthened experience in full-stack architecture and API integration.",
      "Created a project that can be extended with authentication, scoring, and reporting modules.",
    ],
  },
  {
    slug: "green-education-information-system",
    name: "Green Education Information System",
    period: "Sep 2024 - Dec 2024",
    year: "2024",
    role: "Backend Developer / Team Contributor",
    type: "Information System",
    status: "Completed",
    description:
      "Information system supporting green education content and operational data using Express.js and MySQL.",
    stack: ["Express.js", "MySQL"],
    images: [
      {
        src: ecoImageOne,
        alt: "Green education information system preview",
        caption: "Information system preview",
      },
      {
        src: ecoImageTwo,
        alt: "Green education content management preview",
        caption: "Content management context",
      },
      {
        src: ecoImageThree,
        alt: "Green education data workflow preview",
        caption: "Operational data flow",
      },
    ],
    overview: [
      "This system supported green education content and operational information through a web application backed by Express.js and MySQL.",
      "The project emphasized clean data organization, practical backend routes, and a structure that could be understood and maintained by the team.",
    ],
    responsibilities: [
      "Built backend routes and data handling using Express.js.",
      "Designed MySQL table structures for application data.",
      "Helped connect backend logic with the system's information management needs.",
      "Worked with the project team to keep implementation aligned with planned scope.",
    ],
    features: [
      "Green education content data management.",
      "Express.js API routes for core system operations.",
      "MySQL-backed information storage.",
      "Team-friendly project structure for continued development.",
    ],
    results: [
      "Completed an information system project using JavaScript backend tooling.",
      "Improved practical understanding of Express.js and relational databases.",
      "Built a project foundation suitable for additional content and admin features.",
    ],
  },
];

export const education = [
  {
    school: "Institut Teknologi Sumatera",
    degree: "B.S. Informatics Engineering",
    period: "Aug 2022 - Present",
    detail: "GPA: 3.51/4.00",
  },
  {
    school: "SMA IT Fitrah Insani Bandar Lampung",
    degree: "Natural Sciences",
    period: "May 2019 - May 2022",
    detail: "Score: 90, Best Student",
  },
];

export const languages = [
  "Indonesian: Native",
  "English: 540 ITERA English Proficiency Test",
];
