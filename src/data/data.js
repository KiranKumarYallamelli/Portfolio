// =========================================================================
// src/data/data.js
// SINGLE SOURCE OF TRUTH for all portfolio content.
// Every section reads from this file — no content is hard-coded in components.
// Sourced directly from Kiran Kumar Yallamelli's resume. Nothing invented.
// =========================================================================

export const personalInfo = {
  name: 'Kiran Kumar Yallamelli',
  firstName: 'Kiran',
  initials: 'KY',
  roles: [
    'Software Developer',
    'React Developer',
    'Cloud Enthusiast',
    'AI & ML Engineer',
    'Python Programmer',
  ],
  tagline:
    'I build secure, scalable web applications and explore cloud infrastructure — turning ideas into reliable, real‑world software.',
  greeting: 'Hi 👋, I\u2019m',
  location: 'Andhra Pradesh, India',
  email: 'kirankumaryallamelli2005@gmail.com',
  phone: '+91-6305022742',
  resumeUrl: '/assets/Kiran_Kumar_Yallamelli_Resume.pdf',
  resumeFileName: 'Kiran_Kumar_Yallamelli_Resume.pdf',
  objective:
    'Highly motivated B.Tech graduate seeking a Cloud Operations Engineer role to leverage skills in Google Cloud Platform, Python, Linux, Git, Docker, and networking to build secure, scalable, and reliable cloud infrastructure. Eager to contribute to cloud operations, automation, and continuous improvement while growing as a cloud professional.',
  about: [
    'I\u2019m a B.Tech Computer Science (AI & ML) student at Pragati Engineering College, passionate about software development, cloud technologies, and modern web engineering.',
    'I work primarily as a React developer and Python programmer, enjoy building practical, real‑world applications, and hold the Google Cloud Certified Associate Cloud Engineer certification.',
    'I\u2019m currently exploring full‑stack development in depth and love combining clean engineering with cloud‑native thinking to ship reliable software.',
  ],
};

export const socialLinks = {
  github: 'https://github.com/KiranKumarYallamelli',
  linkedin: 'https://www.linkedin.com/in/kiran-kumar-yallamelli-02b006287/',
  leetcode: 'https://leetcode.com/u/Kiran_Yallamelli/',
  email: 'mailto:kirankumaryallamelli2005@gmail.com',
};

export const githubUsername = 'KiranKumarYallamelli';

export const education = [
  {
    id: 'edu-1',
    institution: 'Pragati Engineering College',
    location: 'Surampalem, India',
    degree: 'Bachelor of Technology — CSE (AI & ML)',
    score: 'CGPA: 7.9',
    duration: '2023 — 2026',
  },
  {
    id: 'edu-2',
    institution: 'Srinivasa Institute of Engineering and Technology',
    location: 'Amalapuram, India',
    degree: 'Diploma in Electronics and Communication Engineering',
    score: 'Percentage: 84.5%',
    duration: '2020 — 2023',
  },
  {
    id: 'edu-3',
    institution: 'Bhashyam E.M. School',
    location: 'Kothapeta, India',
    degree: 'Secondary School Certificate (SSC)',
    score: 'Marks: 525/600',
    duration: '2019 — 2020',
  },
];

// ---------------------------------------------------------------------------
// Skills — grouped by category, matching resume + brief categorisation
// `level` is a 0–100 indicative proficiency value used for the progress bars.
// ---------------------------------------------------------------------------
export const skillCategories = [
  {
    id: 'programming',
    label: 'Programming',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'Java', level: 75 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 78 },
      { name: 'Bash (Basic)', level: 55 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML', level: 92 },
      { name: 'CSS', level: 88 },
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 75 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    skills: [
      { name: 'MongoDB', level: 72 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    skills: [
      { name: 'Google Cloud Platform', level: 82 },
      { name: 'Compute Engine', level: 75 },
      { name: 'Cloud Storage', level: 75 },
      { name: 'VPC', level: 68 },
      { name: 'IAM', level: 70 },
    ],
  },
  {
    id: 'networking',
    label: 'Networking',
    skills: [
      { name: 'TCP/IP', level: 70 },
      { name: 'DNS', level: 68 },
      { name: 'Firewalls', level: 65 },
      { name: 'Network Security Fundamentals', level: 65 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'Docker', level: 72 },
      { name: 'VS Code', level: 90 },
    ],
  },
  {
    id: 'os',
    label: 'Operating Systems',
    skills: [
      { name: 'Linux', level: 75 },
      { name: 'RedHat', level: 65 },
      { name: 'CentOS', level: 65 },
    ],
  },
  {
    id: 'aiml',
    label: 'AI & ML',
    skills: [
      { name: 'AI Fundamentals', level: 65 },
      { name: 'ML Fundamentals', level: 65 },
    ],
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export const projects = [
  {
    id: 'multilingual-chat-app',
    title: 'Multilingual Chat Application',
    description:
      'A one‑to‑one real‑time chat application that automatically translates messages between users who speak different languages, with seamless UI for original and translated text.',
    image: null,
    tech: ['React', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'JWT'],
    features: [
      'Real‑time messaging with Socket.IO',
      'JWT‑based authentication',
      'Automatic language detection & translation',
      'Responsive, clean chat UI',
    ],
    highlights:
      'Useful for global collaboration across teams and remote work — and helps users learn new languages by comparing original and translated messages. Planned upgrades include group chat, voice translation, and more language support.',
    github: 'https://github.com/KiranKumarYallamelli',
    demo: null,
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 'binary-tree-visualization',
    title: 'Binary Tree Visualization',
    description:
      'An interactive tree visualizer that demonstrates binary tree data structures and their operations through smooth, real‑time visual updates.',
    image: null,
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Insert and delete node operations',
      'Inorder, Preorder and Postorder traversals',
      'Live, animated tree visualization',
      'Optimized re‑rendering for smooth performance',
    ],
    highlights:
      'Built for students, educators, and quick interview preparation — making abstract data structure operations easy to see and understand.',
    github: 'https://github.com/KiranKumarYallamelli',
    demo: null,
    featured: true,
    category: 'DSA / Visualization',
  },
];

// ---------------------------------------------------------------------------
// Experience / Internships (timeline)
// ---------------------------------------------------------------------------
export const experience = [
  {
    id: 'exp-1',
    role: 'Python Full Stack Developer — Virtual Internship',
    organization: 'AICTE EduSkills',
    duration: 'July — September 2024',
    points: [
      'Completed a structured virtual internship focused on full‑stack web development using Python, HTML, CSS, JavaScript, and MySQL.',
      'Gained hands‑on experience connecting frontend interfaces with backend logic and databases.',
      'Developed interactive web application modules and applied best practices in coding and project delivery.',
    ],
  },
];

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------
export const certificates = [
  {
    id: 'cert-1',
    title: 'Google Cloud Certified Associate Cloud Engineer',
    issuer: 'Google Cloud',
    points: [
      'Gained knowledge of Google Cloud Platform (GCP) services for deploying, managing, and monitoring applications.',
      'Learned the fundamentals of cloud security, identity & access management, and networking in GCP.',
    ],
    credentialUrl: null,
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'github', label: 'GitHub' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

// ---------------------------------------------------------------------------
// EmailJS configuration — replace with your own EmailJS credentials.
// See https://www.emailjs.com/docs/ for setup steps. Until configured,
// the contact form runs in a safe demo mode (see Contact component).
// ---------------------------------------------------------------------------
export const emailJsConfig = {
  serviceId: 'YOUR_EMAILJS_SERVICE_ID',
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
};
