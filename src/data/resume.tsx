import { Icons } from "@/components/icons";

export const DATA = {
  name: "Aditya Khote",
  initials: "Aditya Khote",
  url: "https://charcha.us",
  location: "Kanpur, India",
  description:
    "Motivated MERN stack developer and Blockchain enthusiast with strong DSA skills, seeking an entry-level role to contribute to innovative projects and expand expertise.",
  summary: "",
  avatarUrl: "/me.png",

  skills: ["C", "C++", "Java", "JavaScript"],
  mern: ["React.js", "Node.js", "Express.js", "MongoDB"],
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
    "TypeScript",
    "Next.js",
    "MySQL",
    "REST API",
    "GIT",
    "GitHub",
    "Socket.io",
    "MUI",
    "Redux toolkit",
    "AWS",
    "Docker",
    "jQuery",
    "Bootstrap",
  ],

  contact: {
    email: "adityakumar29275@gmail.com",
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
    // {
    //   company: "Blockchain Intern — Prasunet Pvt. Ltd.",
    //   href: "https://atomic.finance",
    //   badges: [],
    //   location: "Remote",
    //   title: "Bitcoin Protocol Engineer",
    //   logoUrl: "/atomic.png",
    //   start: "May 2021",
    //   end: "Oct 2022",
    //   description:
    //     "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    // },
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
  ],
  projects: [
    {
      title: "Charcha.us",
      href: "#",
      dates: "Apr 2024 - Present",
      active: true,
      category: ["Full Stack", "Cloud Computing"],
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
      title: "AI-Powered 3D Website Using React",
      href: "#",
      dates: "Soon....",
      active: true,
      category: ["Frontend"],
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
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
      title: "Atharva",
      href: "#",
      dates: "Soon....",
      active: true,
      category: ["Frontend", "Backend"],
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
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
      title: "Atharva",
      href: "#",
      dates: "Soon....",
      active: true,
      category: ["Frontend", "Backend"],
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
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
