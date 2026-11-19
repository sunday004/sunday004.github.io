export interface LoopStep {
  step: string;
  title: string;
  description: string;
}

export const loopHeading = 'Sense, compute, decide, act';
export const loopIntro = 'The loop behind every autonomous system, and where my projects fit in it.';

export const loopSteps: LoopStep[] = [
  {
    step: '01',
    title: 'Sense',
    description: 'Gas sensors, ultrasonic rangefinders, cameras, and SiPM photon detectors.',
  },
  {
    step: '02',
    title: 'Compute',
    description: 'Arduino firmware, FPGAs, and custom silicon turn raw signals into usable data.',
  },
  {
    step: '03',
    title: 'Decide',
    description: 'Control logic and AI agents choose what happens next.',
  },
  {
    step: '04',
    title: 'Act',
    description: 'Motors, smartphone alerts, and interfaces carry out the decision.',
  },
];
