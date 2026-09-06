export interface ProjectItem {
  id: string;
  name: string;
  badge?: string;
  role: string;
  domain?: string;
  liveUrl?: string;
  githubUrl?: string;
  tagline: string;
  description: string;
  bulletPoints: string[];
  techStack: string[];
  status?: "Deployed Production" | "Currently Building" | "Completed";
  architectureHighlights?: {
    title: string;
    description: string;
  }[];
  isFlagship?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
  performance?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const RESUME_DATA = {
  personal: {
    name: "Preetham Gowda B",
    title: "Full Stack Web Developer",
    secondaryTitle: "AI/ML Engineer & Systems Builder",
    location: "Bangalore, India",
    phone: "+91 9535134351",
    email: "preethamgowdab07@gmail.com",
    availability: "Open to Software Engineering Opportunities",
    summary:
      "Full-stack developer who built and deployed SmartERP, a production multi-tenant SaaS ERP platform, alongside 8+ real-world web applications and systems. Experienced in Next.js, React.js, Node.js, Express.js, PostgreSQL, REST APIs, authentication, and cloud deployment, continuously building and implementing new real-world products.",
  },
  metrics: {
    projectsCount: "08+",
    projectsLabel: "Real-World Projects Built",
    projectsSubtext: "Across SaaS, AI, E-Commerce & Systems",
    statusText: "Currently building more real-world software",
    githubContributions: "1,427+ Contributions in the last year",
    githubReposCount: "8 Repositories",
  },
  links: {
    portfolio: "https://prozync-innovations.vercel.app",
    github: "https://github.com/PreethamGowda-B",
    linkedin: "https://www.linkedin.com/in/preetham-gowda-88393a391/",
    email: "mailto:preethamgowdab07@gmail.com",
    phone: "tel:+919535134351",
  },
  projects: [
    {
      id: "smarterp",
      name: "SmartERP",
      badge: "Flagship Production SaaS",
      status: "Deployed Production",
      role: "Architect & Lead Full Stack Developer",
      domain: "prozync.in",
      liveUrl: "https://prozync.in",
      githubUrl: "https://github.com/PreethamGowda-B/Smarterp-Frontend",
      tagline: "Production Multi-Tenant SaaS ERP Platform",
      description:
        "Architected and deployed an enterprise multi-tenant ERP platform supporting Owner, Employee, HR, Customer, and Super Admin portals with strict tenant isolation, real-time messaging, and an intelligent ReAct agent.",
      isFlagship: true,
      bulletPoints: [
        "Architected and deployed a full-stack multi-tenant ERP using Next.js 14, Node.js, Express.js, and Neon PostgreSQL, supporting Owner, Employee, HR, Customer, and Super Admin portals.",
        "Implemented tenant isolation and secure access using PostgreSQL RLS, AsyncLocalStorage, JWT, RBAC, and Google OAuth 2.0, with Redis/BullMQ for background processing and real-time messaging/notifications.",
        "Built a Google Gemini AI agent with a ReAct loop, domain-specific plugins, and prompt-injection defense, alongside production modules for jobs, attendance, payroll, inventory, CRM, subscriptions, and customer portal, with Razorpay, Cloudinary, Docker, and Render deployment.",
      ],
      techStack: [
        "Next.js 14",
        "React.js",
        "Node.js",
        "Express.js",
        "Neon PostgreSQL",
        "PostgreSQL RLS",
        "AsyncLocalStorage",
        "Redis",
        "BullMQ",
        "Google Gemini API",
        "Razorpay",
        "Google OAuth 2.0",
        "JWT",
        "Docker",
        "Render",
        "Cloudinary",
        "Firebase FCM",
      ],
      architectureHighlights: [
        {
          title: "Tenant Isolation Engine",
          description:
            "Enforces strict multi-tenancy at the database boundary via PostgreSQL Row-Level Security (RLS) combined with Node.js AsyncLocalStorage to prevent cross-tenant data leakage.",
        },
        {
          title: "Multi-Role RBAC Portals",
          description:
            "Granular role-based access authorization separating 5 independent organizational portals: Owner, Employee, HR, Customer, and Super Admin.",
        },
        {
          title: "ReAct AI Agent with Safeguards",
          description:
            "Google Gemini-powered autonomous agent operating inside an iterative ReAct reasoning loop, equipped with domain-specific plugins and prompt-injection defense.",
        },
        {
          title: "Asynchronous Job Pipeline",
          description:
            "Redis and BullMQ backing reliable background queues for asynchronous payroll computation, real-time events, messaging, and push notifications.",
        },
      ],
    },
    {
      id: "prozync-ai",
      name: "Prozync AI",
      badge: "AI Cybersecurity Platform",
      status: "Currently Building",
      role: "Architect & AI Systems Developer",
      githubUrl: "https://github.com/PreethamGowda-B/Prozync-AI",
      tagline: "AI-Powered Cybersecurity & Threat Investigation Platform",
      description:
        "Developing an AI-powered cybersecurity platform engineered to assist with security analysis, vulnerability assessment, threat investigation, intelligent detection workflows, and automated security operations.",
      isFlagship: false,
      bulletPoints: [
        "Architecting automated threat investigation pipelines and intelligent detection workflows using TypeScript and AI models.",
        "Implementing structured security assessment heuristics and automated remediation recommendations for infrastructure.",
      ],
      techStack: [
        "TypeScript",
        "Node.js",
        "AI Models",
        "Cybersecurity Workflows",
        "REST APIs",
      ],
    },
    {
      id: "kamadhenu",
      name: "Kamadhenu Honey Farms",
      badge: "E-Commerce Platform",
      status: "Deployed Production",
      role: "Full Stack Developer",
      domain: "kamadhenuhoneyfarms.in",
      liveUrl: "https://kamadhenuhoneyfarms.in",
      githubUrl: "https://github.com/PreethamGowda-B/KamadhenuFarms",
      tagline: "Responsive Digital Direct-to-Consumer E-Commerce Website",
      description:
        "Developed and deployed a responsive commercial e-commerce application featuring seamless product catalog browsing, customer ordering workflows, branding, and interactive customer inquiries.",
      isFlagship: false,
      bulletPoints: [
        "Developed and deployed a responsive e-commerce website with product catalog, customer ordering, branding, and customer interaction functionality.",
        "Crafted mobile-first layouts with smooth ordering flows and clear product showcase catalogs.",
      ],
      techStack: [
        "React.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST APIs",
        "Vercel",
      ],
    },
    {
      id: "master-timetable",
      name: "Master Timetable Portal",
      badge: "Academic Management System",
      status: "Completed",
      role: "Full Stack Developer Intern",
      githubUrl: "https://github.com/PreethamGowda-B/Master-Time-Table-Portal",
      tagline: "Centralized Academic Schedule Management Solution",
      description:
        "Engineered a web application dedicated to creating, managing, and accessing academic timetables with automated scheduling coordination and database integration.",
      isFlagship: false,
      bulletPoints: [
        "Developed the Master Timetable Portal, a web-based application for creating, managing, and accessing academic timetables.",
        "Contributed to frontend development, application functionality, debugging, and database integration for the project.",
      ],
      techStack: [
        "React.js",
        "JavaScript",
        "Node.js",
        "PostgreSQL",
        "REST APIs",
      ],
    },
  ] as ProjectItem[],
  verifiedRepositories: [
    {
      name: "SmartERP-FrontEnd",
      role: "Enterprise-grade Next.js frontend with Radix UI, Tailwind, and 5 RBAC portals",
      language: "TypeScript",
      stars: 1,
      link: "https://github.com/PreethamGowda-B/Smarterp-Frontend",
      category: "SaaS & Frontend",
    },
    {
      name: "SmartERP-BackEndEnd",
      role: "Production-ready Node.js/Express backend with PostgreSQL RLS, BullMQ & Gemini AI",
      language: "TypeScript",
      stars: 1,
      link: "https://github.com/PreethamGowda-B/Smarterp-BackendEnd",
      category: "Backend & Systems",
    },
    {
      name: "Prozync-AI",
      role: "AI-powered cybersecurity platform for threat analysis, detection & security ops",
      language: "TypeScript",
      stars: 1,
      link: "https://github.com/PreethamGowda-B/Prozync-AI",
      category: "AI & Cybersecurity",
    },
    {
      name: "ProzyncInnovations",
      role: "Official digital platform for Prozync Innovations technology company",
      language: "TypeScript",
      stars: 1,
      link: "https://github.com/PreethamGowda-B/ProzyncInnovations",
      category: "Corporate Platform",
    },
    {
      name: "Master-Time-Table-Portal",
      role: "Academic timetable management platform with relational database constraints",
      language: "JavaScript",
      stars: 2,
      link: "https://github.com/PreethamGowda-B/Master-Time-Table-Portal",
      category: "Academic Systems",
    },
    {
      name: "KamadhenuFarms",
      role: "Responsive e-commerce web platform for direct-to-consumer honey ordering",
      language: "TypeScript",
      stars: 1,
      link: "https://github.com/PreethamGowda-B/KamadhenuFarms",
      category: "E-Commerce",
    },
  ],
  skillsByCategory: [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
    },
    {
      category: "Frontend Development",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Radix UI", "Responsive Design"],
    },
    {
      category: "Backend & Systems",
      skills: ["Node.js", "Express.js", "REST APIs", "AsyncLocalStorage"],
    },
    {
      category: "Databases & Storage",
      skills: ["PostgreSQL", "Neon PostgreSQL", "PostgreSQL RLS"],
    },
    {
      category: "Auth & Security",
      skills: ["JWT", "Google OAuth 2.0", "Role-Based Access Control (RBAC)", "PostgreSQL RLS Isolation"],
    },
    {
      category: "Cloud, DevOps & Containers",
      skills: ["Docker", "Git", "GitHub", "Vercel", "Render", "Cloudinary"],
    },
    {
      category: "Infrastructure & Queues",
      skills: ["Redis", "BullMQ", "Firebase FCM"],
    },
    {
      category: "AI & Financial Tech",
      skills: ["Google Gemini API (ReAct Loop)", "Razorpay Payment Gateway"],
    },
  ] as SkillCategory[],
  experiences: [
    {
      company: "Syslog Technologies",
      role: "Software Development Intern",
      location: "Bangalore, India",
      period: "2025 – 2026",
      highlights: [
        "Completed structured Python training across two internship terms (400 hours total) during the Diploma program.",
        "Applied core programming and application-development concepts through project-based software engineering practice.",
      ],
    },
    {
      company: "VR Institute of Skill Development Centre",
      role: "Full Stack Development Intern",
      location: "Bangalore, India",
      period: "2025",
      highlights: [
        "Developed the Master Timetable Portal, a web-based application for creating, managing, and accessing academic timetables.",
        "Contributed to frontend development, application functionality, debugging, and relational database integration.",
      ],
    },
  ] as ExperienceItem[],
  education: [
    {
      degree: "B.Tech",
      field: "Artificial Intelligence & Machine Learning",
      institution: "East West Institute of Engineering",
      location: "Bangalore, India",
      period: "2026 – 2029",
      status: "Currently Pursuing",
    },
    {
      degree: "Diploma",
      field: "Computer Science & Engineering",
      institution: "East West Polytechnic",
      location: "Bangalore, India",
      period: "2023 – 2026",
      performance: "CGPA: 8.0/10 | Grade: 72.53%",
    },
  ] as EducationItem[],
  spokenLanguages: ["Kannada", "English", "Hindi"],
};
