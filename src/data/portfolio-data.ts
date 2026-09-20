import cssIcon from "../assets/icons/css.svg";
import ecoImageOne from "../assets/images/project/ecobanjar/eco-1.png";
import ecoImageTwo from "../assets/images/project/ecobanjar/eco-2.png";
import ecoImageThree from "../assets/images/project/ecobanjar/eco-3.png";
import examImageOne from "../assets/images/project/exam/exam-1.png";
import examImageTwo from "../assets/images/project/exam/exam-2.png";
import examImageThree from "../assets/images/project/exam/exam-3.png";
import fdeImageOne from "../assets/images/project/financial-data-engine/fde-1.png";
import fdeImageTwo from "../assets/images/project/financial-data-engine/fde-2.png";
import fdeImageThree from "../assets/images/project/financial-data-engine/fde-3.png";
import fdeImageFour from "../assets/images/project/financial-data-engine/fde-4.png";
import learningPlatformImageOne from "../assets/images/project/learning-platform/lp-1.jpg";
import learningPlatformImageTwo from "../assets/images/project/learning-platform/lp-2.jpg";
import learningPlatformImageThree from "../assets/images/project/learning-platform/lp-3.jpg";
import learningPlatformImageFour from "../assets/images/project/learning-platform/lp-4.jpg";
import ppidImageOne from "../assets/images/project/ppid/ppid-1.png";
import ppidImageTwo from "../assets/images/project/ppid/ppid-2.png";
import stockDashboardImageOne from "../assets/images/project/stock-dashboard/sa-1.jpg";
import stockDashboardImageTwo from "../assets/images/project/stock-dashboard/sa-2.jpg";
import stockDashboardImageThree from "../assets/images/project/stock-dashboard/sa-3.jpg";

export const personalInfo = {
  name: "Athaullah Mustafa Madjid",
  shortName: "Mustafa Madjid",
  role: "Backend-focused Software Engineer",
  location: "Lampung, Indonesia",
  email: "madjidmustafa@gmail.com",
  resumeUrl: "/Athaullah-Mustafa-Madjid-Software-Engineer-CV.pdf",
  githubUrl: "https://github.com/mustafamadjid",
  linkedinUrl:
    "https://www.linkedin.com/in/athaullah-mustafa-madjid-60a330245/",
  heroHeadline: "Backend-focused Software Engineer",
  heroCopy:
    "I build RESTful APIs, relational database systems, and maintainable web applications using Go, Laravel, Express.js, PostgreSQL, and Docker.",
  heroProof:
    "Experience delivering educational and public-sector systems from requirements analysis and database design to deployment and performance validation.",
  about:
    "I am an Informatics Engineering graduate from Institut Teknologi Sumatera with hands-on experience developing backend and web-based systems for education and public-sector use cases. My work focuses on RESTful API design, relational database modeling, maintainable application architecture, and Docker-based deployment.\n\nI prefer clear separation of concerns, explicit API contracts, normalized data models, and engineering decisions that can be explained and tested. I have worked with Go, Laravel, Express.js, PostgreSQL, MySQL, Vue.js, and React.js across internships, academic projects, and team-based development.\n\nI am currently expanding my skills in CI/CD, infrastructure automation, observability, and container orchestration.",
};

export const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const trustIndicators = [
  { value: "3+", label: "Delivered web systems" },
  { value: "2×", label: "Backend & fullstack internship" },
  { value: "8", label: "Team members led" },
  { value: "60+", label: "Students mentored" },
  { value: "Docker", label: "VPS deployment experience" },
];

export type Skill = {
  name: string;
  icon: string;
};

export const skills: Skill[] = [
  { name: "Golang", icon: "https://cdn.simpleicons.org/go/111111" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/111111" },
  { name: "Express.js", icon: "https://cdn.simpleicons.org/express/111111" },
  { name: "React.js", icon: "https://cdn.simpleicons.org/react/111111" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/111111" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/111111" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/111111" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/111111" },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux/111111" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/111111" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/111111" },
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/111111" },
  { name: "CSS3", icon: cssIcon },
];

export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Core",
    items: ["Go", "Laravel", "PostgreSQL", "MySQL", "Docker"],
  },
  {
    title: "Working Experience",
    items: ["Express.js", "Vue.js", "React.js", "RESTful API Design", "RBAC"],
  },
  {
    title: "Familiar",
    items: ["CI/CD Fundamentals", "Cloud Services", "Observability"],
  },
];

export const engineeringPractices = [
  "Modular Architecture",
  "Repository Pattern",
  "Unit Testing",
  "API Documentation",
  "Database Migration",
  "Code Review",
  "Performance Testing",
  "Container-based Deployment",
];

export type Experience = {
  position: string;
  organization: string;
  period: string;
  context: string;
  keyContributions: string[];
  relatedProject?: string;
};

export const experiences: Experience[] = [
  {
    position: "Fullstack Engineer Intern",
    organization: "HISSA Syariah Saham Indonesia",
    period: "Jun 2026 – Sep 2026",
    context:
      "A learning platform and stock screening dashboard for sharia stock investing, built by a five-person cross-functional team.",
    keyContributions: [
      "Built the HISSA Academy learning platform as the sole fullstack engineer using Laravel, MySQL, and Docker.",
      "Developed statistical charting for stock screening from scraped data provided by the data analyst team.",
      "Implemented Google OAuth, Laravel Sanctum session authentication, and role-based access control.",
      "Deployed the application using Docker on a Linux VPS.",
    ],
  },
  {
    position: "Backend Developer Intern",
    organization: "Public Relations Office of ITERA",
    period: "Jul 2025 – Aug 2025",
    context:
      "Replaced a legacy WordPress-based public information system with a maintainable Laravel and MySQL backend.",
    keyContributions: [
      "Developed backend features for the ITERA PPID information system using Laravel and MySQL.",
      "Structured database tables and relationships for public information request workflows.",
      "Deployed the system using Docker and Docker Compose on an Ubuntu VPS.",
      "Collaborated with office stakeholders to align features with daily operational needs.",
    ],
  },
  {
    position: "Database Practicum Assistant",
    organization: "Institut Teknologi Sumatera",
    period: "Feb 2026",
    context: "Supported 60+ students in database course practicum sessions.",
    keyContributions: [
      "Assisted students in understanding relational database concepts, SQL, and schema design.",
      "Supported practicum sessions and helped troubleshoot implementation exercises.",
    ],
  },
  {
    position: "Lecturer Assistant — Selected Topics",
    organization: "Institut Teknologi Sumatera",
    period: "Sep 2025 – Nov 2025",
    context: "Supported a selected informatics topics course for undergraduate students.",
    keyContributions: [
      "Supported lecture delivery and guided students through technical problem solving.",
      "Reviewed assignments and provided structured feedback.",
    ],
  },
  {
    position: "Course Assistant (Intro to CS & Software)",
    organization: "Institut Teknologi Sumatera",
    period: "Feb 2024 – May 2024",
    context: "Supported first-year students in programming fundamentals coursework.",
    keyContributions: [
      "Helped students learn programming fundamentals and software concepts.",
      "Facilitated classroom support, discussions, and assignment feedback.",
    ],
  },
  {
    position: "Education Mentor & PR Staff",
    organization: "HMIF Mengabdi",
    period: "Nov 2024",
    context:
      "Community-focused education initiative by the Informatics Engineering student association.",
    keyContributions: [
      "Mentored education-focused community activities and supported public communication.",
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
  problem: string;
  description: string;
  result: string;
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
  featured?: boolean;
  decisions?: {
    decision: string;
    reason: string;
    tradeOff: string;
  }[];
  testing?: {
    scenario: string;
    environment: string;
    metrics: string[];
  };
  challenges?: {
    challenge: string;
    solution: string;
    lesson: string;
  }[];
  links?: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "web-based-examination-system",
    name: "Web-Based Examination System",
    period: "Mar 2026",
    year: "2026",
    role: "Fullstack Developer",
    type: "Academic Final Project",
    status: "Completed",
    problem:
      "SMA IT Fitrah Insani needed a structured exam platform to replace inconsistent manual administration, improve question management, and support concurrent exam sessions.",
    description:
      "A school examination platform with Go backend, React frontend, and PostgreSQL designed for structured exam administration, question management, concurrent sessions, and automated grading.",
    result:
      "Supported concurrent sessions for 30 users at 0% error rate under load testing; SUS score 71.88 versus 60 on the previous system.",
    stack: ["Go", "React.js", "PostgreSQL", "Docker"],
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
      "SMA IT Fitrah Insani relied on fragmented manual processes for exam administration. Question import workflows were inconsistent, exam session management had no centralized system, and the previous platform received a lower usability score.",
      "This system was built to provide structured exam lifecycle management from question creation and import to exam session scheduling, student participation, and submission handling — all through a unified web interface.",
    ],
    responsibilities: [
      "Requirements analysis and system design.",
      "Backend architecture and REST API development using Go with repository pattern.",
      "Database design using PostgreSQL with normalization and indexing.",
      "React frontend for exam management and student-facing interfaces.",
      "Authentication and role separation for teachers and students.",
      "Docker-based deployment with Docker Compose on an Ubuntu VPS behind Traefik reverse proxy.",
      "Black-box testing to validate user workflows, input validation, and expected system behavior.",
      "White-box testing to validate internal logic, control flow, and backend implementation paths.",
      "Performance testing using k6 covering baseline (5 VUs) and load (25–100 VUs) scenarios.",
      "Usability evaluation using System Usability Scale methodology.",
    ],
    features: [
      "Exam lifecycle management (create, schedule, activate, close).",
      "Question bank with bulk import workflow supporting 50+ questions per operation.",
      "Concurrent exam sessions with token-based access control.",
      "Automated scoring and grading.",
      "Role-based access for teachers and students.",
      "Graceful shutdown and worker lifecycle management.",
    ],
    results: [
      "Achieved a System Usability Scale score of 71.88, compared with 60 for the previous system.",
      "Supported concurrent exam sessions for 25 students and 5 teachers in the tested environment.",
      "Performance testing across 5–100 virtual users showed 0% error rate with average response time of 18.6–29.4 ms on a 4 vCPU / 4 GB RAM VPS.",
      "Successfully deployed using Docker, Docker Compose, and Traefik on Ubuntu VPS.",
      "Delivered a complete final project with separated backend, frontend, and database layers.",
    ],
    featured: true,
    decisions: [
      { decision: "Use Go for backend API.", reason: "Go concurrency model supports concurrent exam sessions and predictable latency.", tradeOff: "Go ecosystem is smaller than Node.js for complex frontend tasks." },
      { decision: "Use PostgreSQL.", reason: "Exam data is strongly relational and needs transactional consistency.", tradeOff: "Structured migrations add setup overhead and schema changes require planning." },
      { decision: "Use Docker Compose and Traefik.", reason: "Local development and VPS deployment use identical service topology.", tradeOff: "Adds orchestration complexity compared with bare Node/Go process hosting." },
      { decision: "Use token-based exam access.", reason: "Exam access should be role separated and auditable per session.", tradeOff: "Token validation adds a small auth step on every protected request." },
    ],
    testing: {
      scenario: "Black-box testing (user workflows and input validation), white-box testing (internal logic and control flow), and baseline/load testing across student exam workflow (login, get exam, load questions, save answers, submit).",
      environment: "4 vCPU / 4 GB RAM VPS, Ubuntu, Docker Compose, Traefik v3, PostgreSQL 16, k6.",
      metrics: [
        "Black-box: validated all user-facing exam workflows and error states.",
        "White-box: validated internal logic paths and backend control flow.",
        "Baseline 5 VUs: avg 18.61 ms, p95 28.20 ms, error 0%.",
        "Load 25 VUs: avg 22.85 ms, p95 28.15 ms, error 0%.",
        "Load 50 VUs: avg 23.66 ms, p95 25.42 ms, error 0%.",
        "Load 100 VUs: avg 29.36 ms, p95 19.13 ms, error 0%.",
      ],
    },
    challenges: [
      { challenge: "Handling concurrent examination sessions safely.", solution: "Moved exam access and submission flow to stateless endpoints and validated session scope at database layer.", lesson: "Concurrency issues surface early in stateful workflows and should be tested with more users than expected." },
      { challenge: "Keeping question import workflow consistent for teachers.", solution: "Used transactional batch import with clear validation errors per question row.", lesson: "Input-heavy workflows need human readable failure messages, not only API codes." },
      { challenge: "Managing visibility and permissions across roles.", solution: "Separated teacher and student routes, and added middleware-level checks for sensitive actions.", lesson: "Role checks belong in middleware, not only inside service functions." },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/mustafamadjid/web-app-cbt" },
      { label: "Live Demo", href: "https://ujian.smafi.my.id/" },
    ],
  },
  {
    slug: "itera-ppid-system",
    name: "ITERA PPID System",
    period: "Jul 2025 – Aug 2025",
    year: "2025",
    role: "Backend Developer Intern",
    type: "Institutional Information System",
    status: "Internship project",
    problem:
      "The public relations office used a legacy WordPress system with non-functional features and no maintenance, requiring a structured replacement for public information request handling.",
    description:
      "Institutional public information management system built to replace a legacy WordPress platform with a maintainable Laravel and MySQL backend.",
    result:
      "Delivered a structured backend for public information workflows, deployed using Docker and Docker Compose on an Ubuntu VPS.",
    stack: ["Laravel", "MySQL", "Docker"],
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
      "The Public Relations Office of ITERA previously managed public information requests through a WordPress-based website with broken features and no ongoing maintenance. This caused inconsistent workflows and limited scalability for institutional needs.",
      "The replacement system was developed to provide a structured backend for managing public information requests, administrative content publication, and institutional records.",
    ],
    responsibilities: [
      "Developed backend features using Laravel and MySQL.",
      "Designed database schema for public information workflows.",
      "Implemented data handling for request and administrative content modules.",
      "Deployed the system using Docker and Docker Compose on an Ubuntu VPS.",
      "Collaborated with office stakeholders to align features with daily operational needs.",
    ],
    features: [
      "Public information request data management.",
      "Administrative publication workflow support.",
      "Relational database structure for institutional records.",
      "Docker-based deployment on Linux VPS.",
      "Separation of administrative workflow, application logic, and data model.",
    ],
    results: [
      "Replaced a legacy WordPress system with a maintainable Laravel backend.",
      "Structured data flows for public information services.",
      "Deployed successfully using Docker on Ubuntu VPS.",
      "Gained practical experience working with real stakeholder requirements in an institutional context.",
    ],
    featured: true,
    decisions: [
      { decision: "Replace WordPress with Laravel.", reason: "WordPress site was unmaintained and broken; Laravel supports structured relational backend and institutional workflows.", tradeOff: "Longer setup than customizing a theme, but easier to maintain over time." },
      { decision: "Use MySQL for the relational database.", reason: "Institutional records fit a relational model and MySQL is widely supported on the target VPS.", tradeOff: "Less native JSON support than PostgreSQL for future dynamic content." },
      { decision: "Deploy with Docker on the office VPS.", reason: "Docker made the environment reproducible across development and production.", tradeOff: "Requires container knowledge and monitoring on the institution's VPS." },
    ],
    challenges: [
      { challenge: "Understanding public information office workflows without documentation.", solution: "Worked directly with office stakeholders to map request and publication steps.", lesson: "Legacy replacement projects start with stakeholder interviews, not code." },
      { challenge: "Moving data from a broken WordPress site without breaking existing public URLs.", solution: "Scoped the project to backend workflows first, minimizing front-end URL changes.", lesson: "URL stability and stakeholder trust are constraints as real as technical ones." },
    ],
  },
  {
    slug: "green-education-information-system",
    name: "Green Education Information System",
    period: "Sep 2024 – Dec 2024",
    year: "2024",
    role: "Project Manager & Backend Developer",
    type: "Information System",
    status: "Completed",
    problem:
      "Environmental reporting and illegal waste disposal data lacked a centralized system, requiring coordination across an 8-person development team for a village-level solution.",
    description:
      "Information system for environmental reporting and illegal waste disposal tracking built with Express.js and MySQL, led as project manager with backend development responsibilities.",
    result:
      "Led an 8-member team to deliver a functional information system deployed on shared hosting, coordinating backend API development with frontend and system design teams.",
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
      "The project addressed the absence of a centralized system for environmental reporting and illegal waste disposal location tracking at the village level.",
      "As project manager and backend developer, I coordinated an 8-person team comprising 3 frontend developers, 1 requirement analyst, and 3 system designers while also building the Express.js API and MySQL database layer.",
    ],
    responsibilities: [
      "Led an 8-member project team as project manager.",
      "Designed and implemented the Express.js backend API.",
      "Modeled the MySQL database for environmental reporting data.",
      "Maintained API contracts to coordinate frontend and backend development.",
      "Managed project scope, timeline, and team coordination.",
    ],
    features: [
      "Environmental reporting data management.",
      "Illegal waste disposal location tracking.",
      "Express.js API for core system operations.",
      "MySQL-backed information storage.",
      "Team-structured project with clear role separation.",
    ],
    results: [
      "Delivered a functional information system within the academic semester timeline.",
      "Successfully deployed on shared hosting for stakeholder access.",
      "Coordinated backend API development across 3 frontend developers.",
      "Gained practical leadership and project management experience with an 8-person team.",
    ],
    featured: true,
    decisions: [
      { decision: "Use Express.js for backend.", reason: "Team had JavaScript experience, Express.js is lightweight and fast to prototype.", tradeOff: "Less structured than Laravel or Go for module boundaries and middleware composition." },
      { decision: "Use MySQL for structured reporting data.", reason: "Reporting entities (location, waste type) fit a relational model and MySQL was available on shared hosting.", tradeOff: "Shared hosting limits index and query tuning, which can add latency at scale." },
      { decision: "Deploy on shared hosting.", reason: "Budget and time limited, and cPanel-based hosting was accessible for the team.", tradeOff: "No Docker reproducibility and fewer environment controls than a VPS." },
      { decision: "Separate team into system design, frontend, and backend roles.", reason: "8 members needed clear ownership to avoid overlapping code changes.", tradeOff: "Requires lightweight coordination and API contracts across sub-teams." },
    ],
    challenges: [
      { challenge: "Coordinating an 8-person team with mixed skill levels and timelines.", solution: "Set explicit API contracts and weekly sync meetings to maintain end-to-end integration.", lesson: "Team coordination matters more than any framework choice for on-time delivery." },
      { challenge: "Shared hosting constraints limited server-side tooling.", solution: "Moved heavy data processing to daily cron scripts and kept API calls lightweight.", lesson: "Budget-hosted projects need deliberate trade-offs between feature scope and server capacity." },
    ],
  },
  {
    slug: "hissa-stock-analysis-dashboard",
    name: "HISSA Stock Analysis Dashboard",
    period: "Jun 2026 - Sep 2026",
    year: "2026",
    role: "Fullstack Engineer Intern",
    type: "Internship Project",
    status: "Completed",
    problem:
      "Investors needed a clear way to explore stock accumulation, distribution, net value, and foreign/domestic investor flows across configurable date ranges and stock codes.",
    description:
      "A full-stack stock market analytics dashboard built with Laravel, PostgreSQL, Vue 3, and TypeScript for exploring market flows through interactive charts and rankings.",
    result:
      "Centralized filtered, aggregated, ranked, and paginated market analytics into reusable RESTful APIs and interactive visualizations for frontend decision support.",
    stack: [
      "Laravel",
      "PostgreSQL",
      "Vue 3",
      "TypeScript",
      "Apache ECharts",
      "TanStack Vue Query",
      "Zod",
    ],
    images: [
      {
        src: stockDashboardImageOne,
        alt: "HISSA stock analysis dashboard preview",
        caption: "Market analytics dashboard",
      },
      {
        src: stockDashboardImageTwo,
        alt: "HISSA stock flow visualization preview",
        caption: "Investor flow visualization",
      },
      {
        src: stockDashboardImageThree,
        alt: "HISSA stock ranking visualization preview",
        caption: "Stock ranking and heatmap views",
      },
    ],
    overview: [
      "The dashboard turns stock-market data into practical views for accumulation, distribution, net value, and foreign/domestic investor flows. Users can narrow the analysis by date range and stock code while comparing ranked and aggregated results.",
      "The system combines a feature-oriented Laravel backend with a Vue 3 and TypeScript frontend so analytics endpoints, chart mappers, validation, and caching remain reusable across the dashboard.",
    ],
    responsibilities: [
      "Developed the full-stack dashboard using Laravel, PostgreSQL, Vue 3, and TypeScript.",
      "Built RESTful analytics APIs with date-range filtering, stock-code filtering, aggregation, ranking, pagination, and configurable analytical parameters.",
      "Structured backend modules with repositories, services, contracts, controllers, and domain-specific features.",
      "Implemented frontend data fetching and caching with TanStack Vue Query.",
      "Added API response validation with Zod and reusable chart mappers for consistent visualizations.",
      "Added API parameter validation, IP-based throttling, request/query performance logging, and automated testing.",
    ],
    features: [
      "Net value rankings and investor dominance ratios.",
      "Stock heatmaps and foreign-flow scatter plots.",
      "Cumulative net value and investor net-flow charts using Apache ECharts.",
      "Configurable analytical parameters for frontend visualization.",
      "Reusable feature modules and chart mappers for consistent data presentation.",
    ],
    results: [
      "Delivered a unified dashboard for accumulation, distribution, net value, and investor-flow analysis.",
      "Supported consistent analytics responses through filterable, aggregatable, ranked, and paginated API endpoints.",
      "Improved maintainability through feature-oriented backend boundaries and reusable frontend modules.",
      "Added automated coverage with Pest, Vitest, Vue Test Utils, and TypeScript type checking.",
    ],
    featured: true,
    testing: {
      scenario:
        "Automated API, frontend component, data-mapping, and TypeScript validation checks for analytics workflows.",
      environment: "Laravel, Pest, Vue 3, Vitest, Vue Test Utils, and TypeScript.",
      metrics: [
        "API parameter validation and throttling behavior covered.",
        "Frontend chart and response-mapping workflows covered.",
        "TypeScript type checking used to catch contract mismatches before release.",
      ],
    },
    links: [
      { label: "GitHub", href: "https://github.com/mustafamadjid/project-hissa-sandbox" },
    ],
  },
  {
    slug: "hissa-academy-learning-platform",
    name: "HISSA Academy Learning Platform",
    period: "Jun 2026 - Sep 2026",
    year: "2026",
    role: "Fullstack Engineer Intern",
    type: "Internship Project",
    status: "Completed",
    problem:
      "HISSA needed a learning platform for course delivery, learning progress, quizzes, and certificates while its frontend also consumed structured stock-market analytics from backend APIs.",
    description:
      "A Laravel and PostgreSQL learning platform with Vue.js and TypeScript interfaces for course management, dashboards, user workflows, certificates, and stock-market data visualization.",
    result:
      "Delivered consistent authenticated learning workflows and structured analytics responses while keeping public identifiers separate from internal database IDs.",
    stack: ["Laravel", "PostgreSQL", "Vue.js", "TypeScript", "Laravel Sanctum"],
    images: [
      {
        src: learningPlatformImageOne,
        alt: "HISSA Academy learning platform preview",
        caption: "Academy platform overview",
      },
      {
        src: learningPlatformImageTwo,
        alt: "HISSA Academy course management preview",
        caption: "Course management workflow",
      },
      {
        src: learningPlatformImageThree,
        alt: "HISSA Academy learning dashboard preview",
        caption: "Learning dashboard",
      },
      {
        src: learningPlatformImageFour,
        alt: "HISSA Academy stock analytics preview",
        caption: "Stock analytics interface",
      },
    ],
    overview: [
      "HISSA Academy combines learning content and investor workflows in one platform. The system supports authentication, course management, progress tracking, quizzes, certificate verification, dashboards, and stock-market data visualization.",
      "The backend uses Laravel and PostgreSQL with consistent resource endpoints, validation handling, pagination metadata, Laravel Sanctum authentication, and UUID-based public identifiers so internal database IDs are not exposed to clients.",
    ],
    responsibilities: [
      "Developed RESTful APIs and backend modules using Laravel and PostgreSQL for authentication, course management, learning progress, quizzes, and certificate verification.",
      "Built Vue.js and TypeScript interfaces for course management, dashboards, user workflows, and data visualization.",
      "Developed stock-market analytics APIs with server-side filtering, aggregation, grouping, and pagination.",
      "Designed consistent API responses, validation handling, pagination metadata, and Laravel Sanctum authentication flows.",
      "Used UUID-based public identifiers and structured resource endpoints to avoid exposing internal database IDs.",
    ],
    features: [
      "Course management, learning progress tracking, quizzes, and certificate verification.",
      "Authenticated dashboards and role-based user workflows.",
      "Server-side analytics filtering, aggregation, grouping, and pagination.",
      "Structured API response conventions and pagination metadata.",
      "UUID-based public identifiers for safer resource endpoints.",
    ],
    results: [
      "Delivered a unified Academy experience for course delivery and investor learning workflows.",
      "Transformed financial data into structured API responses ready for frontend visualization.",
      "Established consistent authentication, validation, pagination, and public-resource conventions.",
      "Kept client-facing identifiers separate from internal relational database IDs.",
    ],
    featured: true,
    decisions: [
      { decision: "Use Laravel for fullstack delivery.", reason: "Laravel provides built-in authentication, ORM, and templating for fast end-to-end feature delivery by a single developer.", tradeOff: "Monolithic architecture is harder to split later than a Go or Node.js API." },
      { decision: "Use Google OAuth for user authentication.", reason: "HISSA investors expect a secure and low-friction login experience.", tradeOff: "OAuth adds external dependency on Google\u0027s service availability." },
      { decision: "Separate Academy and Charts as modules within the same Laravel app.", reason: "Three-month internship timeline made separate services impractical.", tradeOff: "Module boundaries become important as features diverge." },
    ],
    challenges: [
      { challenge: "Keeping learning workflows and analytics endpoints consistent across multiple frontend screens.", solution: "Defined shared response conventions, validation rules, pagination metadata, and resource boundaries.", lesson: "Consistent contracts reduce frontend integration cost as feature areas grow." },
      { challenge: "Preventing internal database identifiers from leaking into public API URLs.", solution: "Used UUID-based public identifiers and structured resource endpoints.", lesson: "Public API identifiers should be designed as part of the domain boundary." },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/mustafamadjid/hissa-academy" },
    ],
  },
  {
    slug: "hissa-financial-data-engine",
    name: "HISSA Financial Data Engine",
    period: "Jun 2026 - Sep 2026",
    year: "2026",
    role: "Backend Engineer",
    type: "Financial Data Platform",
    status: "Completed",
    problem:
      "Financial filing data needs a traceable and reliable path from XBRL discovery and parsing through validation, normalization, and publication.",
    description:
      "An end-to-end financial data processing pipeline for XBRL and iXBRL filings, combining a Laravel backend with a Python Arelle parser and operational review workflows.",
    result:
      "Created a controlled pipeline for publishing normalized financial data with source lineage, immutable raw facts, quality gates, versioned contracts, and reprocessing support.",
    stack: [
      "Laravel",
      "PHP",
      "Python",
      "Arelle",
      "Redis",
      "MySQL",
      "Vue 3",
      "TypeScript",
      "Inertia.js",
      "JSON Schema",
      "OpenAPI",
    ],
    images: [
      {
        src: fdeImageOne,
        alt: "HISSA financial data engine dashboard preview",
        caption: "Financial data engine overview",
      },
      {
        src: fdeImageTwo,
        alt: "HISSA financial data engine pipeline preview",
        caption: "Pipeline monitoring workflow",
      },
      {
        src: fdeImageThree,
        alt: "HISSA financial data engine validation preview",
        caption: "Validation and review workflow",
      },
      {
        src: fdeImageFour,
        alt: "HISSA financial data engine concept mapping preview",
        caption: "Concept mapping and financial data review",
      },
    ],
    overview: [
      "The engine processes XBRL and iXBRL filings from discovery and artifact download to parsing, normalization, validation, and publishing. A Python-based Arelle parser extracts facts, contexts, units, dimensions, and filing metadata for the Laravel backend.",
      "The system treats data quality and lineage as first-class concerns: raw facts remain immutable, decimal precision and XBRL nil values are preserved, and normalized financial concepts are governed by versioned mapping rules and contracts.",
    ],
    responsibilities: [
      "Built filing discovery, artifact download, parsing, normalization, validation, and publishing stages.",
      "Integrated the Python Arelle parser with a Laravel backend to extract financial facts, contexts, units, dimensions, and filing metadata.",
      "Implemented asynchronous Laravel Queue and Redis processing with stage-specific jobs, retry policies, idempotency controls, correlation IDs, and reprocessing workflows.",
      "Designed canonical financial data models and versioned mapping rules for source-specific XBRL concepts.",
      "Defined versioned JSON Schema and OpenAPI contracts for parser outputs, raw facts, normalized facts, mapping rules, validation results, and published data.",
      "Developed operational dashboards for pipeline monitoring, financial-data review, concept mapping, validation results, retry, and controlled reprocessing.",
    ],
    features: [
      "Quality gates with VERIFIED, REVIEW_REQUIRED, and FAILED states before publishing.",
      "Source lineage and immutable raw fact storage for traceability.",
      "Preservation of decimal precision and XBRL nil values.",
      "Versioned mapping rules and canonical financial data models.",
      "Stage-specific asynchronous jobs with retry and idempotency controls.",
      "Operational monitoring, review, retry, and controlled reprocessing dashboards.",
    ],
    results: [
      "Delivered a traceable pipeline from filing discovery to published financial data.",
      "Separated raw source facts from normalized financial concepts without losing lineage.",
      "Prevented unverified data from being published through explicit quality gates.",
      "Established machine-readable JSON Schema and OpenAPI contracts for cross-service integration.",
    ],
    featured: true,
    links: [
      { label: "GitHub", href: "https://github.com/mustafamadjid/financial-data-engine" },
    ],
  },
];

export const education = [
  {
    school: "Institut Teknologi Sumatera",
    degree: "B.S. Informatics Engineering",
    period: "Aug 2022 – 2026",
    detail: "GPA: 3.60/4.00",
  },
  {
    school: "SMA IT Fitrah Insani Bandar Lampung",
    degree: "Natural Sciences",
    period: "May 2019 – May 2022",
    detail: "Score: 90, Best Student",
  },
];

export const languages = [
  "Indonesian: Native",
  "English: 540 ITERA English Proficiency Test",
];
