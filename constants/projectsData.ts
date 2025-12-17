export type TProject = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  images: string[];
  coreFeatures: string[];
  coreTechnology: string[];
  challengesFaced: string[];
  futurePlans: string[];
  versionInfo: {
    [key: string]: string;
  };
  liveLink: string;
  repositoryLink: string;
};
export const projects: TProject[] = [
  {
    id: "1",
    title: "Company Portfolio Website",
    shortDescription:
      "A modern, high-performance company portfolio website built with Next.js, showcasing services, products, and brand identity with smooth animations and scalable architecture.",
    description:
      "This company portfolio website is built using the latest Next.js App Router and modern frontend tooling. It focuses on performance, scalability, and user experience, featuring responsive layouts, smooth animations, theme switching, rich UI components, and AI-ready integrations. The project follows best practices for code quality, linting, formatting, and maintainability, making it suitable for professional company branding and long-term growth.",
    images: [
      "/portfolio/portfolio-1.png",
      "/portfolio/portfolio-2.png",
      "/portfolio/portfolio-3.png",
    ],
    coreFeatures: [
      "Modern company portfolio with responsive design",
      "Next.js App Router with Turbopack for fast development",
      "Reusable UI components using Radix UI and Tailwind CSS",
      "Smooth animations and transitions with Framer Motion",
      "Dark & light theme support using next-themes",
      "Form handling and validation with React Hook Form and Zod",
      "AI-ready architecture with OpenAI, Google AI, and OpenRouter SDKs",
      "Interactive components like carousels, dialogs, dropdowns, and accordions",
      "SEO-friendly and performance-optimized pages",
    ],
    coreTechnology: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "AI SDK (OpenAI, Google AI, OpenRouter)",
      "Axios",
      "Lucide & Tabler Icons",
      "Embla Carousel",
    ],
    challengesFaced: [
      "Maintaining performance with complex animations",
      "Designing reusable and scalable UI components",
      "Configuring strict linting, formatting, and Git hooks",
      "Integrating AI SDKs in a future-proof architecture",
    ],
    futurePlans: [
      "Integrate CMS for dynamic content management",
      "Add multilingual support",
      "Enhance AI-powered features for user interaction",
      "Implement advanced analytics and tracking",
    ],
    versionInfo: {
      NextJS: "15.4.4",
      React: "19.1.0",
      TypeScript: "^5",
      TailwindCSS: "^4",
      FramerMotion: "^12.23.12",
      Zod: "^4.1.3",
      "React Hook Form": "^7.62.0",
      OpenAI: "^5.11.0",
    },
    liveLink: "https://company-portfolio-website-liard.vercel.app",
    repositoryLink: "https://github.com/morz-mamun/company-portfolio-website",
  },

  {
    id: "2",
    title: "Delta Translator (Translator)",
    shortDescription:
      "Delta Translator is a user-friendly platform that offers fast, accessible, and engaging translation services to enhance cross-language communication.",
    description:
      "Delta Translator aims to be a user-friendly language translation platform offering seamless translation services while prioritizing accessibility, convenience, and user engagement. It strives to enhance cross-linguistic communication and empower users with efficient translation capabilities.",
    images: ["/delta/delta-1.png", "/delta/delta-2.png", "/delta/delta-3.png"],
    coreFeatures: [
      "Translate text from one language to another",
      "Speech-to-Text: Translate spoken words through speech recognition.",
      "Text-to-Speech: Listen to translated text for enhanced accessibility.",
      "Copy to Clipboard: Easily copy translated text for sharing or reference.",
      "Reset Button: Clear all input fields with a single click.",
      "Downloadable Translations: Save translated text for offline use.",
      "Email JS Integration: Streamline contact form submissions with email forwarding.",
    ],
    coreTechnology: [
      "React",
      "Express",
      "MongoDB",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
      "React Hook Form",
      "TanStack Query",
      "MUI",
      "Ant Design",
      "Axios",
      "Firebase",
      "EmailJS",
      "Charting Libraries (Recharts, MUI X Charts)",
      "PDF Handling (react-pdf, pdfjs)",
      "Speech Recognition (react-speech-kit, react-speech-recognition)",
    ],
    challengesFaced: [
      "Integrating and handling errors from the translation API",
      "Optimizing speech recognition and translation timing",
      "Collaborating smoothly in a multi-developer team",
      "Ensuring data consistency across user roles",
    ],
    futurePlans: [
      "Improve language selection section for user-friendliness and robustness.",
      "Add beautiful background animations for a more immersive experience.",
      "Integrate notifications for real-time updates.",
    ],
    versionInfo: {
      React: "^18.2.0",
      express: "^4.18.2",
      mongodb: "^6.3.0",
      "Tailwind CSS": "^3.4.1",
      "Redux Toolkit": "^2.1.0",
      "React Hook Form": "^7.49.3",
      Axios: "^1.6.6",
      Firebase: "^10.7.1",
      EmailJS: "^4.0.3",
      "@emailjs/browser": "^4.1.0",
      "Ant Design": "^5.14.1",
      Recharts: "^2.12.1",
      "React PDF": "^7.7.0",
      "React Speech Kit": "^3.0.1",
      "React Speech Recognition": "^3.10.0",
    },
    liveLink: "https://delta-translator-ac8d6.web.app",
    repositoryLink: "https://github.com/deltatranslator",
  },
  {
    id: "3",
    title: "Morze (RealState Platform)",
    shortDescription:
      "MorZE is a Real Estate Website. Browse through a diverse range of properties, from cozy apartments to spacious homes you can buy, sell.",
    description:
      "MorZE is a Real Estate Website. Browse through a diverse range of properties, from cozy apartments to spacious homes you can buy, sell.",
    images: ["/morze/ss1.png", "/morze/ss1.png", "/morze/ss1.png"],
    coreFeatures: [
      "Secure user registration and login with JWT",
      "When user login User Can offer request the Agent that he want to buy. Agent can accept or reject the request.",
      "Role-based dashboards for customers and administrators",
      "Full CRUD operations for adding, editing, and deleting products",
      "Stripe payment integration with real-time stock checks",
      "Order tracking and analytics in admin dashboard",
    ],
    coreTechnology: [
      "React",
      "Express",
      "React Router",
      "Tailwind CSS",
      "MongoDB",
      "JWT",
      "Stripe API",
      "Axios",
      "Firebase",
      "EmailJS",
      "@emailjs/browser",
    ],
    challengesFaced: [
      "Implementing secure authentication and role-based access",
      "Handling order tracking and analytics in admin dashboard",
      "Designing comprehensive admin analytics dashboard",
    ],
    futurePlans: [
      "Integrate Google Maps for property location display",
      "Add a contact form for customer inquiries",
      "Integrate Notifications API for real-time notifications for order updates",
    ],
    versionInfo: {
      React: "^18.2.0",
      "React Router": "^6.20.0",
      "Tailwind CSS": "^3.3.5",
      express: "^4.18.2",
      mongodb: "^6.3.0",
      JWT: "^9.0.2",
      "Stripe API": "^2.4.0",
      Axios: "^1.6.2",
      Firebase: "^10.6.0",
      "@emailjs/browser": "^3.11.0",
    },
    liveLink: "https://morze-bb5a5.web.app",
    repositoryLink: "https://github.com/morz-mamun/Real-Estate-Project-Server",
  },
  // {
  //   id: "3",
  //   title: "Dream Job (Job Portal)",
  //   shortDescription:
  //     "Find The Right Jobs. The ultimate platform where job seekers and employers seamlessly connect and Discover tailored opportunities, showcase your talent, and take the next step.",
  //   description:
  //     "Find The Right Jobs – The ultimate platform where job seekers and employers seamlessly connect. Discover tailored opportunities, showcase your talent, and take the next step in your career journey. For employers, access a pool of qualified candidates and streamline your hiring process with ease. Empowering futures, one connection at a time.",
  //   images: ["/morze/ss4.png", "/morze/ss4.png", "/morze/ss4.png"],
  //   coreFeatures: [
  //     "Users can browse jobs by category on the home page",
  //     "Login or registration is required to bid on a job",
  //     "Authenticated users can access private routes and view private details",
  //     "Logged-in users can post jobs by category to hire employees",
  //     "Users can view, update, and delete the jobs they have posted",
  //   ],
  //   coreTechnology: [
  //     "React",
  //     "Express",
  //     "React Router",
  //     "Tailwind CSS",
  //     "MongoDB",
  //     "Axios",
  //     "Firebase",
  //   ],
  //   challengesFaced: [
  //     "Filtering jobs by category",
  //     "Implementing user authentication and authorization",
  //   ],
  //   futurePlans: [
  //     "Integrate with external APIs for real-time data",
  //     "Add a contact form for customer inquiries",
  //     "Integrate Notifications API for real-time notifications for job updates",
  //   ],
  //   versionInfo: {
  //     React: "^18.2.0",
  //     "React Router": "^6.20.0",
  //     "Tailwind CSS": "^3.3.5",
  //     express: "^4.18.2",
  //     mongodb: "^6.3.0",
  //     Axios: "^1.6.2",
  //     Firebase: "^10.6.0",
  //   },
  //   liveLink: "https://dream-job-finder.web.app",
  //   repositoryLink: "https://github.com/morz-mamun/Dream-Job-Finder-Client",
  // },
  // {
  //   id: "4",
  //   title: "Turborepo Starter Template with pnpm",
  //   shortDescription:
  //     "Monorepo starter template configured with pnpm and Turborepo, preconfigured with ESLint, TypeScript, Prettier, and shadcn/ui components.",
  //   description:
  //     "A Turborepo starter template for monorepo workflows using pnpm as the package manager and Turborepo for task orchestration. It includes modern tooling like ESLint, TypeScript, Prettier, and a sample shadcn/ui component library, demonstrating apps (Express REST API, Next.js web, React Router web) and shared packages.",
  //   images: ["/turborepo/git.png"],
  //   coreFeatures: [
  //     "Monorepo structure with apps and packages directories",
  //     "Preconfigured ESLint, TypeScript, and Prettier configurations",
  //     "shadcn/ui component library package",
  //     "pnpm workspace integration",
  //     "Turborepo task orchestration with caching and parallel execution",
  //   ],
  //   coreTechnology: [
  //     "pnpm",
  //     "Turborepo",
  //     "TypeScript",
  //     "ESLint",
  //     "Prettier",
  //     "shadcn/ui",
  //     "Express.js",
  //     "Next.js",
  //     "React Router v7",
  //   ],
  //   challengesFaced: [
  //     "Learning pnpm workspace commands",
  //     "Configuring Turborepo tasks and caching",
  //     "Maintaining consistent configs across packages",
  //     "Integrating shadcn/ui with multiple frameworks",
  //   ],
  //   futurePlans: [
  //     "Integrate CI pipelines for build caching",
  //     "Add automated code generation tasks",
  //     "Enhance custom ESLint rules",
  //   ],
  //   versionInfo: {
  //     pnpm: "10.4.1",
  //     turbo: "1.9.4",
  //     TypeScript: "5.7.3",
  //     ESLint: "^9.18.0",
  //     Prettier: "^3.4.2",
  //   },
  //   repositoryLink: "https://github.com/shahadathhs/turborepo-starter",
  // },
];
