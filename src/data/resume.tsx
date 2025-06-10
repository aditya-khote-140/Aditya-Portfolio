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

  work: [
    // {
    //   company: "Atomic Finance",
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
  ],
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
  projects: [
    {
      title: "Charcha.us",
      href: "#",
      dates: "Apr 2024 - Present",
      active: true,
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
      title: "Atharva",
      href: "#",
      dates: "Soon....",
      active: true,
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
} as const;
