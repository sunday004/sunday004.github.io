export interface FocusArea {
  title: string;
  description: string;
}

export const focusHeading = 'What I work on';

export const focusAreas: FocusArea[] = [
  {
    title: 'Sensing & IoT',
    description: 'Sensors, calibration, and connected devices that report in real time.',
  },
  {
    title: 'Robotics & Control',
    description: 'Navigation, motor control, and feedback for machines that move.',
  },
  {
    title: 'Hardware & Silicon',
    description: 'PCBs, FPGAs, and processors, from schematic to tape-out.',
  },
  {
    title: 'AI & Agentic Software',
    description: 'Agents that coordinate tools and platforms to get work done.',
  },
];
