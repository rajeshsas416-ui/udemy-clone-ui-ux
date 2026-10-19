export const SAMPLE_VIDEOS = {
  intro: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  dev: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  ai: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  cloud: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  ui: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
};

export const COURSES = [
  {
    id: "web-dev-bootcamp",
    title: "The Complete 2026 Web Development Bootcamp",
    headline: "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, Next.js, and Generative AI!",
    rating: 4.8,
    ratingCount: 382410,
    studentsCount: 1240500,
    instructor: {
      name: "Dr. Angela Yu",
      role: "Lead Instructor & Medical Doctor turned Lead Developer",
      rating: 4.8,
      reviews: "750,000+",
      students: "2,500,000+",
      courses: 14,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
      bio: "Angela is the lead instructor at the London App Brewery. She has helped over 2 million students learn to code and transition into high-paying engineering roles."
    },
    lastUpdated: "10/2026",
    language: "English",
    subtitles: ["English [Auto]", "Spanish [Auto]", "German", "Hindi", "French"],
    price: 389,
    originalPrice: 3499,
    discountPercent: 89,
    badge: "Bestseller",
    category: "Development",
    subCategory: "Web Development",
    thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
    previewVideo: SAMPLE_VIDEOS.intro,
    whatYouWillLearn: [
      "Build 16 real-world web development projects for your professional portfolio",
      "Master modern frontend with React 19, Next.js 15, and Tailwind CSS",
      "Build high-performance REST and GraphQL APIs with Node.js and Express",
      "Implement robust authentication with JWT, OAuth2, and NextAuth",
      "Integrate OpenAI and Gemini LLM APIs directly into your web applications",
      "Deploy scalable production applications to Vercel, AWS, and Docker"
    ],
    requirements: [
      "No coding experience required - I'll teach you everything from ground zero",
      "A computer with Windows, Mac, or Linux and an internet connection",
      "No paid software needed; all tools used are free and open source"
    ],
    description: `Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer.

With over 60 hours of HD video content, comprehensive interactive coding exercises, and real-world portfolio capstones, this curriculum is vetted by industry leaders.

You will go from absolute zero to building complex, high-traffic web applications with React, Node.js, and modern AI toolchains.`,
    curriculum: [
      {
        sectionId: "s1",
        title: "Section 1: Frontend Foundations - Modern HTML5 & CSS3",
        lecturesCount: 4,
        totalDuration: "42m",
        lectures: [
          { id: "l1", title: "Course Welcome & How to Get Help", duration: "05:12", preview: true, videoUrl: SAMPLE_VIDEOS.intro },
          { id: "l2", title: "HTML5 Semantic Tags & Modern Document Structure", duration: "12:45", preview: true, videoUrl: SAMPLE_VIDEOS.dev },
          { id: "l3", title: "CSS3 Flexbox and Grid Layout Mastery", duration: "15:20", preview: false, videoUrl: SAMPLE_VIDEOS.dev },
          { id: "l4", title: "Project 1: Responsive Agency Landing Page", duration: "08:50", preview: false, videoUrl: SAMPLE_VIDEOS.dev }
        ]
      },
      {
        sectionId: "s2",
        title: "Section 2: JavaScript ES6+ & Asynchronous Programming",
        lecturesCount: 4,
        totalDuration: "1h 15m",
        lectures: [
          { id: "l5", title: "Arrow Functions, Destructuring & Spread Operators", duration: "18:10", preview: true, videoUrl: SAMPLE_VIDEOS.dev },
          { id: "l6", title: "Promises, Async/Await & Handling Errors like a Pro", duration: "22:30", preview: false, videoUrl: SAMPLE_VIDEOS.dev },
          { id: "l7", title: "The Fetch API & Consuming Real-World REST Endpoints", duration: "19:40", preview: false, videoUrl: SAMPLE_VIDEOS.dev },
          { id: "l8", title: "Project 2: Real-time Weather & Stock Ticker App", duration: "14:40", preview: false, videoUrl: SAMPLE_VIDEOS.dev }
        ]
      },
      {
        sectionId: "s3",
        title: "Section 3: React 19, Hooks & State Management",
        lecturesCount: 3,
        totalDuration: "55m",
        lectures: [
          { id: "l9", title: "Thinking in React Components & Virtual DOM", duration: "15:00", preview: true, videoUrl: SAMPLE_VIDEOS.intro },
          { id: "l10", title: "Mastering useState, useEffect, and custom Hooks", duration: "25:30", preview: false, videoUrl: SAMPLE_VIDEOS.dev },
          { id: "l11", title: "Project 3: E-Commerce Store with Shopping Cart", duration: "14:30", preview: false, videoUrl: SAMPLE_VIDEOS.dev }
        ]
      },
      {
        sectionId: "s4",
        title: "Section 4: Full-Stack Backend, Databases & AI Integration",
        lecturesCount: 3,
        totalDuration: "1h 10m",
        lectures: [
          { id: "l12", title: "Node.js Architecture & Express Routing", duration: "20:00", preview: false, videoUrl: SAMPLE_VIDEOS.dev },
          { id: "l13", title: "PostgreSQL & Prisma ORM Schema Modeling", duration: "28:15", preview: false, videoUrl: SAMPLE_VIDEOS.dev },
          { id: "l14", title: "Integrating AI Agents & Streaming Completions", duration: "21:45", preview: false, videoUrl: SAMPLE_VIDEOS.dev }
        ]
      }
    ],
    reviews: [
      {
        id: "r1",
        userName: "Marcus Vance",
        userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
        rating: 5,
        date: "2 weeks ago",
        comment: "This course literally got me my first Junior Full-Stack Developer job within 4 months of enrolling! The explanations are clear, engaging, and directly applicable to real jobs."
      },
      {
        id: "r2",
        userName: "Elena Rostova",
        userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        rating: 5,
        date: "1 month ago",
        comment: "The Next.js and AI integration modules are gold. No fluff, straight into hands-on code."
      }
    ]
  },
  {
    id: "machine-learning-ai",
    title: "Machine Learning & Generative AI Masterclass 2026",
    headline: "Master PyTorch, Scikit-Learn, Transformers, LangChain, RAG Systems, and LLM Fine-Tuning with hands-on mathematical intuition.",
    rating: 4.9,
    ratingCount: 194820,
    studentsCount: 680200,
    instructor: {
      name: "Prof. Kirill Eremenko & Hadelin",
      role: "AI Data Scientist & Machine Learning Innovators",
      rating: 4.9,
      reviews: "450,000+",
      students: "1,800,000+",
      courses: 22,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
      bio: "Kirill and Hadelin are renowned AI educators with industry experience across high-frequency finance, deep learning research, and robotics."
    },
    lastUpdated: "09/2026",
    language: "English",
    subtitles: ["English [Auto]", "Spanish", "Portuguese", "Japanese"],
    price: 449,
    originalPrice: 3899,
    discountPercent: 88,
    badge: "Bestseller",
    category: "Data Science",
    subCategory: "Artificial Intelligence",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    previewVideo: SAMPLE_VIDEOS.ai,
    whatYouWillLearn: [
      "Build predictive models using Linear/Logistic Regression, Random Forests, and XGBoost",
      "Deep Learning with PyTorch: CNNs for Computer Vision & RNNs/LSTMs for sequences",
      "Understand the Transformer architecture (Self-Attention, Multi-Head Attention) from scratch",
      "Build Retrieval-Augmented Generation (RAG) pipelines with Vector DBs (Chroma/Pinecone)",
      "Fine-tune open-weights models (Llama 3, Mistral) using LoRA and QLoRA on GPUs",
      "Deploy AI endpoints with FastAPI, Ray Serve, and Docker"
    ],
    requirements: [
      "Basic understanding of high school math (vectors, derivatives, probability)",
      "Basic Python programming knowledge"
    ],
    description: "The most comprehensive AI & Machine Learning curriculum online. We bridge raw theoretical intuition with production code.",
    curriculum: [
      {
        sectionId: "ml1",
        title: "Section 1: Classical Machine Learning & Data Wrangling",
        lecturesCount: 3,
        totalDuration: "45m",
        lectures: [
          { id: "mll1", title: "Intuition behind Gradient Descent & Cost Functions", duration: "14:20", preview: true, videoUrl: SAMPLE_VIDEOS.ai },
          { id: "mll2", title: "Feature Engineering, Normalization & Imputation", duration: "16:40", preview: false, videoUrl: SAMPLE_VIDEOS.ai },
          { id: "mll3", title: "Hands-on: House Price Prediction with Scikit-Learn", duration: "14:00", preview: false, videoUrl: SAMPLE_VIDEOS.ai }
        ]
      },
      {
        sectionId: "ml2",
        title: "Section 2: Deep Learning & Neural Networks with PyTorch",
        lecturesCount: 3,
        totalDuration: "50m",
        lectures: [
          { id: "mll4", title: "PyTorch Tensors, Autograd & Computation Graphs", duration: "15:30", preview: true, videoUrl: SAMPLE_VIDEOS.ai },
          { id: "mll5", title: "Building and Training your first Deep MLP", duration: "19:10", preview: false, videoUrl: SAMPLE_VIDEOS.ai },
          { id: "mll6", title: "CNNs for Medical Image Classification", duration: "15:20", preview: false, videoUrl: SAMPLE_VIDEOS.ai }
        ]
      },
      {
        sectionId: "ml3",
        title: "Section 3: Generative AI, Transformers & Enterprise RAG",
        lecturesCount: 3,
        totalDuration: "1h 05m",
        lectures: [
          { id: "mll7", title: "The Transformer Paper: Attention is All You Need Explained", duration: "24:00", preview: true, videoUrl: SAMPLE_VIDEOS.ai },
          { id: "mll8", title: "Building a Production RAG System with Vector Search", duration: "25:00", preview: false, videoUrl: SAMPLE_VIDEOS.ai },
          { id: "mll9", title: "Fine-tuning Small Language Models with QLoRA", duration: "16:00", preview: false, videoUrl: SAMPLE_VIDEOS.ai }
        ]
      }
    ],
    reviews: [
      {
        id: "r3",
        userName: "Samantha Miller",
        userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
        rating: 5,
        date: "3 weeks ago",
        comment: "The visual intuition behind self-attention in transformers finally made it click for me. Top tier production quality."
      }
    ]
  },
  {
    id: "aws-cloud-architect",
    title: "AWS Certified Solutions Architect Associate (SAA-C03)",
    headline: "Full preparation for the AWS Certified Solutions Architect exam. EC2, S3, RDS, VPC, Lambda, ECS, IAM, and High-Availability Architecture.",
    rating: 4.8,
    ratingCount: 165400,
    studentsCount: 790000,
    instructor: {
      name: "Stephane Maarek",
      role: "AWS Certified Solutions Architect & DevOps Guru",
      rating: 4.9,
      reviews: "600,000+",
      students: "2,100,000+",
      courses: 18,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250",
      bio: "Stephane is an AWS Hero and cloud architect who has helped hundreds of thousands pass cloud certification exams on the first attempt."
    },
    lastUpdated: "10/2026",
    language: "English",
    subtitles: ["English [Auto]", "Japanese", "Spanish", "Portuguese"],
    price: 399,
    originalPrice: 3199,
    discountPercent: 87,
    badge: "Bestseller",
    category: "Cloud & DevOps",
    subCategory: "Amazon Web Services",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    previewVideo: SAMPLE_VIDEOS.cloud,
    whatYouWillLearn: [
      "Pass the AWS Certified Solutions Architect Associate exam with flying colors",
      "Design resilient, high-performing, secure, and cost-optimized architectures on AWS",
      "Master core services: VPC, Subnets, Internet Gateways, NAT, Route53",
      "Serverless computing with AWS Lambda, API Gateway, SQS, SNS, and DynamoDB",
      "Containerized deployments with Docker, AWS ECS, and Fargate",
      "Includes 2 full-length practice exams with detailed answer explanations"
    ],
    requirements: [
      "Basic understanding of IT fundamentals (IP addressing, servers, client-server model)",
      "Free Tier AWS account for hands-on labs"
    ],
    description: "AWS certifications open massive career doors. This course covers everything on the updated SAA-C03 blueprint with hands-on console demos and practice exams.",
    curriculum: [
      {
        sectionId: "c1",
        title: "Section 1: AWS Fundamentals & IAM Security",
        lecturesCount: 3,
        totalDuration: "38m",
        lectures: [
          { id: "cl1", title: "AWS Global Infrastructure Overview (Regions & AZs)", duration: "10:15", preview: true, videoUrl: SAMPLE_VIDEOS.cloud },
          { id: "cl2", title: "IAM Users, Groups, Policies, Roles and MFA Setup", duration: "16:20", preview: true, videoUrl: SAMPLE_VIDEOS.cloud },
          { id: "cl3", title: "Hands-on: Enforcing Least Privilege with IAM Policies", duration: "11:25", preview: false, videoUrl: SAMPLE_VIDEOS.cloud }
        ]
      },
      {
        sectionId: "c2",
        title: "Section 2: EC2 Compute & High Availability Autoscaling",
        lecturesCount: 3,
        totalDuration: "42m",
        lectures: [
          { id: "cl4", title: "EC2 Instance Types, AMIs & User Data Bootstrapping", duration: "14:00", preview: false, videoUrl: SAMPLE_VIDEOS.cloud },
          { id: "cl5", title: "Application Load Balancer (ALB) Routing & Health Checks", duration: "15:00", preview: false, videoUrl: SAMPLE_VIDEOS.cloud },
          { id: "cl6", title: "Auto Scaling Groups (ASG) Dynamic & Target Tracking", duration: "13:00", preview: false, videoUrl: SAMPLE_VIDEOS.cloud }
        ]
      }
    ],
    reviews: [
      {
        id: "r4",
        userName: "David Chen",
        userAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=100",
        rating: 5,
        date: "5 days ago",
        comment: "I scored 892/1000 on the actual exam yesterday! Stephane's hands-on labs and explanations are second to none."
      }
    ]
  },
  {
    id: "figma-ui-ux-design",
    title: "UI/UX Design Masterclass: Complete Figma to Webflow 2026",
    headline: "Design mobile & web apps with Figma. Wireframing, Prototyping, Design Systems, Auto Layout, UX Research, and interactive animations.",
    rating: 4.8,
    ratingCount: 78500,
    studentsCount: 310000,
    instructor: {
      name: "Daniel Walter Scott",
      role: "Adobe Certified Instructor & UX Specialist",
      rating: 4.8,
      reviews: "210,000+",
      students: "900,000+",
      courses: 16,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250",
      bio: "Daniel is a multiple award-winning designer, Adobe Certified Instructor, and founder of Bring Your Own Laptop."
    },
    lastUpdated: "08/2026",
    language: "English",
    subtitles: ["English [Auto]", "French", "Italian", "Spanish"],
    price: 349,
    originalPrice: 2799,
    discountPercent: 88,
    badge: "Hot & New",
    category: "Design",
    subCategory: "User Interface Design",
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
    previewVideo: SAMPLE_VIDEOS.ui,
    whatYouWillLearn: [
      "Master Figma from fundamentals to advanced auto layout and component variants",
      "Conduct user research, synthesize customer journey maps, and build wireframes",
      "Build a scalable, token-based Design System used by Fortune 500 product teams",
      "Interactive micro-interactions, smart animations, and clickable prototypes",
      "Export assets and work smoothly with software developers"
    ],
    requirements: [
      "No previous design or drawing experience required",
      "A free Figma account"
    ],
    description: "Step into high-paying UI/UX design. Learn by designing a full food delivery mobile app and a luxury fintech SaaS dashboard from scratch.",
    curriculum: [
      {
        sectionId: "u1",
        title: "Section 1: Figma Fundamentals & Auto Layout Mastery",
        lecturesCount: 3,
        totalDuration: "35m",
        lectures: [
          { id: "ul1", title: "Figma Interface, Canvas Navigation & Shortcut Tricks", duration: "08:15", preview: true, videoUrl: SAMPLE_VIDEOS.ui },
          { id: "ul2", title: "Auto Layout 5.0: Hug, Fill & Min/Max Constraints", duration: "14:40", preview: true, videoUrl: SAMPLE_VIDEOS.ui },
          { id: "ul3", title: "Components, Variants & Component Properties", duration: "12:05", preview: false, videoUrl: SAMPLE_VIDEOS.ui }
        ]
      }
    ],
    reviews: [
      {
        id: "r5",
        userName: "Chloe Bennet",
        userAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100",
        rating: 5,
        date: "2 weeks ago",
        comment: "Daniel's energy and teaching style make complex design principles ridiculously easy to absorb. Loved building the design system!"
      }
    ]
  },
  {
    id: "ethical-hacking-cybersecurity",
    title: "The Complete Ethical Hacking & Cyber Security Course 2026",
    headline: "Learn Ethical Hacking, Penetration Testing, Wireshark, Metasploit, Web Application Security, and Network Defense hands-on.",
    rating: 4.7,
    ratingCount: 142000,
    studentsCount: 520000,
    instructor: {
      name: "Zaid Sabih",
      role: "Ethical Hacker & Security Specialist",
      rating: 4.8,
      reviews: "380,000+",
      students: "1,400,000+",
      courses: 11,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250",
      bio: "Zaid is an ethical hacker, computer scientist, and founder of zSecurity, specializing in offensive defense and vulnerability assessment."
    },
    lastUpdated: "09/2026",
    language: "English",
    subtitles: ["English [Auto]", "Spanish", "Arabic"],
    price: 399,
    originalPrice: 3499,
    discountPercent: 88,
    badge: "Bestseller",
    category: "Cybersecurity",
    subCategory: "Penetration Testing",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    previewVideo: SAMPLE_VIDEOS.dev,
    whatYouWillLearn: [
      "Set up an isolated Kali Linux penetration testing lab environment",
      "Analyze network packets, port scanning, and vulnerability detection with Nmap",
      "Identify OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF) and secure them",
      "Wireless network security fundamentals and defense mechanisms",
      "Write secure code and implement defense-in-depth security policies"
    ],
    requirements: [
      "Basic understanding of operating systems and networking concepts",
      "Computer with minimum 8GB RAM to run virtual machines"
    ],
    description: "A comprehensive guide to understanding security vulnerabilities and how to defend systems against modern attack vectors.",
    curriculum: [
      {
        sectionId: "s1_h",
        title: "Section 1: Lab Preparation & Linux Terminal Proficiency",
        lecturesCount: 3,
        totalDuration: "30m",
        lectures: [
          { id: "hl1", title: "Setting up VirtualBox & Kali Linux Safely", duration: "10:00", preview: true, videoUrl: SAMPLE_VIDEOS.dev },
          { id: "hl2", title: "Essential Linux Terminal Commands & Permissions", duration: "12:00", preview: false, videoUrl: SAMPLE_VIDEOS.dev },
          { id: "hl3", title: "Network Configuration & Understanding MAC/IP addresses", duration: "08:00", preview: false, videoUrl: SAMPLE_VIDEOS.dev }
        ]
      }
    ],
    reviews: [
      {
        id: "r6",
        userName: "Alex Rivera",
        userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
        rating: 5,
        date: "3 weeks ago",
        comment: "Practical, ethical, and exceptionally well explained. The virtual lab setup guided me step-by-step."
      }
    ]
  },
  {
    id: "python-automation-zero-to-hero",
    title: "Python 3: Deep Dive from Zero to Hero & Automation",
    headline: "Master Python 3 from basics to advanced OOP, Decorators, Generators, Web Scraping, Pandas, and Task Automation scripts.",
    rating: 4.8,
    ratingCount: 310500,
    studentsCount: 1100000,
    instructor: {
      name: "Jose Portilla",
      role: "Head of Data Science at Pierian Training",
      rating: 4.8,
      reviews: "820,000+",
      students: "3,200,000+",
      courses: 34,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
      bio: "Jose Portilla holds BS and MS degrees in Mechanical Engineering from Santa Clara University and has spent years teaching data science and programming."
    },
    lastUpdated: "10/2026",
    language: "English",
    subtitles: ["English [Auto]", "Spanish", "Italian", "Turkish"],
    price: 369,
    originalPrice: 3299,
    discountPercent: 89,
    badge: "Bestseller",
    category: "Development",
    subCategory: "Python",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800",
    previewVideo: SAMPLE_VIDEOS.intro,
    whatYouWillLearn: [
      "Learn Python syntax, functions, modules, and Object-Oriented Programming (OOP)",
      "Automate repetitive tasks, read/write Excel, PDF, and CSV spreadsheets",
      "Web scraping with BeautifulSoup and automated browser scripting",
      "Analyze data and generate plots using Pandas, NumPy, and Matplotlib"
    ],
    requirements: [
      "Access to a computer with internet. No prior programming needed."
    ],
    description: "The gold standard Python course on the market. Clear explanations, milestone projects, and notebook walkthroughs.",
    curriculum: [
      {
        sectionId: "p1",
        title: "Section 1: Python Objects, Data Structure Basics",
        lecturesCount: 3,
        totalDuration: "36m",
        lectures: [
          { id: "pl1", title: "Numbers, Strings & String Formatting", duration: "12:00", preview: true, videoUrl: SAMPLE_VIDEOS.intro },
          { id: "pl2", title: "Lists, Dictionaries, Tuples and Sets", duration: "14:00", preview: false, videoUrl: SAMPLE_VIDEOS.intro },
          { id: "pl3", title: "Comparison Operators & Control Flow", duration: "10:00", preview: false, videoUrl: SAMPLE_VIDEOS.intro }
        ]
      }
    ],
    reviews: [
      {
        id: "r7",
        userName: "Jordan Kelly",
        userAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100",
        rating: 5,
        date: "1 month ago",
        comment: "Jose makes Python accessible and fun. The Jupyter notebooks provided are an incredible reference."
      }
    ]
  }
];

export const CATEGORIES = [
  "All",
  "Development",
  "Data Science",
  "Cloud & DevOps",
  "Design",
  "Cybersecurity"
];
