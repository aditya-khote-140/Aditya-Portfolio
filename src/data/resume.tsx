import { Icons } from "@/components/icons";

export const DATA = {
  name: "Aditya Khote",
  initials: "Aditya Khote",
  url: "https://charcha.us",
  location: "Kanpur, India",
  description:
  "Full-stack developer skilled in MERN, Web3, DevOps, Cloud, and DSA—building scalable apps and smart contracts with modern infrastructure.",
  summary: "",
  avatarUrl: "/me.png",

  skills: ["C", "C++", "Java", "JavaScript"],
  mern: ["MongoDB", "Express.js", "React.js", "Node.js"],
  blockchain: [
    "Solidity",
    "Web3.js",
    "Truffle",
    "Smart Contract",
    "Hyperledger Fabic",
    "Ethereum",
    "Decentralized Applications",
  ],
  add: [
    "TypeScript", "Next.js", "MySQL", "REST API","GIT","GitHub","Socket.io","Redux toolkit","AWS","Docker","Kubernetes","PostgreSQL",
  ],

  contact: {
    email: "21csme004aditya@gmail.com",
    tel: "+91 884082 3573",
    social: {
      GitHub: {
        url: "https://github.com/aditya-khote-140",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/aditya-khote/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/adityak_140",
        icon: Icons.x,
      },
    },
  },

  education: [
    {
      school: "Maharan Pratap College of Professional Studies",
      // href: "https://buildspace.so",
      degree: "Bachelor of Computer Application",
      description: "a",
      logoUrl: "/MPGI.webp",
      start: "2023",
      end: "Present",
    },
    {
      school: "Oxford Model Convent Inter College",
      // href: "https://uwaterloo.ca",
      degree: "Intermediate",
      logoUrl: "/logo.png",
      start: "2020",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Prasunet Pvt. Ltd.",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Blockchain Intern",
      // logoUrl: "/atomic.png",
      start: "Mar 2025",
      end: "May 2025",
      description: (
        <p>
          Learned and worked on smart contracts using <strong>Solidity</strong>,{" "}
          <strong>Web3.js</strong>, and <strong>Truffle</strong>. Gained
          hands-on experience with real blockchain projects and improved
          technical and teamwork skills.
        </p>
      ),
    },
    // {
    //   company: "Blockchain Intern — Prasunet Pvt. Ltd.",
    //   href: "https://atomic.finance",
    //   badges: [],
    //   location: "Remote",
    //   title: "Bitcoin Protocol Engineer",
    //   logoUrl: "/atomic.png",
    //   start: "May 2021",
    //   end: "Oct 2022",
    //   description: (
    //     <p>
    //       Learned and worked on smart contracts using <strong>Solidity</strong>,{" "}
    //       <strong>Web3.js</strong>, and <strong>Truffle</strong>. Gained
    //       hands-on experience with real blockchain projects and improved
    //       technical and teamwork skills.
    //     </p>
    //   ),
    // },
  ],

  // Project Section :
  projects: [
    {
      title: "Charcha.us",
      href: "#",
      dates: "Apr 2024 - Present - Work Still ongoing",
      active: true,
      category: ["Full Stack"],
      description:
        "It's a Real time chat application to connect people to communicate with anyone's",
      technologies: [
        "React.js",
        "MUI v5",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS",
        "Redux toolkit",
        "Socket.io",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Digital Menu With Admin Dashboard",
      href: "#",
      dates: "10 Jul 2025",
      active: true,
      category: ["Full Stack"],
      description:
        "A digital menu application with an admin dashboard for restaurant management, allowing users to view food items, and admins to manage the menu perform CRUD in menu.",
      technologies: [
        "React.js",
        "Typescript",
        "TailwindCSS",
        "Supabase",
      ],
      links: [
        {
          type: "Website",
          href: " ",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Dropbox Clone with NEXT.JS 14",
      href: "#",
      dates: "Soon....",
      active: true,
      category: ["Backend"],
      description:
        "Dropbox Clone built using Next.js 14 with seamless file storage and sharing functionality.",
      technologies: [
        "Next.js",
        "React",
        "Clerk",
        "Firebase",
        "Drag/Drop",
        "CRUD",
        "Shadcn UI",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: " ",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/image.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "NFT marketplace web3.0",
      href: "#",
      dates: "Soon....",
      active: true,
      category: ["Blockchain"],
      description:
        "A decentralized application (DApp) that allows users to create, buy, and sell NFTs using the Ethereum blockchain.",
      technologies: [
        "Solidity",
        "Web3.js",
        "Smart Contract",
        "Ethereum",
        "DApp",
        "API",
        "React.js",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: " ",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Web3.0 Health Care Management Dapp",
      href: "#",
      dates: "Soon....",
      active: true,
      category: ["Blockchain"],
      description:
        "Blockchain based health care management dapp that allows users to manage their health records and share them with their doctors. with Admin dashboard to manage the dapp.",
      technologies: ["Next.js", "Solidity", "Hardhat", "Context API", "Dapp"],
      links: [
        {
          type: "Website",
          href: " ",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "SaaS ScrapeFlow",
      href: "#",
      dates: "Soon....",
      active: true,
      category: ["CloudComputing"],
      description:
        "Developed a B2C SaaS automation tool with workflow builder, real-time execution, third-party integrations (Google Drive, Slack, Notion), and credit-based Stripe billing, using React.js, Node.js, PostgreSQL, and TypeScript.",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "React Flow",
        "Stripe API",
        "OAuth 2.0",
        "Socket.io",
      ],
      links: [
        {
          type: "Website",
          href: " ",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "SAAS Automation Builder",
      href: "#",
      dates: "Soon....",
      active: true,
      category: ["CloudComputing"],
      description:
        "Built a full-stack B2C SaaS automation platform with Google Drive, Slack, Discord, Notion, and Stripe integrations, featuring a drag-and-drop node builder, real-time workflows, credit-based billing, and a polished UI with Aceternity components.",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "React Flow",
        "Stripe API",
        "OAuth 2.0",
        "Socket.io",
      ],
      links: [
        {
          type: "Website",
          href: " ",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Ultimate CI/CD Corporate DevOps Pipeline",
      href: "#",
      dates: "Soon....",
      active: true,
      category: ["DevOps"],
      description:
        "Built a corporate DevOps pipeline with Kubernetes, Jenkins, Git, SonarQube, Nexus, and full-stack CI/CD with monitoring and security scanning.",
      technologies: [
        "Kubernetes",
        "Jenkins",
        "Git",
        "SonarQube",
        "Nexus",
        "Prometheus",
        "Grafana",
        "Docker",
        "Bash",
      ],
      links: [
        {
          type: "Website",
          href: " ",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  // Certificate
  certificates: [
    {
      title: "MERN Stack Web Development",
      provider: "VFX Era",
      date: "Nov 2022 - August 2023",
      url: "https://drive.google.com/file/d/1XxPd7TgFCk1Bqln14kYZ0Av9RLSAda7b/view?usp=share_link://coursera.org/verify/fullstack123",
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      image: "/certificates/MERN.jpg",
    },
    {
      title: "GeekforGeeks",
      provider: "GeeksforGeeks",
      date: "Nov 2024 - May 2025",
      url: "https://drive.google.com/file/d/1rfJNcbv8L21_dswG6Q80L8aREAspm7wN/view?usp=share_link",
      tags: ["Data Structure and Algorithms", "Java"],
      image: "/certificates/GFG-160.png",
    },
  ],
} as const;
