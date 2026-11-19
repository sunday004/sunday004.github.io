export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  /** Small uppercase label above the title. */
  kicker: string;
  title: string;
  /** Bold one-line result or status. */
  highlight: string;
  description: string;
  tags: string[];
  /** Optional photo rendered above the kicker. Omit to show no image. */
  image?: ProjectImage;
}

export const projectsHeading = 'Projects';
export const projectsIntro = 'Systems that sense the world, make sense of the data, and act on it.';

export const projects: Project[] = [
  {
    kicker: 'IoT · Sensors',
    title: 'Real-Time Methane Detector',
    highlight: 'Led a team of 4 · 4-month build · Spring 2025',
    description:
      'A methane detection system that sends real-time alerts to a smartphone, designed as a scalable safety solution for apartment complexes. I integrated the hardware and software with Arduino and C++, and oversaw MQ4 sensor calibration, CAD design, Wi-Fi connectivity, and the mobile interface.',
    tags: ['Arduino', 'C++', 'MQ4 gas sensor', 'Wi-Fi', 'CAD'],
  },
  {
    kicker: 'Robotics · Autonomous navigation',
    title: 'Mining Mayhem Competition Robot',
    highlight: 'Top 15 of 40+ teams · IEEE SoutheastCon 2025',
    description:
      "I programmed the robot's navigation and motor control in C++ on Arduino, with predefined movement sequences, distance-based stopping, and directional turns. Ultrasonic sensors measured distance and detected obstacles, so the robot could correct its path in real time. I also captained the ten-member team.",
    tags: ['C++', 'Arduino', 'Ultrasonic sensors', 'Motor control'],
  },
  {
    kicker: 'Agentic AI · Software',
    title: 'Agent-Driven Workflow Automation',
    highlight: '50% fewer manual steps · setup from 3+ days to about 15 minutes',
    description:
      'An AI-powered system that replaced a fragmented, multi-platform setup process. An agent-driven architecture coordinates actions across several platforms from a single user input, and a centralized React and TypeScript interface puts it all in one place. Built during my internship at Apple.',
    tags: ['Python', 'Claude SDK', 'MCP servers', 'REST APIs', 'React', 'TypeScript'],
  },
  {
    kicker: 'Chip design · Digital',
    title: '8-bit MIPS Microprocessor',
    highlight: 'Team of 5 · RTL to tape-out · Jan 2026 to present',
    description:
      "We developed and taped out an 8-bit MIPS processor using Cadence EDA tools. I verified the ALU, control unit, and register file at module level with Cadence Xcelium, writing testbenches and analyzing waveforms. I'm now writing test programs to run on FPGA and on the fabricated ASIC.",
    tags: ['VLSI', 'Cadence', 'RTL verification', 'FPGA'],
  },
  {
    kicker: 'Senior design · PCB',
    title: '18×18 BGA Breakout Board',
    highlight: 'Six-layer PCB · passed design-rule checks',
    description:
      'A breakout board for characterizing and testing an 18×18 BGA chip. I created the schematic symbol and footprint in KiCad, then laid out six layers with dog-bone fanout vias, dedicated power and ground planes, and decoupling capacitors. Trace-width and spacing rules handle the dense routing.',
    tags: ['KiCad', 'PCB layout', 'BGA fanout', 'DRC'],
  },
  {
    kicker: 'Robotics · Computer vision',
    title: 'Camera-Based Navigation with AprilTags',
    highlight: 'In progress · self-directed study',
    description:
      'Hands-on experiments using printed AprilTags to give a robot camera-based localization and navigation. This extends my competition robotics work from ultrasonic sensing to vision.',
    tags: ['AprilTags', 'Computer vision', 'Robot navigation'],
  },
];
