export const experiences = [
  {
    company: 'Dell Technologies',
    role: 'Software Engineering Intern',
    period: 'May 2025 – Aug 2025',
    shortPeriod: 'May–Aug 2025',
    location: 'Austin, TX',
    detail: 'Automated cryptographic inventory on PowerScale OneFS',
    description:
      "Worked on Dell's PowerScale team on storage infrastructure software. Automated cryptographic inventory on OneFS — the distributed file system powering Dell's enterprise NAS solutions — and built audit-compliant reporting tools.",
    highlights: [
      'Automated cryptographic inventory across PowerScale OneFS',
      'Built audit-compliant reporting pipelines',
      "Worked within Dell's unstructured data solutions team",
    ],
    tags: ['Go', 'Systems', 'Cryptography', 'Storage'],
    action: 'LEVEL UP!',
    accentColor: 'hsl(210 70% 88%)',
  },
  {
    company: 'HiddenLayer',
    role: 'Software Engineering Intern',
    period: 'May 2024 – Jul 2024',
    shortPeriod: 'May–Jul 2024',
    location: 'Remote',
    detail: 'Increased Go code coverage 55% → 65%; contributed to AI security platform',
    description:
      'HiddenLayer is an AI security company protecting machine learning models from adversarial attacks and theft. Worked on the backend platform, focused on improving code quality and test coverage in Go.',
    highlights: [
      'Increased Go code coverage from 55% to 65% across the backend',
      'Improved backend development practices and testing discipline',
      'Contributed to the AI security platform used by enterprise clients',
    ],
    tags: ['Go', 'AI Security', 'Backend', 'Testing'],
    action: 'ZAP!',
    accentColor: 'hsl(265 50% 88%)',
  },
  {
    company: 'Druk Holdings & Investments',
    role: 'AI / ML Intern',
    period: 'Aug 2023',
    shortPeriod: 'Aug 2023',
    location: 'Thimphu, Bhutan',
    detail: 'Built YOLOv5 traffic monitoring model — 87% precision',
    description:
      "Druk Holdings is Bhutan's largest state-owned enterprise. As an AI/ML intern, I worked on a computer vision project to monitor and analyze urban traffic — using the streets I grew up on as the dataset.",
    highlights: [
      'Co-developed a YOLOv5 traffic monitoring model achieving 87% precision',
      'Implemented computer vision pipelines for urban planning insights',
      'Collaborated with an international development team across time zones',
    ],
    tags: ['Python', 'YOLOv5', 'Computer Vision', 'Machine Learning'],
    action: 'POW!',
    accentColor: 'hsl(40 70% 88%)',
  },
  {
    company: 'Kirirom Institute of Technology',
    role: 'Software Intern & Code Camp Facilitator',
    period: 'Apr 2023 – Aug 2023',
    shortPeriod: 'Apr–Aug 2023',
    location: 'Phnom Penh, Cambodia',
    detail: 'Taught Python to 10+ students; >90% pass rate',
    description:
      "KIT is a Japanese-Cambodian university focused on practical software education. I wore two hats: software intern and code camp facilitator for beginner programmers. Teaching was the more memorable half.",
    highlights: [
      'Facilitated Python code camps for 10+ beginner programmers',
      'Led 5 hands-on project builds from idea to working prototype',
      'Achieved >90% student pass rate across all sessions',
      'Developed curriculum tailored for students with zero prior experience',
    ],
    tags: ['Python', 'Teaching', 'Curriculum Design', 'Mentorship'],
    action: 'TEACH!',
    accentColor: 'hsl(150 40% 86%)',
  },
];

export type Experience = typeof experiences[number];
