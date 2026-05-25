export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  category: 'policy' | 'advocacy' | 'academic' | 'culture';
  dossierId: string;
  status: 'Verified' | 'Dossier Filed';
  date: string;
  link?: string;
  isNew?: boolean;
}

export const NEW_ACHIEVEMENTS: Achievement[] = [
  // PILLAR_POLICY (New)
  {
    id: "new-policy-sez-advisor",
    title: "Johor-Singapore SEZ Smart City Solutions Advisor",
    subtitle: "Tay Kok Chin, Chairman of Smart Cities Network and Co-Organiser of WAIC",
    description: "Facilitating smart city solutions projects alongside Smart City Network and Director of Next-Generation Technologies for the ASEAN booth at World AI Conference and International AI Cities Forum with the ultimate goal of improving collaborative efforts in the Singapore-Johor Special Economic Zone. Engaging with student researchers and schools throughout rural and urban Malaysia for equal-opportunity talent acquisition for research and internship opportunities.",
    imagePath: "/assets/images/johor-singapore-sez-smart-city-solutions-advisor.png",
    category: "policy",
    dossierId: "NKM-NEW-POL-01",
    status: "Verified",
    date: "April 2026 - Present",
    isNew: true
  },
  {
    id: "new-policy-sai-lab",
    title: "Scientific AI for Development Lab Lead Researcher",
    subtitle: "Confirmation by Executive Director and Snippet of Proposal",
    description: "Project: 'Formalising Skills Alignment in Volunteer Programme Evaluation for Education Policy Reform in Industry 5.0'. Implementing advanced NLP semantic embeddings to parse, extract, and map skills in volunteer roles across Singapore, EU and US datasets against entry-level jobs to derive evaluation metrics for further study on plausibility of job-skills-aligned volunteer roles as an informal training tool.",
    imagePath: "/assets/images/scientific-ai-for-development-lab-lead-researcher.png",
    category: "policy",
    dossierId: "NKM-NEW-POL-02",
    status: "Verified",
    date: "March 2026 - Present",
  },
  {
    id: "new-policy-greenio",
    title: "Green IO Policy Advisor",
    subtitle: "Invitation from Carl Geraghty, Managing Partner & CEO of market research firm TAGR, who is looking for global thought leaders",
    description: "Provided policy insights as a global thought leader, then onboarded as long-term policy advisor for APAC sustainability research project focusing on e-waste reduction strategy in collaboration with Carl Geraghty as CSR initiative for TAGR.",
    imagePath: "/assets/images/greenio-tech-policy-advisor.png",
    category: "policy",
    dossierId: "NKM-NEW-POL-03",
    status: "Dossier Filed",
    date: "March 2026 - Present"
  },
  {
    id: "new-policy-dis",
    title: "DIS Community APAC Expansion Lead",
    subtitle: "Initial Invitation and Executive Committee Meeting",
    description: "Leading regional expansion strategies to support spacetech development in the APAC region. Successfully advocated for Singapore to be the regional hub despite smallest member base.",
    imagePath: "/assets/images/dis-community-apac-expansion-lead.png",
    category: "policy",
    dossierId: "NKM-NEW-POL-04",
    status: "Verified",
    date: "March 2026 - Present",
    link: "https://dis.community"
  },

  // PILLAR_ADVOCACY (New)
  {
    id: "new-advocacy-ai-presentation",
    title: "Disability Advocate at AI Engineer",
    subtitle: "Image of AI Engineer stage with Justin Baird (NASA, COP15, Microsoft...)",
    description: "Collaborated with Tesseract Art - a digital artist, a biotechnologist and Justin - to develop and showcase a novel, easy-to-use EEG-controlled assistive robotic arm by painting the Rare Disorders Society of Singapore's mascot and sharing my story.",
    imagePath: "/assets/images/ai-engineer-tesseract-presentation.png",
    category: "advocacy",
    dossierId: "NKM-NEW-ADV-02",
    status: "Dossier Filed",
    date: "17 May 2026"
  },
  {
    id: "new-advocacy-suss-conf-exhibit",
    title: "SUSS Well-being Conference 2026 Exhibitor",
    subtitle: "Abstract Acceptance Email For Upcoming Exhibit",
    description: "Showcasing photography work and short talk for disability advocacy. ",
    imagePath: "/assets/images/suss-well-being-conference-2026-exhibit-abstract-acceptance.png",
    category: "advocacy",
    dossierId: "NKM-NEW-ADV-01",
    status: "Verified",
    date: "May 2026",
    link: "https://www.suss.edu.sg/news-events/happenings/events/detail/2026/09/01/default-calendar/dr-alan-hj-chan-well-being-conference-2026-(re-define-success-conference-series)"
  },

  // PILLAR_ACADEMIC (New)
  {
    id: "new-academic-suss-conf-panel",
    title: "SUSS Well-being Conference 2026 Panelist",
    subtitle: "Email thread showing proposed revision and tentative acceptance of abstract",
    description: "Invited as an industry expert on volunteerism. Panel to be confirmed - pending confirmation of other invited panelists.",
    imagePath: "/assets/images/suss-well-being-conference-2026-panel-abstract-acceptance.png",
    category: "advocacy",
    dossierId: "NKM-NEW-ADV-01",
    status: "Verified",
    date: "May 2026",
    link: "https://www.suss.edu.sg/news-events/happenings/events/detail/2026/09/01/default-calendar/dr-alan-hj-chan-well-being-conference-2026-(re-define-success-conference-series)"
  },
  {
    id: "new-academic-synthica-journal",
    title: "Synthica Journal Ethics Review Board Director",
    subtitle: "Confirmation by Executive Director, Snippet of Proposed TOM, Snippet of Web Deisgn Wireframe",
    description: "Directing the design and formal setup of AI-informed ethical guidelines, reproducibility metrics, and transparent governance of AI usage.",
    imagePath: "/assets/images/synthica-journal-ethics-review-board-director.png",
    category: "academic",
    dossierId: "NKM-NEW-ACA-01",
    status: "Verified",
    date: "April 2026 - Present",
  },
  {
    id: "new-academic-equity-economics",
    title: "Equity Economics Lab Senior Policy Advisor",
    subtitle: "Confirmation Email by Founder",
    description: "Providing volunteer advisory and mentorship to young, emerging economic researchers in underprivileged and underserved communities for education-driven empowerment.",
    imagePath: "/assets/images/equity-economics-lab-senior-policy-advisor.png",
    category: "academic",
    dossierId: "NKM-NEW-ACA-02",
    status: "Dossier Filed",
    date: "April 2026 - Present"
  }
];

export const HISTORICAL_ACHIEVEMENTS: Achievement[] = [
  // PILLAR_POLICY (Old)
  {
    id: "old-policy-otci",
    title: "nEbO (NTUC) Youth Leader & Graduate of OTCi Labour Leadership Institute",
    subtitle: "",
    description: "Volunteered at nEbO for 5 years, nominated as Youth Leader, youngest in NDP contingent. Deeply interested in Labour Economics.",
    imagePath: "/assets/images/otci-labour-leadership-institute-nebo.png",
    category: "policy",
    dossierId: "NKM-HIST-POL-01",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-policy-ayan",
    title: "Country Director of ASEAN Youth Advocates Network (AYAN)",
    subtitle: "",
    description: "",
    imagePath: "/assets/images/asean-youth-advocates-network-vietnam.png",
    category: "policy",
    dossierId: "NKM-HIST-POL-02",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-policy-score",
    title: "SCORE USA Business Mentor - Official Partner of US Federal Small Business Administration",
    subtitle: "",
    description: "Email thread showing extremely selective admittance process and confirmation of acceptance.",
    imagePath: "/assets/images/score-usa-business-mentor.png",
    category: "policy",
    dossierId: "NKM-HIST-POL-03",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-policy-dhs",
    title: "Dunman High Model ASEAN Plus Summit 2017",
    subtitle: "",
    description: "",
    imagePath: "/assets/images/dunman-high-model-asean-summit.png",
    category: "policy",
    dossierId: "NKM-HIST-POL-04",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-policy-sirc",
    title: "Singapore International Relations Conference 2018",
    subtitle: "",
    description: "",
    imagePath: "/assets/images/singapore-international-relations-conference.png",
    category: "policy",
    dossierId: "NKM-HIST-POL-05",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-policy-unas-mun",
    title: "United Nations Association of Singapore MUN 2017",
    subtitle: "",
    description: "",
    imagePath: "/assets/images/unas-mun-preparatory-conference.png",
    category: "policy",
    dossierId: "NKM-HIST-POL-06",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },

  // PILLAR_ADVOCACY (Old)
  {
    id: "old-advocacy-surge",
    title: "Carry Hope Fundraiser - Disability Advocate & Artist",
    subtitle: "",
    description: "Collaborative exhibit with world-renowned Beijing artist Liu Bolin. Surge, which signifies the painful yet magestic, electrocuting yet electrifying, perservering energy of PWDs; and a powerful shot of Singapore's skyline beyond the confines of the HDB home that people with mobility restrictions stay in. Sold to Vincent Chai, Global CEO of KIN with 100% proceeds to RDSS.",
    imagePath: "/assets/images/surge-disability-advocacy.png", // "/assets/images/hdb-photography-disability-advocacy.png" "/assets/images/surge-auction-rdss-fundraiser.png"
    category: "advocacy",
    dossierId: "NKM-HIST-ADV-01",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-advocacy-7cups-intern",
    title: "7 Cups Internship Student Track with Honors",
    subtitle: "",
    description: "Underwent rigorous training and supervised chats to volunteer as a mental health supporter to build empathy. Additionally earned Community Building Certification.",
    imagePath: "/assets/images/seven-cups-internship-honors.png",
    category: "advocacy",
    dossierId: "NKM-HIST-ADV-02",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-advocacy-fullspectrum",
    title: "Research Fellowship at Full Spectrum Agency for Autistic Adults",
    subtitle: "",
    description: "Presented at Navigating Autism Today Conference and gave a 1-hour lecture at Grand Valley State University.",
    imagePath: "/assets/images/research-fellowship-full-spectrum-agency.png",
    category: "advocacy",
    dossierId: "NKM-HIST-ADV-03",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  },

  // PILLAR_ACADEMIC (Old)
  {
    id: "old-academic-google-pm",
    title: "Google Project Management Certificate",
    subtitle: "",
    description: "",
    imagePath: "/assets/images/google-project-management-cert.png",
    category: "academic",
    dossierId: "NKM-HIST-ACA-01",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-academic-lse",
    title: "London School of Economics (LSE) Certificate",
    subtitle: "",
    description: "To prove proficiency in Economics, Applied Statistics and Essay-Writing.",
    imagePath: "/assets/images/lse-certificate.png",
    category: "academic",
    dossierId: "NKM-HIST-ACA-02",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-academic-uci-economics",
    title: "The Power of Microeconomics Course",
    subtitle: "",
    description: "",
    imagePath: "/assets/images/uci-microeconomics-certificate.png",
    category: "academic",
    dossierId: "NKM-HIST-ACA-03",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-academic-aws-adv",
    title: "Advanced Architecting on AWS Certificate",
    subtitle: "",
    description: "Underwent training in AWS solution architecture to provide affordable technical support to my nonprofit initiatives.",
    imagePath: "/assets/images/aws-advanced-architecting-cert.png",
    category: "academic",
    dossierId: "NKM-HIST-ACA-04",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-academic-schoolhouse",
    title: "Schoolhouse.world Research Workshop & Mentorship",
    subtitle: "",
    description: "",
    imagePath: "/assets/images/schoolhouse-world-research-workshop.png",
    category: "academic",
    dossierId: "NKM-HIST-ACA-05",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-academic-sjbo",
    title: "Singapore Junior Biology Olympiad 2017",
    subtitle: "",
    description: "",
    imagePath: "/assets/images/singapore-junior-biology-olympiad.png",
    category: "academic",
    dossierId: "NKM-HIST-ACA-06",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-academic-ydsp",
    title: "YDSP Cryptography Programme",
    subtitle: "",
    description: "Proof of proficiency in math. Trained in cryptography to understand information security.",
    imagePath: "/assets/images/ydsp-cryptography.png",
    category: "academic",
    dossierId: "NKM-HIST-ACA-07",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-academic-phil14",
    title: "14th Inter-School Philosophy Dialogue",
    subtitle: "",
    description: "In 2017, studied logic, including standard syntax of argument analysis, common syllogisms and critical thinking.",
    imagePath: "/assets/images/14th-inter-school-philosophy-dialogue.png",
    category: "academic",
    dossierId: "NKM-HIST-ACA-08",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-academic-phil15",
    title: "15th Inter-School Philosophy Dialogue",
    subtitle: "",
    description: "In 2018, dove into ethics and advocacy, including political philosophy literature such as On Liberty by J.S. Mill.",
    imagePath: "/assets/images/15th-inter-school-philosophy-dialogue.png",
    category: "academic",
    dossierId: "NKM-HIST-ACA-09",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-academic-robocup",
    title: "RoboCup Singapore Open 2018 Gold Medalist",
    subtitle: "",
    description: "To prove proficiency in sciences and mathematics (used vector algorithms for robot path planning).",
    imagePath: "/assets/images/robocup-singapore-open-2018-gold.png", // "/assets/images/raffles-colours-outstanding-award.png"
    category: "academic",
    dossierId: "NKM-HIST-ACA-10",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-academic-dso-ctf-winner",
    title: "DSO World of Science CTF Winner 2019",
    subtitle: "",
    description: "Trained at DSO to understand governance, risk and compliance (GRC) for implementation into policywork.",
    imagePath: "/assets/images/dso-world-of-science-ctf-2019.png", // "/assets/images/dso-world-of-science-ctf-academic-2019.png"
    category: "academic",
    dossierId: "NKM-HIST-ACA-11",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-academic-mit-scholarship",
    title: "MIT Master of Applied Science Scholarship Offer",
    subtitle: "",
    description: "To prove proficiency in Data Science, Economics and Policy Design. Did not complete - critical illness in immediate family.",
    imagePath: "/assets/images/mit-mas-data-economics-policy-scholarship.png",
    category: "academic",
    dossierId: "NKM-HIST-ACA-12",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  },
  { 
    id: "old-academic-chinese-proficiency",
    title: "HSK Level 5",
    subtitle: "",
    description: "To prove proficiency in Chinese Language.",
    imagePath: "/assets/images/hsk-level-5.png",
    category: "academic",
    dossierId: "NKM-HIST-ACA-13",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  },


  // PILLAR_CULTURE (Old)
  {
    id: "old-culture-ccp",
    title: "Chinese Cultural Programme Selection",
    subtitle: "",
    description: "",
    imagePath: "/assets/images/chinese-cultural-programme.png",
    category: "culture",
    dossierId: "NKM-HIST-CUL-01",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-culture-ignite",
    title: "Camp Ignite! 2018",
    subtitle: "",
    description: "Racial Harmony Camp.",
    imagePath: "/assets/images/camp-ignite-2018.png",
    category: "culture",
    dossierId: "NKM-HIST-CUL-02",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-culture-borobudur",
    title: "Borobudur Relief",
    subtitle: "",
    description: "Taken on my travels through Indonesia and Malaysia to study religious anthropology as part of Area Studies (Southeast Asia) programme.",
    imagePath: "/assets/images/borobudur-relief-study.png",
    category: "culture",
    dossierId: "NKM-HIST-CUL-03",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-culture-wayangwong",
    title: "Wayang Wong Performer",
    subtitle: "",
    description: "Taken during my anthropological field expedition - comparative analysis of minority village response to majority influence along the Indonesia-Malaysia border.",
    imagePath: "/assets/images/wayang-wong-performance.png",
    category: "culture",
    dossierId: "NKM-HIST-CUL-04",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-culture-kulit",
    title: "Young Wayang Kulit Performers",
    subtitle: "",
    description: "",
    imagePath: "/assets/images/young-wayang-kulit-performers.png",
    category: "culture",
    dossierId: "NKM-HIST-CUL-05",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-culture-batam",
    title: "Batam Village Food Drive w/ IBM",
    subtitle: "",
    description: "",
    imagePath: "/assets/images/batam-village-volunteerism.png",
    category: "culture",
    dossierId: "NKM-HIST-CUL-06",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  }
];
