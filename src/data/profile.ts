export interface ProfileLink {
  label: string;
  href: string;
  external: boolean;
}

export interface Profile {
  name: string;
  eyebrow: string;
  headline: string;
  subline: string;
  email: string;
  github: string;
  linkedin: string;
  /** Path to the resume PDF, relative to the site root (served from public/). */
  resumePath: string;
  /**
   * Drop an image at public/images/headshot.jpg and set this to
   * 'images/headshot.jpg' to replace the "SO" monogram placeholder.
   */
  headshotSrc: string | null;
  headshotAlt: string;
  /** Initials shown while no headshot image is set. */
  initials: string;
  headshotNote: string;
  copyright: string;
}

export const profile: Profile = {
  name: 'Sunday Ochigbo',
  eyebrow: 'Electrical & Computer Engineering · Alabama A&M University',
  headline: 'I build autonomous systems that combine hardware, software, and sensors.',
  subline:
    'From gas-sensing IoT devices and competition robots to custom PCBs, microprocessors, and AI agents.',
  email: 'agbidisunday@gmail.com',
  github: 'https://github.com/sunday004/',
  linkedin: 'https://www.linkedin.com/in/sunday-ochigbo-a9b018240/',
  resumePath: 'resume.pdf',
  headshotSrc: null,
  headshotAlt: 'Sunday Ochigbo',
  initials: 'SO',
  headshotNote: '[Add your headshot here]',
  copyright: '© 2026 Sunday Ochigbo',
};

export const navLinks: ProfileLink[] = [
  { label: 'Projects', href: '#projects', external: false },
  { label: 'Experience', href: '#experience', external: false },
  { label: 'Skills', href: '#skills', external: false },
  { label: 'About', href: '#about', external: false },
  { label: 'Contact', href: '#contact', external: false },
];
