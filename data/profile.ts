export const profile = {
  name: "Soham Ghosal",
  title: "Java Full Stack Developer | Agentic AI Engineer",
  location: "Kolkata, India",
  email: "sohamghosal90@gmail.com",
  phone: "+91 98749 69948",
  linkedin: "https://linkedin.com/in/soham-ghosal-889a13172",
  github: "https://github.com/sohamGhost",
  avatar: "/30C5B487-416E-42AF-8BD9-7B76BE2DE79B.png",
  resume: "/Soham_Ghosal_Resume_Generic.pdf",
  bio: `I'm a Java Full Stack Developer and Agentic AI Engineer with ~4 years of experience building production-grade, cloud-native systems for global fintech clients. I work across the full stack — from Spring Boot microservices and event-driven Kafka architecture to Angular frontends and GenAI pipelines using LangChain, RAG, and the Anthropic Claude API. I've shipped systems that process millions of financial transactions, deployed AI assistants that went from POC to enterprise sign-off, and built serverless agents that run entirely without human intervention. I enjoy solving hard problems at the intersection of backend engineering and intelligent automation. Feel free to connect with me through my socials.`,
  taglines: [
    "Java Full Stack Developer",
    "Agentic AI Engineer",
    "Spring Boot · Kafka · AWS",
    "LangChain · RAG · Claude API",
  ],
};

export const heroStats = [
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "Performance Boost Delivered", value: 80, suffix: "%" },
  { label: "Production AI & Backend Systems", value: 5, suffix: "+" },
  { label: "Enterprise Clients", value: 3, suffix: "" },
];

export type Experience = {
  company: string;
  period: string;
  type: string;
  clients: {
    name: string;
    period: string;
    bullets: string[];
  }[];
};

export const experience: Experience[] = [
  {
    company: "Cognizant Technology Solutions",
    period: "July 2022 – Present",
    type: "Full Time · Kolkata, India",
    clients: [
      {
        name: "Worldpay",
        period: "Oct 2024 – Present",
        bullets: [
          "Major contributor to SURF (Standardized Unified Reconciliation File) — merchant reconciliation product consolidating 100+ financial accounting fields across payments, disputes, fees, and settlements",
          "Designed multi-layer aggregation architecture reducing report generation by 80% (4–5 min → <1 min on million-row IBM DB2 datasets) — recognized as internal innovation by senior leadership",
          "Maintained IQ Merchant Portal and SSR ecosystem reliability: owned incident analysis and production troubleshooting using Splunk, Checkmarx SAST, and BlackDuck SCA; collaborated with merchant stakeholders and product owners to resolve client-impacting issues",
          "Built Kafka-based SSO Identity Management: Java Spring Boot producer/consumer classes, OAuth2/OIDC, consumer group offset management, Kafka monitoring → near-zero manual provisioning",
          "Built production RAG assistant (FastAPI + ChromaDB + LangChain + Claude API): 15 min → 30 sec query resolution, adopted by team, approved by client senior leadership for enterprise rollout",
          "PCI-DSS compliant CI/CD pipeline with SonarQube code quality gates",
        ],
      },
      {
        name: "Fiserv",
        period: "Jul 2022 – Sept 2024",
        bullets: [
          "Payments360 (P2P/P2M digital payments): refactored monolith → independently deployable Spring Boot microservices; built Angular UI covering merchant onboarding, billing, split payment flows, i18n (EN-US/ES-PR), Zelle-type digital wallet integration",
          "Containerized with Docker · Spring Security OAuth2",
          "Led 10-member AccuRev → GitHub migration including branch strategy and PR workflows",
        ],
      },
    ],
  },
];

export type Project = {
  title: string;
  featured: boolean;
  tags: string[];
  impact?: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "RAG-Based Merchant Reporting Assistant",
    featured: true,
    tags: ["Python", "FastAPI", "ChromaDB", "LangChain", "Claude API", "LangGraph", "Playwright", "AWS"],
    impact: "15 min → <30 sec query resolution",
    description:
      "Domain-specific RAG assistant for Worldpay's merchant reporting platform. Full pipeline from Playwright-based ingestion, recursive chunking, vector embedding to semantic retrieval and Claude LLM grounded response. Answers SURF and SSR report field questions from Worldpay payment data models. Adopted by engineering team, approved by client senior leadership for enterprise production deployment.",
  },
  {
    title: "AWS Lambda Validation Agent",
    featured: true,
    tags: ["Python", "LangChain", "GPT-4", "AWS Lambda", "SQS", "S3", "Agentic AI"],
    description:
      "Serverless event-driven AI agent. SQS message triggers Lambda; LangChain ReAct agent autonomously orchestrates multi-step rule checks and data verification via tool-calling; audit results stored in S3; DLQ for failed messages. Zero manual intervention, scales to zero cost when idle.",
  },
  {
    title: "Figma MCP Integration — UI Migration",
    featured: false,
    tags: ["Claude API", "MCP", "Figma", "Angular", "Rails", "Groovy"],
    description:
      "Leveraged Figma MCP with Claude to auto-generate pixel-perfect Angular components directly from wireframes with guardrails. Automated MPM merchant portal migration from Rails/Groovy → Angular. Eliminated manual design-to-code translation cycle.",
  },
  {
    title: "Event-Driven Booking Agent",
    featured: false,
    tags: ["Spring Boot", "Angular", "AWS Lambda", "SQS", "EC2", "S3"],
    description:
      "Full-stack cloud-native application. Spring Boot RESTful API on EC2, Angular frontend on S3, extended with Lambda + SQS booking agent: asynchronous request processing, seat validation, automated confirmation. Zero manual intervention end-to-end.",
  },
  {
    title: "N7 Banking App",
    featured: false,
    tags: ["PLACEHOLDER_TECH_STACK_N7"],
    description: "PLACEHOLDER_DESC_N7",
  },
];

export const skills: { category: string; color: "accent" | "accent2" | "success"; items: string[] }[] = [
  { category: "Languages", color: "accent", items: ["Java 8/11", "Python", "TypeScript", "JavaScript", "SQL", "PL/SQL", "C"] },
  {
    category: "Backend",
    color: "accent",
    items: [
      "Spring Boot",
      "Spring Framework",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Microservices",
      "Node.js",
      "Express.js",
      "FastAPI",
      "JUnit",
      "TestNG",
      "Mockito",
    ],
  },
  { category: "Frontend", color: "accent", items: ["Angular", "HTML5", "CSS3", "jQuery", "Responsive Design"] },
  { category: "Messaging", color: "accent", items: ["Apache Kafka", "AWS SQS", "Event-Driven Architecture"] },
  { category: "Databases", color: "accent", items: ["IBM DB2", "PostgreSQL", "MySQL", "Oracle", "ChromaDB", "MongoDB"] },
  {
    category: "Cloud & DevOps",
    color: "accent",
    items: ["AWS Lambda", "AWS SQS", "AWS S3", "AWS EC2", "AWS EKS", "AWS IAM", "Docker", "Kubernetes", "Jenkins CI/CD", "GitHub", "Splunk", "Linux", "Jira"],
  },
  {
    category: "AI & GenAI",
    color: "accent2",
    items: ["LangChain", "LangGraph", "RAG Pipelines", "LLM Integration", "Vector Databases", "MCP", "Claude API", "GitHub Copilot", "Agentic Workflows"],
  },
  {
    category: "Security",
    color: "success",
    items: ["OAuth2", "OIDC", "PCI-DSS", "Checkmarx", "BlackDuck", "SonarQube", "Spring Security"],
  },
  {
    category: "Domain",
    color: "success",
    items: ["FinTech", "Payment Processing", "Merchant Reporting", "Settlement & Reconciliation", "Incident Analysis", "Agile/Scrum"],
  },
];

export const education = {
  degree: "B.Tech — Computer Science & Engineering",
  school: "RCCIIT, Kolkata",
  period: "2018–2022",
  cgpa: "9.16",
};

export const certifications = [
  { name: "Claude Code Architect", issuer: "Anthropic" },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft" },
  { name: "MTA: Security Fundamentals", issuer: "Microsoft" },
  { name: "NPTEL: Ethical Hacking", issuer: "NPTEL" },
  { name: "GitHub Copilot (Beginner to Pro)", issuer: "Udemy" },
];
