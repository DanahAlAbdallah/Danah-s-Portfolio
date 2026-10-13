/* ==========================================================================
   ALL YOUR CONTENT LIVES HERE. Replace the placeholders; the layout updates.
   Images: put files in /public/photos and reference them as "/photos/name.jpg".
   Leave `src: null` to show a placeholder.
   ========================================================================== */
import prof from "./assets/Prof.jpg";
export const profile = {
  name: "Danah Al-Abdallah",
  role: "Full stack developer",
  availability: "Open to new roles", // set to "" to hide the badge
  tagline:
    "I build modern, intuitive and accessible web apps, from the interface down to the database, for people of all ages and backgrounds.",
  email: "danaalabdallah02@gmail.com",
  cv: "/cv.pdf", // your CV is at /public/cv.pdf, or set to "" to hide the button
  github: "https://github.com/DanahAlAbdallah",
  linkedin: "https://www.linkedin.com/in/danahalabdallah/",
  photo: prof,
  photoAlt: "Portrait of Danah Al-Abdallah",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Education" },
  { id: "beyond", label: "Beyond code" },
  { id: "contact", label: "Contact" },
];

export const about = {
  photo: null, // e.g. "/photos/about.jpg"
  paragraphs: [
    "I'm a software developer who enjoys using technology to build meaningful, accessible solutions that make everyday life easier for people of all ages and backgrounds.",
    "I aim to create modern, intuitive and user-friendly interfaces, combining thoughtful design with reliable, practical technology. I have worked professionally with Angular and built full stack projects with React, Express and MongoDB.",
    "Away from the screen I take photographs and write. Both keep me paying attention, which turns out to be useful in code too.",
  ],
};

export const experience = [
  {
    title: "Frontend Angular Developer",
    place: "Libanux Software Solution, Beirut",
    years: "Nov 2023 to Aug 2024",
    note: "Built user-friendly websites and fixed challenging problems in existing solutions.",
  },
  {
    title: "Robotics Instructor",
    place: "TakTik Lab, Beirut",
    years: "Feb 2025 to Apr 2025",
    note: "Taught WeDo, Stripe and Scratch.",
  },
];

// The first project is shown as the wide featured card.
// Add each project's own GitHub repo link in `github` (empty hides the button).
export const projects = [
  {
    title: "Daher Travel Agency Dashboard",
    summary:
      "A travel agency system built at Libanux Software Solutions, with smooth communication between employees and admins, notifications, and role-based collaboration for admins and super admins.",
    stack: ["Angular", "TypeScript", "Bootstrap", "CSS", "MongoDB"],
    github: "",
    live: "",
    image: null, // e.g. "/photos/daher-dashboard.png"
  },
  {
    title: "Online Goods Shop",
    summary:
      "A collaborative shop built at ESA Coding Lab where users can add, sell and view items, with Stripe payment integration.",
    stack: ["React.js", "Express.js", "MongoDB", "Bootstrap"],
    github: "",
    live: "",
    image: null,
  },
  {
    title: "School Management System",
    summary:
      "A collaborative website built at ESA Coding Lab with the main features a school needs, friendly for teachers, students and parents.",
    stack: ["PHP", "JavaScript", "Ajax", "Bootstrap", "HTML & CSS"],
    github: "",
    live: "",
    image: null,
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "PHP", "Java", "HTML", "CSS", "AJAX", "jQuery"] },
  { group: "Frameworks and libraries", items: ["React.js", "Angular", "Express.js", "Bootstrap", "Tailwind CSS"] },
  { group: "Databases", items: ["MongoDB", "MySQL"] },
  { group: "Tools and cloud", items: ["Git & GitHub"] },
  { group: "How I work", items: ["Building", "Testing", "Problem solving", "Team adapting"] },
  { group: "Spoken languages", items: ["Arabic (native)", "English (fluent)"] },
];

export const education = [
  {
    title: "Bachelor of Science in Computer Science",
    place: "Lebanese University, Faculty of Science, Nabatieh",
    years: "Oct 2019 to Sep 2022",
    note: "",
  },
];

export const certificates = [
  { title: "Full Stack Web Development Bootcamp", issuer: "ESA Coding Lab", year: "2023", link: "" },
  { title: "Full Stack Web Development Bootcamp", issuer: "ESIEE-IT", year: "2023", link: "" },
  { title: "50 Hours MERN Stack", issuer: "Tatweer Baladna", year: "2023", link: "" },
];

export const beyond = {
  intro:
    "When I am not coding I am usually looking for good light or turning an idea into a few honest paragraphs.",
  photos: [
    { src: null, alt: "Describe photo 1", caption: "Place, year", shape: "portrait" },
    { src: null, alt: "Describe photo 2", caption: "Place, year", shape: "landscape" },
    { src: null, alt: "Describe photo 3", caption: "Place, year", shape: "square" },
    { src: null, alt: "Describe photo 4", caption: "Place, year", shape: "landscape" },
    { src: null, alt: "Describe photo 5", caption: "Place, year", shape: "portrait" },
    { src: null, alt: "Describe photo 6", caption: "Place, year", shape: "square" },
  ],
  photoLink: { label: "More photographs", href: "https://instagram.com/your-username" },
  writing: {
    text: "I write short essays and notes about technology, places and the things I notice. A line about where to read them goes here.",
    link: { label: "Read my writing", href: "https://medium.com/@your-username" },
  },
};

export const themes = [
  { id: "lichen", label: "Lichen" },
  { id: "sodium", label: "Sodium" },
  { id: "rosewater", label: "Rosewater" },
  { id: "moss", label: "Moss" },
];