import { Coffee, Database, KeyRound, Network, Globe, ShieldAlert, ShieldCheck, BrainCircuit, Cpu } from 'lucide-react';

/**
 * skillIconSlugs — maps a skill `name` (must match src/data/data.js
 * exactly) to its Simple Icons slug. Logos are rendered via the Simple
 * Icons CDN (https://cdn.simpleicons.org/<slug>) as plain <img> tags —
 * no extra npm package, no bundle weight, and if a slug is ever wrong
 * the image just fails to load (handled gracefully in SkillChip) rather
 * than breaking the build.
 */
export const skillIconSlugs = {
  Python: 'python',
  JavaScript: 'javascript',
  'Bash (Basic)': 'gnubash',
  HTML: 'html5',
  CSS: 'css',
  React: 'react',
  'Tailwind CSS': 'tailwindcss',
  'Node.js': 'nodedotjs',
  'Express.js': 'express',
  MongoDB: 'mongodb',
  MySQL: 'mysql',
  'Google Cloud Platform': 'googlecloud',
  'Compute Engine': 'googlecloud',
  'Cloud Storage': 'googlecloud',
  Git: 'git',
  GitHub: 'github',
  Docker: 'docker',
  'VS Code': 'visualstudiocode',
  Linux: 'linux',
  RedHat: 'redhat',
  CentOS: 'centos',
};

/**
 * skillIconFallback — generic lucide-react icons for skills with no
 * official brand mark (protocols/concepts, or logos Simple Icons
 * doesn't carry for trademark reasons — e.g. Java's coffee-cup logo).
 */
export const skillIconFallback = {
  Java: Coffee,
  SQL: Database,
  VPC: Network,
  IAM: KeyRound,
  'TCP/IP': Network,
  DNS: Globe,
  Firewalls: ShieldAlert,
  'Network Security Fundamentals': ShieldCheck,
  'AI Fundamentals': BrainCircuit,
  'ML Fundamentals': Cpu,
};
