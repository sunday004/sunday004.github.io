export interface ExperienceItem {
  /** Dates and location, e.g. "May – Aug 2026 · Cupertino, CA". */
  meta: string;
  role: string;
  description: string;
}

export const experienceHeading = 'Experience';

export const experience: ExperienceItem[] = [
  {
    meta: 'May – Aug 2026 · Cupertino, CA',
    role: 'Engineering Program Manager Intern, Apple',
    description:
      'Built an AI-powered, agent-driven workflow that cut manual steps by 50% and reduced setup time from over 3 days to about 15 minutes.',
  },
  {
    meta: 'May – Aug 2025 · Redmond, WA',
    role: 'Explorer Intern, Microsoft',
    description:
      'Improved the interface and experience of a web tool that game developers use to publish games, using React, TypeScript, Redux, and C#. Scoped a new gaming project with business partners and stakeholders.',
  },
  {
    meta: 'Aug 2024 – May 2025 · Normal, AL',
    role: 'Team Captain & Technical Manager, IEEE',
    description:
      'Led a ten-member team of electrical, computer, and mechanical engineering students at the SoutheastCon Robotics Competition, managing timelines, budget, and resources. Ran Arduino programming sessions for other students.',
  },
  {
    meta: 'May – Jul 2024 · East Lansing, MI',
    role: 'Research Intern & Mentor, Facility for Rare Isotope Beams',
    description:
      'Researched SiPM technologies and designed custom footprints and detector PCBs in Fusion 360. Soldered, assembled, and electrically characterized the boards, then ran photon-detection experiments in a black-box setup.',
  },
];
