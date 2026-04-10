import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Cloud, 
  Terminal,
  Cpu,
  Layers,
  Box,
  Zap,
  Shield,
  Search,
  Workflow,
  BarChart3,
  Truck,
  ShoppingCart,
  Smartphone,
  Wine,
  Users,
  BookOpen
} from 'lucide-react';

export const personalInfo = {
  name: "Tejas Malokar",
  role: "Full Stack Java Developer",
  experience: "1.7+ Years",
  about: "Engineer focused on building high-availability enterprise systems and modern SaaS architectures. Specialized in Java, Spring Boot Microservices, and high-performance frontend engineering.",
  email: "tejasmalokar.dev@gmail.com",
  github: "https://github.com/tejas-malokar",
  linkedin: "https://linkedin.com/in/tejas-malokar",
  location: "India"
};

export const skills = [
  {
    category: "Backend Architecture",
    icon: Server,
    items: ["Java", "Spring Boot", "Microservices", "REST APIs", "Spring Data JPA", "Hibernate", "JDBC", "Maven", "Spring Framework"]
  },
  {
    category: "Frontend & Mobile",
    icon: Layout,
    items: ["React", "Angular", "Ionic Framework", "TypeScript", "JavaScript", "HTML/CSS"]
  },
  {
    category: "DevOps & Infrastructure",
    icon: Cloud,
    items: ["Docker", "Jenkins", "AWS (EC2, S3)", "Git", "GitHub", "GitLab", "Agile"]
  },
  {
    category: "Data & Messaging",
    icon: Database,
    items: ["Oracle SQL", "RabbitMQ", "ELK Stack", "Redis", "MySQL"]
  }
];

export const projects = [
  {
    id: "tss",
    title: "Transaction Screening System",
    subtitle: "Banking Compliance Platform",
    description: "A high-performance system for regulatory compliance and real-time financial transaction monitoring.",
    problem: "Regulatory requirements necessitated real-time, zero-latency validation of millions of transactions against global sanctions lists.",
    solution: "Designed a distributed microservices architecture utilizing Spring Boot and Oracle, implementing a high-throughput Maker-Checker workflow.",
    architecture: "Event-driven microservices with RabbitMQ for asynchronous processing and secure API Gateway for routing.",
    tech: ["Java", "Spring Boot", "Oracle", "RabbitMQ", "Microservices"],
    impact: "Automated 75% of manual compliance reviews and achieved sub-second validation latency.",
    features: ["Maker-Checker approval", "Automated transaction validation", "Role-based review", "Secure backend"],
    icon: Shield,
    type: "Enterprise Backend"
  },
  {
    id: "lcms",
    title: "Legal Case Management",
    subtitle: "Fraud Investigation Workflow",
    description: "Enterprise platform for managing fraud investigation workflows and secure legal document processing.",
    problem: "Manual document handling and fragmented investigation tracking led to significant operational delays and data security risks.",
    solution: "Developed a secure document transfer protocol with automatic retry logic and integrated case tracking workflows.",
    architecture: "Service-oriented architecture with secure S3 storage and encrypted document transmission.",
    tech: ["Spring Boot", "MySQL", "REST APIs", "AWS S3"],
    impact: "Reduced case processing time by 40% and eliminated manual document handling errors.",
    features: ["Secure document transfer", "Investigation tracking", "Automated notifications", "Workflow automation"],
    icon: Workflow,
    type: "Enterprise System"
  },
  {
    id: "rsa",
    title: "Retail Sales Analytics",
    subtitle: "Cross-platform Mobile App",
    description: "Real-time retail analytics application for tracking stock levels, sales, and profit metrics.",
    problem: "Retail managers lacked instant visibility into inventory and profit trends across multiple store locations.",
    solution: "Built a cross-platform mobile application using Ionic and React, powered by a Spring Boot analytics engine.",
    architecture: "Mobile-first frontend with a centralized analytics API and real-time data synchronization.",
    tech: ["Ionic", "React", "Spring Boot", "MySQL", "Chart.js"],
    impact: "Provided real-time visibility to 50+ store managers, reducing manual reporting overhead by 60%.",
    features: ["Live dashboards", "Inventory tracking", "Profit visualization", "Exportable reports"],
    icon: BarChart3,
    type: "Full Stack Mobile"
  },
  {
    id: "ftvm",
    title: "Film and TV Minibus Rental",
    subtitle: "UK Transport Logistics Platform",
    description: "A specialized vehicle rental platform for the UK film and television industry, providing reliable transport for crews, talent, and equipment.",
    problem: "Production managers needed a fast, reliable, and SEO-optimized way to book specialized minibus transport for film crews and camera equipment across London and the UK.",
    solution: "Developed a high-conversion platform using WordPress with clear service categorization, simplified booking CTAs, and a mobile-first design for on-site production leads.",
    architecture: "WordPress-based CMS with custom booking integration and SEO optimization for the UK market.",
    tech: ["WordPress", "PHP", "MySQL", "SEO", "Responsive Design"],
    impact: "Established a leading online presence for a specialized transport niche, supporting logistics for major TV and film productions in the UK.",
    features: ["Crew & Talent Transport", "Equipment Luggage Space", "24/7 Booking Support", "UK-wide Coverage"],
    icon: Truck,
    link: "https://filmandtvminibus.tv/",
    type: "Web Platform"
  },
  {
    id: "lc",
    title: "Liquor Counter",
    subtitle: "Inventory & Compliance System",
    description: "Enterprise management system for liquor store inventory, sales, and state-wise regulatory reporting.",
    problem: "Need for a modular system to handle diverse state compliance (TSBCL, KSBCL, APBCL) and real-time stock reconciliation.",
    solution: "Built a robust Java/Spring Boot backend with Angular frontend to automate reporting and inventory tracking.",
    architecture: "Modular service architecture with real-time stock sync and automated compliance reporting.",
    tech: ["Java", "Spring Boot", "Angular", "MySQL", "Chart.js"],
    impact: "Significantly reduced manual reconciliation and improved billing accuracy for multi-state operations.",
    features: ["Multi-state compliance", "Real-time stock updates", "Dynamic reporting", "Automated reconciliation"],
    icon: ShoppingCart,
    link: "https://apps.zambientsystems.com/lc",
    type: "Enterprise System"
  },
  {
    id: "lcpos",
    title: "Liquor Store POS",
    subtitle: "High-Speed Billing Terminal",
    description: "Real-time Point-of-Sale system for high-volume retail billing, shift management, and inventory tracking.",
    problem: "Slow checkout speeds and stock mismatches during high-traffic shifts in retail liquor stores.",
    solution: "Optimized transactional flows and implemented barcode-based billing for maximum throughput.",
    architecture: "High-concurrency POS architecture with immediate inventory synchronization.",
    tech: ["Java", "Spring Boot", "Angular", "MySQL"],
    impact: "Drastically improved checkout speed and eliminated stock mismatches during peak hours.",
    features: ["Barcode billing", "Shift management", "Inventory sync", "High-speed checkout"],
    icon: Zap,
    type: "Retail POS"
  },
  {
    id: "lcma",
    title: "Liquor Counter Mobile",
    subtitle: "Real-time Store Analytics",
    description: "Cross-platform mobile application for on-the-go store management, inventory tracking, and profit analysis.",
    problem: "Store owners lacked real-time visibility into sales and stock while away from the physical store.",
    solution: "Developed a mobile-first dashboard with real-time sync and data visualization using Ionic.",
    architecture: "Mobile-first frontend with a RESTful analytics API and real-time push notifications.",
    tech: ["Ionic", "Spring Boot", "Java", "MySQL", "Chart.js"],
    impact: "Reduced manual reporting efforts by 60% and provided instant visibility to store owners.",
    features: ["On-the-go sales tracking", "Real-time dashboards", "Profit/Loss analysis", "Push notifications"],
    icon: Smartphone,
    link: "https://play.google.com/work/apps/details?id=io.ionic.liquorCounter&hl=en_IN",
    type: "Mobile Platform"
  },
  {
    id: "bc",
    title: "Bar Counter",
    subtitle: "Peg-wise Inventory Control",
    description: "Specialized system for managing bar operations, focusing on peg-wise sales, real-time inventory, and billing.",
    problem: "Difficulty in tracking precise liquid inventory (30ml, 60ml, 90ml) and high rates of stock discrepancies in bars.",
    solution: "Implemented a unit-wise billing system with live stock tracking and shift-based transparency dashboards.",
    architecture: "Precision-focused inventory system with real-time volumetric tracking.",
    tech: ["Java", "Spring Boot", "Angular", "MySQL"],
    impact: "Improved bar operational efficiency by 45% and virtually eliminated stock discrepancies.",
    features: ["Unit-wise billing", "Live dashboards", "Shift operations", "Stock transparency"],
    icon: Wine,
    link: "https://zambient.in/lcbar",
    type: "Bar Management"
  },
  {
    id: "stewards",
    title: "Stewards Mobile App",
    subtitle: "Restaurant Service Optimizer",
    description: "Waitstaff-focused mobile app for efficient order taking, table management, and KOT synchronization.",
    problem: "Manual order taking led to errors, slow service, and poor communication between waitstaff and the kitchen.",
    solution: "Built a high-performance mobile app for instant order transmission and real-time table status updates.",
    architecture: "Real-time mobile ordering system with socket-based kitchen synchronization.",
    tech: ["Ionic", "Spring Boot", "Java", "MySQL"],
    impact: "Boosted service speed significantly and minimized order errors in high-traffic restaurants.",
    features: ["Real-time table management", "Instant order sync", "Seamless mobile UX", "KOT automation"],
    icon: Users,
    type: "Hospitality App"
  },
  {
    id: "lb",
    title: "LearnerBits",
    subtitle: "Educational Tech Hub",
    description: "Comprehensive platform for curated tech news, programming notes, and learning resources for engineers.",
    problem: "Fragmented resources for students seeking quality programming notes, tech updates, and career opportunities.",
    solution: "Designed a centralized hub for educational content, career updates, and curated technology insights.",
    architecture: "WordPress-based content platform with optimized SEO and user-friendly navigation.",
    tech: ["WordPress", "PHP", "MySQL", "SEO", "UI/UX"],
    impact: "Supporting thousands of students and professionals in their upskilling and career growth journeys.",
    features: ["Curated tech news", "Programming notes", "Job/Internship updates", "Learning resources"],
    icon: BookOpen,
    link: "https://learnerbits.com",
    type: "EdTech Platform"
  }
];

export const experience = [
  {
    company: "Eidiko Systems Integrator Pvt Ltd",
    role: "Software Engineer",
    period: "July 2024 — Present",
    client: "Confidential Banking Client",
    description: "Architecting and implementing high-availability banking systems and regulatory compliance platforms.",
    highlights: [
      "Optimized microservices performance by 30% through caching and query tuning.",
      "Led the development of a critical Maker-Checker workflow for financial audits.",
      "Implemented secure OAuth2/JWT authentication across 10+ microservices."
    ]
  },
  {
    company: "Soft2Technologies",
    role: "Software Engineer Trainee",
    period: "Oct 2022 — April 2023",
    description: "Contributed to retail analytics and enterprise workflow applications during intensive training and initial project phases.",
    highlights: [
      "Developed a cross-platform mobile app using Ionic and React.",
      "Built and maintained 20+ REST API endpoints for retail reporting.",
      "Integrated ELK stack for centralized logging and monitoring."
    ]
  }
];

export const githubStats = {
  username: "tejas-malokar",
  theme: "dark",
  hide_border: true,
  include_all_commits: true,
  count_private: true
};
