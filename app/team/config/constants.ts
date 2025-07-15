import { TeamHead, TeamMember } from "./interfaces";

const appDevTeam: TeamMember = {
  teamName: "App Development",
  teamMembers: [
    "Arnav Mohanty",
    "Jiwon Kim",
    "Mayank Lastname",
    "Nathan Su",
    "Nirvan Daram",
    "Ryan Sauers",
    "Varshitha",
  ],
};

const uiTeam: TeamMember = {
  teamName: "UI/Graphic Design",
  teamMembers: ["Divya Mulpuri", "Julienne Strydom", "Katherine Garland"],
};

const marketingTeam: TeamMember = {
  teamName: "Marketing",
  teamMembers: ["First last", "First last", "First last"],
};

const webDevTeam: TeamMember = {
  teamName: "Website Dev",
  teamMembers: ["Jitesh Dnyandeo", "Sameer Mohammed", "Shengkuo Lin"],
};

export const teams: TeamMember[] = [
  appDevTeam,
  uiTeam,
  marketingTeam,
  webDevTeam,
];

export const teamHeads: TeamHead[] = [
  {
    photo: "/pfp1.png",
    name: "Sameer Bhatia",
    title: "CEO",
    linkedinLink: "https://www.linkedin.com/",
    socialLink: "https://instagram.com",
  },
  {
    photo: "/pfp1.png",
    name: "Soham Kundu",
    title: "CTO",
    linkedinLink: "https://www.linkedin.com/",
    socialLink: "https://instagram.com",
  },
  {
    photo: "/pfp1.png",
    name: "Mehtab Sandhu",
    title: "Head of Mobile App Dev ",
    linkedinLink: "https://www.linkedin.com/",
    socialLink: "https://instagram.com",
  },
  {
    photo: "/pfp1.png",
    name: "Archit Mandepally",
    title: "Head of Mobile App Dev",
    linkedinLink: "https://www.linkedin.com/",
    socialLink: "https://instagram.com",
  },
  {
    photo: "/pfp1.png",
    name: "Ben Hurwitz",
    title: "Head of Graphic Design",
    linkedinLink: "https://www.linkedin.com/",
    socialLink: "https://instagram.com",
  },
  {
    photo: "/pfp1.png",
    name: "Jayla Daniels",
    title: "Head of Marketing",
    linkedinLink: "https://www.linkedin.com/",
    socialLink: "https://instagram.com",
  },
  {
    photo: "/pfp1.png",
    name: "Vedant Patel",
    title: "Head of Website Dev ",
    linkedinLink: "https://www.linkedin.com/",
    socialLink: "https://instagram.com",
  },
  {
    photo: "/pfp1.png",
    name: "Sahil Khunt ",
    title: "Head of Website Dev ",
    linkedinLink: "https://www.linkedin.com/",
    socialLink: "https://instagram.com",
  },
];
