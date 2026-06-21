export const profile = {
  name: 'Haryanshiva Putri',
  pronouns: 'She / Her',
  role: 'Credit Administrator',
  company: 'CIMB Niaga',
  location: 'Jakarta, Indonesia',
  linkedin: 'https://www.linkedin.com/in/haryanshiva-putri-093339417',
  linkedinHandle: 'in/haryanshiva-putri-093339417',
  summary:
    'A dedicated Credit Administrator with expertise in managing credit documentation, evaluating financial data, and ensuring compliance with company policies and regulatory standards.',
  longSummary:
    'My role involves supporting credit approval processes, maintaining accurate records, and facilitating smooth communication between clients and internal teams. With strong analytical skills and attention to detail, I contribute to minimizing risks while optimizing operational efficiency — building reliable financial systems and supporting organizational growth through effective credit management.',
  tagline: 'Credit documentation, compliance, and the quiet precision that keeps financial systems trustworthy.',
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  present?: boolean;
  description: string;
  highlights: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    id: 'cimb',
    company: 'CIMB Niaga',
    role: 'Credit Administrator',
    type: 'Full-time',
    period: 'Jan 2025 — Present',
    location: 'Central Jakarta, Indonesia · On-site',
    present: true,
    description:
      'A banking administration professional responsible for the integrity of the credit lifecycle at one of Indonesia\u2019s leading commercial banks.',
    highlights: [
      'Verify the authenticity of credit documents and ensure regulatory compliance before disbursement.',
      'Mitigate operational risk through rigorous pre-disbursement checks and collateral document management.',
      'Operate integrated banking systems and maintain daily financial reporting in Microsoft Excel with consistently high accuracy.',
    ],
    skills: ['Analisis Keuangan', 'Komunikasi', 'Verification & Validation'],
  },
  {
    id: 'pnm',
    company: 'PT. Permodalan Nasional Madani (Persero)',
    role: 'Account Officer',
    type: 'Full-time',
    period: 'Oct 2024 — Des 2025',
    location: 'South Jakarta, Indonesia · On-site',
    description:
      'Served as an Account Officer at a state-owned enterprise dedicated to empowering micro, small, and medium businesses across Indonesia.',
    highlights: [
      'Managed disbursement workflows and account onboarding for MSME clients.',
      'Maintained accurate client records and supported day-to-day account operations.',
      'Performed data entry and reconciliation with a focus on data integrity.',
    ],
    skills: ['Disbursements', 'Account Management', 'Entri Data'],
  },
];

export type SkillGroup = {
  title: string;
  description: string;
  items: { name: string; context: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Branch Banking',
    description: 'Core banking operations and credit administration.',
    items: [
      { name: 'Branch Banking', context: 'Credit Administrator · CIMB Niaga' },
      { name: 'Disbursements', context: 'Account Officer · PNM' },
      { name: 'Account Management', context: 'Account Officer · PNM' },
      { name: 'Entri Data', context: 'Account Officer · PNM' },
    ],
  },
  {
    title: 'Analytical',
    description: 'Evaluation, validation, and data-driven decision making.',
    items: [
      { name: 'Analisis Keuangan', context: 'Credit Administrator · CIMB Niaga' },
      { name: 'Analytical Skills', context: 'CIMB Niaga & PNM' },
      { name: 'Verification & Validation (V&V)', context: 'Credit Administrator · CIMB Niaga' },
    ],
  },
  {
    title: 'Communication',
    description: 'Bridging clients and internal teams with clarity.',
    items: [
      { name: 'Komunikasi', context: 'Credit Administrator · CIMB Niaga' },
      { name: 'Microsoft Excel', context: 'Daily reporting & reconciliation' },
      { name: 'Integrated Banking Systems', context: 'Credit lifecycle management' },
    ],
  },
];

export type Education = {
  institution: string;
  field: string;
  period: string;
};

export const education: Education = {
  institution: 'Universitas Terbuka',
  field: 'Business Administration and Management, General',
  period: 'Jan 2026 — Jan 2030',
};

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
