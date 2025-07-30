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
    linkedinLink: "https://www.linkedin.com/in/sameer-bhatia-176807243/",
    socialLink: "https://www.instagram.com/_sameerbhatia/",
  },
  {
    photo: "/assets/team/team-soham.jpg",
    name: "Soham Kundu",
    title: "CTO",
    linkedinLink: "https://www.linkedin.com/in/sohamkundu27/",
    socialLink: "https://www.instagram.com/sohamkundu2704/",
  },
  {
    photo: "/assets/team/team-mehtab.jpeg",
    name: "Mehtab Sandhu",
    title: "Head of Mobile App Dev ",
    linkedinLink: "https://www.linkedin.com/in/mehtab-singh-sandhu/",
    socialLink: "https://www.instagram.com/mehtab._.sandhu/",
  },
  {
    photo: "/assets/team/team-archit.png",
    name: "Archit Mandepally",
    title: "Head of Mobile App Dev",
    linkedinLink: "https://www.linkedin.com/in/archit-mandepally-4a1767302/",
    socialLink: "https://www.instagram.com/architmandepally/",
  },
  {
    photo: "/assets/team/team-ben.png",
    name: "Ben Hurwitz",
    title: "Head of Graphic Design",
    linkedinLink: "https://www.linkedin.com/in/benjaminhurwitz/",
    socialLink: "https://www.instagram.com/ben.hurwitz/",
  },
  {
    photo: "/assets/team/team-jayla.png",
    name: "Jayla Daniels",
    title: "Head of Marketing",
    linkedinLink: "https://www.linkedin.com/in/jayla-daniels/",
    socialLink: "https://www.instagram.com/jaylaasd/",
  },
  {
    photo: "/assets/team/team-sahil.JPG",
    name: "Sahil Khunt ",
    title: "Head of Website Dev ",
    linkedinLink: "https://www.linkedin.com/in/sahilkhunt/",
    socialLink: "https://www.instagram.com/sahil_khunt08/",
  },
  {
    photo: "/assets/team/team-vedant.png",
    name: "Vedant Patel",
    title: "Head of Website Dev ",
    linkedinLink: "https://www.linkedin.com/in/vedant-p-patel/",
    socialLink: "https://www.instagram.com/vedantp16/",
  },
];
