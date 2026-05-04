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
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
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

export const projects = [
  {
    name: "ITERA PPID System",
    period: "Jul 2025 - Aug 2025",
    description:
      "Institutional public information management system built to support request handling and administrative publication workflows.",
    stack: ["Laravel", "MySQL"],
  },
  {
    name: "Web-Based Examination System",
    period: "Mar 2026",
    description:
      "Final project application for managing web-based examinations with a Golang backend, React interface, and PostgreSQL database.",
    stack: ["Golang", "React.js", "PostgreSQL"],
  },
  {
    name: "Green Education Information System",
    period: "Sep 2024 - Dec 2024",
    description:
      "Information system supporting green education content and operational data using Express.js and MySQL.",
    stack: ["Express.js", "MySQL"],
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
