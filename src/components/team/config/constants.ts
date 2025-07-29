import { TeamHead, TeamMember } from "./interfaces";

const appDevTeam: TeamMember = {
  image: "/assets/discover/phone.svg",
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
  image: "/assets/discover/pen.svg",
  teamName: "UI/Graphic Design",
  teamMembers: ["Divya Mulpuri", "Julienne Strydom", "Katherine Garland"],
};

const marketingTeam: TeamMember = {
  image: "/assets/discover/camera.svg",
  teamName: "Marketing",
  teamMembers: [
    "Ben Scruton",
    "Dhruv Nagpal",
    "Jayla Daniels",
    "Noah Balicki",
    "Sophia Zaydon",
  ],
};

const webDevTeam: TeamMember = {
  image: "/assets/discover/arrow.svg",
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
    photo: "/assets/team/team-sameer.png",
    name: "Sameer Bhatia",
    title: "CEO",
    linkedinLink: "https://www.linkedin.com/",
    socialLink: "https://instagram.com",
  },
  {
    photo: "/assets/team/team-soham.jpg",
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
    photo: "/assets/team/team-ben.png",
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
