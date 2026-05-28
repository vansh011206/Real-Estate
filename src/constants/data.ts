export interface NavLink {
  name: string;
  href: string;
}

export interface Project {
  name: string;
  location: string;
  description?: string;
  image: string;
}

export interface Service {
  index: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Stat {
  percentage: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { name: 'HOME', href: '#home' },
  { name: 'PROJECT', href: '#projects' },
  { name: 'PARTNERS', href: '#partners' },
  { name: 'CONTACT', href: '#contact' },
];

export const mainProject: Project = {
  name: 'The Archway House',
  location: 'SPAIN',
  description: 'Take a look at some of our most recent builds, each one uniquely crafted to meet our clients\' lifestyle and goals.',
  image: '/images/project_main.png',
};

export const latestProjects: Project[] = [
  {
    name: 'The Haven Residence',
    location: 'GERMANY',
    image: '/images/project_haven.png',
  },
  {
    name: 'Echo Terrace',
    location: 'NETHERLAND',
    image: '/images/project_echo.png',
  },
];

export const services: Service[] = [
  {
    index: '[01]',
    title: 'Custom Home Design',
    description: 'We build from scratch based on your vision, not a template.',
    image: '/images/offer_house.png',
    href: '#',
  },
  {
    index: '[02]',
    title: 'Project Management',
    description: 'From permits to handover, we handle it all with precision.',
    image: '/images/offer_drafting.png',
    href: '#',
  },
  {
    index: '[03]',
    title: 'Interior Design',
    description: 'Where function meets aesthetic, curated finishes, top to bottom.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', // Fallback for interior living room since generate_image quota exhausted
    href: '#',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'ARKO made our home building journey smooth and stress free. From design to construction, everything was handled professionally with clear communication and attention to detail. We felt involved and confident every step of the way.',
    author: 'Micheal Harrington',
    role: 'Homeowner, ARKO Project Client',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'Working with ARKO was one of the best decisions we made. They understand not just how to build, but how to create a living space that truly reflects our needs and personality. Efficient, reliable, and beautifully executed.',
    author: 'Tania Li',
    role: 'Interior Designer',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
];

export const stats: Stat[] = [
  {
    percentage: '100%',
    label: 'On time project delivery',
  },
  {
    percentage: '100%',
    label: 'Client satisfaction rate',
  },
];