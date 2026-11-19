export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillsHeading = 'Skills';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Python', 'C++', 'C#', 'TypeScript', 'VHDL', 'Assembly', 'MATLAB'],
  },
  {
    title: 'Hardware & design tools',
    items: ['Arduino', 'KiCad', 'Fusion 360', 'Cadence', 'Vivado', 'FPGA'],
  },
  {
    title: 'Software & AI',
    items: ['Claude SDK', 'MCP servers', 'REST APIs', 'React', 'Redux', 'Git', 'Linux'],
  },
  {
    title: 'Foundations',
    items: [
      'Feedback systems',
      'Signals & systems',
      'Digital circuits',
      'Analog circuits',
      'Microprocessors',
      'Computer architecture',
    ],
  },
];
