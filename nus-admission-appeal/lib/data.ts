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
    subtitle: "Collaborating with Smart Cities Network and NGWT",
    description: "Providing policy advisorey inputs for the cross-border Special Economic Zone (SEZ). Focusing on smart-entry logistics, technical workforce mobility frameworks, and regional regulatory synchronization models targeting clean digital integration.",
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
    subtitle: "Skill Taxonomy Mapping & Educational Evaluation",
    description: "Project: 'Formalising Skills Alignment in Volunteer Programme Evaluation for Education Policy Reform in Industry 5.0'. Implemented advanced NLP semantic embeddings to parse, extract, and map volunteer program evaluation taxons against standard entry-level occupational market requirements to inform civil policy reformers.",
    imagePath: "/assets/images/scientific-ai-for-development-lab-lead-researcher.png",
    category: "policy",
    dossierId: "NKM-NEW-POL-02",
    status: "Verified",
    date: "March 2026 - Present",
    link: "https://github.com/ngkaiming/scientific-ai-dev-skills"
  },
  {
    id: "new-policy-greenio",
    title: "Greenio.tech Policy Advisor",
    subtitle: "APAC e-Waste Reduction Project & Circular Economy",
    description: "Architecting policy frameworks to coordinate e-waste collection incentives with municipal regulations across ASEAN urban testbeds. Directing cross-border compliance research to ease technical trade friction in remanufactured silicon components.",
    imagePath: "/assets/images/greenio-tech-policy-advisor.png",
    category: "policy",
    dossierId: "NKM-NEW-POL-03",
    status: "Dossier Filed",
    date: "March 2026 - Present"
  },
  {
    id: "new-policy-dis",
    title: "DIS Community APAC Expansion Lead",
    subtitle: "Decentralised Open-Informatics and Policy Systems",
    description: "Leading regional expansion strategies to promote localized knowledge-sharing networks. Authoring compliance guidelines for cross-border civic technology deployment, ensuring coordination with national data privacy statutes in APAC.",
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
    title: "AI Engineer Presentation with Tesseract Art",
    subtitle: "AI Technologist & Disability Advocate",
    description: "Presented keynotes analyzing how multi-modal consumer generative AI can serve as cognitive prosthetics for neurodivergent and physically disabled student demographics, highlighting the intersections of digital sovereignty and universal design.",
    imagePath: "/assets/images/ai-engineer-tesseract-presentation.png",
    category: "advocacy",
    dossierId: "NKM-NEW-ADV-02",
    status: "Dossier Filed",
    date: "17 May 2026"
  },
  {
    id: "new-advocacy-suss-conf-exhibit",
    title: "SUSS Well-being Conference 2026 Exhibit",
    subtitle: "Invited Art Exhibitor - Disability Advocate",
    description: "Co-authored two key papers accepted at SUSS: One focusing on modern structural volunteerism dynamics, and the second analyzing systemic accessibility gaps in regional post-secondary educational infrastructures.",
    imagePath: "/assets/images/suss-well-being-conference-2026-exhibit-abstract-acceptance.png",
    category: "advocacy",
    dossierId: "NKM-NEW-ADV-01",
    status: "Verified",
    date: "May 2026",
    link: "https://www.suss.edu.sg/news-and-events/conferences"
  },

  // PILLAR_ACADEMIC (New)
  {
    id: "new-academic-suss-conf-panel",
    title: "SUSS Well-being Conference 2026 Panel Abstract Acceptance",
    subtitle: "Invited Panelist for Day 2, Volunteerism",
    description: "Co-authored two key papers accepted at SUSS: One focusing on modern structural volunteerism dynamics, and the second analyzing systemic accessibility gaps in regional post-secondary educational infrastructures.",
    imagePath: "/assets/images/suss-well-being-conference-2026-panel-abstract-acceptance.png",
    category: "advocacy",
    dossierId: "NKM-NEW-ADV-01",
    status: "Verified",
    date: "May 2026",
    link: "https://www.suss.edu.sg/news-and-events/conferences"
  },
  {
    id: "new-academic-synthica-journal",
    title: "Synthica Journal Ethics Review Board Director",
    subtitle: "Establishing Advanced Multi-Agent Ethics Checklists",
    description: "Directing the design and formal setup of AI-informed peer review guidelines, reproducibility metrics, and secure scholarly data handling frameworks. Working to establish guardrails on model outputs in computational humanities publications.",
    imagePath: "/assets/images/synthica-journal-ethics-review-board-director.png",
    category: "academic",
    dossierId: "NKM-NEW-ACA-01",
    status: "Verified",
    date: "April 2026 - Present",
    link: "https://synthicajournal.org/ethics"
  },
  {
    id: "new-academic-equity-economics",
    title: "Equity Economics Lab Senior Policy Advisor",
    subtitle: "Macroeconomic Interventions and Marginalized Community Uplift",
    description: "Providing data-driven counsel on the efficacy of unconditional cash transfer systems vs targeted training vouchers. Leveraging regional survey metrics to build general equilibrium parameters measuring developmental changes in Southeast Asian hinterlands.",
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
    title: "OTCi Labour Leadership Institute",
    subtitle: "nEbO’s Youth Leadership Development Programme",
    description: "Completed rigorous civic leadership training with the Ong Teng Cheong Labour Leadership Institute, formulating model proposals on structural gig-worker union protections and youth-led sector representation councils in dense administrative nodes.",
    imagePath: "/assets/images/otci-labour-leadership-institute-nebo.png",
    category: "policy",
    dossierId: "NKM-HIST-POL-01",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-policy-ayan",
    title: "ASEAN Youth Advocates Network (AYAN)",
    subtitle: "Country Director of Vietnam Selection",
    description: "Directed youth advocacy channels, coordinating bilateral socio-cultural dialogue workshops between Vietnamese student leaders and Singaporean youths, mapping youth-led policy contributions toward United Nations SDG targets.",
    imagePath: "/assets/images/asean-youth-advocates-network-vietnam.png",
    category: "policy",
    dossierId: "NKM-HIST-POL-02",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-policy-score",
    title: "SCORE USA Business Mentor Selection",
    subtitle: "Socio-Economic Advisory Work",
    description: "Provided functional administrative mentoring to micro-entrepreneurs in distressed urban layouts, implementing financial spreadsheet modeling and local SEO compliance plans to reverse pandemic-induced customer shortfalls.",
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
    subtitle: "Official Student Delegate Representing Regional Geopolitics",
    description: "Debated regional economic cooperation under the ASEAN Socio-Cultural Community blueprint, authoring regional draft agreements focusing on mitigating transboundary carbon hazards across maritime frontiers.",
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
    subtitle: "Undergraduate Policy Roundtables Delegate",
    description: "Participated in strategic roundtables discussing major power dynamics in the Indo-Pacific region, examining Singapore's key diplomatic leverage within multilateral Southeast Asian frameworks.",
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
    subtitle: "Preparatory Conference Delegate",
    description: "Represented official state positions in human rights frameworks. Formulated draft resolutions outlining pathways to eliminate educational marginalization among rural agricultural communities.",
    imagePath: "/assets/images/unas-mun-preparatory-conference.png",
    category: "policy",
    dossierId: "NKM-HIST-POL-06",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },

  // PILLAR_ADVOCACY (Old)
  {
    id: "old-advocacy-surge-dis",
    title: "Surge - Disability Advocacy Initiative",
    subtitle: "Founder and Lead Accessibility Designer",
    description: "Designed multi-modal pathways and cognitive mapping workflows to represent disability narratives. Collaborated directly with local support groups to translate individual systemic barriers into concrete urban planning change requests.",
    imagePath: "/assets/images/surge-disability-advocacy.png",
    category: "advocacy",
    dossierId: "NKM-HIST-ADV-01",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-advocacy-hdb-photo",
    title: "HDB Photography - Disability Advocacy",
    subtitle: "Curating Spatial Inclusivity Portrayals",
    description: "Commissioned to photograph HDB community layouts, capturing and showcasing the lived utility experiences of wheelchair-bound and neurodivergent residents navigating physical and emotional infrastructures.",
    imagePath: "/assets/images/hdb-photography-disability-advocacy.png",
    category: "advocacy",
    dossierId: "NKM-HIST-ADV-02",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-advocacy-surge-auction",
    title: "‘Surge’ Canvas Painting Action to Vincent Chai",
    subtitle: "Rare Disorders Society Singapore (RDSS) Fundraiser",
    description: "Successfully conceptualized and auctioned a custom-designed painting ('Surge') to philanthropist Vincent Chai, raising essential funding units to sponsor specialized medical device procurement programs.",
    imagePath: "/assets/images/surge-auction-rdss-fundraiser.png",
    category: "advocacy",
    dossierId: "NKM-HIST-ADV-03",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-advocacy-7cups-intern",
    title: "7 Cups Internship Student Track with Honors",
    subtitle: "Honors Graduate Peer Counselor",
    description: "Acquired critical behavioral health intake exposure, coordinating peer volunteer circles and structuring mental health resource directories for neurodivergent high school cohorts.",
    imagePath: "/assets/images/seven-cups-internship-honors.png",
    category: "advocacy",
    dossierId: "NKM-HIST-ADV-05",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-advocacy-fullspectrum",
    title: "Research Fellowship at Full Spectrum Agency for Autistic Adults",
    subtitle: "USA-based Adult Disability Policy Institute",
    description: "Conducted remote fellowship studies tracking adult transition outcomes for diagnosed individuals, authoring a meta-analysis evaluating the integration parameters of localized supported employment codes.",
    imagePath: "/assets/images/research-fellowship-full-spectrum-agency.png",
    category: "advocacy",
    dossierId: "NKM-HIST-ADV-06",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  },

  // PILLAR_ACADEMIC (Old)
  {
    id: "old-academic-google-pm",
    title: "Google Project Management Certificate",
    subtitle: "Professional Credential in Process & Agile Methodologies",
    description: "Mastered operational frameworks, strategic scaling, project milestones mapping, budget estimations, risk calculations, and extensive workspace resource optimization parameters.",
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
    subtitle: "Socio-Economic Policy Foundations Studies",
    description: "Analyzed micro-policy structural issues, identifying institutional mechanisms linking educational disparity, geographic mobility barriers, and wage stagnation patterns.",
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
    subtitle: "University of California, Irvine (UCI) - Honors Grade",
    description: "Formulated rigorous analysis on price elasticity indexes, perfect competition vs rent-seeking monopolies, and game theory structures illustrating regional environmental treaties.",
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
    subtitle: "AWS-ADVARC - Solutions Architecture Systems",
    description: "Engineered scalable cloud network diagrams incorporating multi-region failovers, relational data routing shards, decoupled worker queues, and robust encryption protocols.",
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
    subtitle: "Khan Academy Affiliate Online Education Studies",
    description: "Evaluated data streams mapping student performance against automated tutoring cycles, compiling statistical briefs showing high response ratios for math anxiety treatments.",
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
    subtitle: "National High School Biology Competition Runner-up",
    description: "Demonstrated advanced domain knowledge in cellular transport mechanisms, genetics systems, taxonomy frameworks, evolutionary dynamics, and regional bio-diversity trends.",
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
    subtitle: "Youth Defence Science Programme High-Level Lab",
    description: "Immersed in asymmetric encryption architectures, modular mathematics, RSA key exchange logic, hash collision vectors, and quantum-resistant cryptography concepts.",
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
    subtitle: "Debating Epistemic Justice & Ethics",
    description: "Presented philosophical briefs dissecting epistemic injustice in contemporary legal systems, analyzing how class structures distort the validation of witness evidence.",
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
    subtitle: "Special Panel Speaker on AI & Existential Ethics",
    description: "Delivered synthesis of non-western ethical paradigms in the framing of autonomous agent deployments, highlighting how Confucian relational obligations reshape alignment theories.",
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
    subtitle: "RCAP CoSpace Rescue Category (Asia-Pacific)",
    description: "Engineered path-finding path logics, ultrasonic alignment algorithms, and multi-sensor routing states, securing absolute top rank in autonomous digital rescue operations. "
                 + "Presented with the institutional Colors citation for leading the engineering development, systems architecture, and codebases in international competitions.",
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
    subtitle: "Cybersecurity, Cryptography Capture the Flag & Security Architecture Track",
    description: "Secured top rankings in military cyber-defense challenges. Resolved complex buffer-overflow exploits, reverse-engineered binaries, and identified administrative vulnerabilities on simulated critical industrial networks."
                + "Identified memory management leaks in legacy IoT assemblies and compiled vulnerability reports recommending specific modern static buffer solutions.",
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
    subtitle: "Data, Economics, and Design of Policy (Omitted Attendance)",
    description: "Offered a highly selective institutional scholarship to complete postgraduate study modules focusing on quantitative random controlled trials (RCT) for development policy.",
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
    subtitle: "Examination Report",
    description: "Acheived results of top 70 percentile",
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
    subtitle: "Southeast Asian Sinology and Literary Traditions studies",
    description: "Explored Sinophone intellectual movements, researching local migration historical texts and classical Chinese idioms integrated into regional Southeast Asian literature patterns.",
    imagePath: "/assets/images/chinese-cultural-programme.png",
    category: "culture",
    dossierId: "NKM-HIST-CUL-01",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-culture-ignite",
    title: "Camp Ignite! 2018 Team Leader",
    subtitle: "Socio-Cultural Cohesion & Integration",
    description: "Coordinated cultural heritage appreciation activities and group dynamics exercises, fostering inter-ethnic bonds and dialog circles among over 150 diverse local student leaders.",
    imagePath: "/assets/images/camp-ignite-2018.png",
    category: "culture",
    dossierId: "NKM-HIST-CUL-02",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-culture-borobudur",
    title: "Borobudur Relief Research Analysis",
    subtitle: "Javanese Epigraphy and Buddhist Devotional Art History",
    description: "Investigated Javanese architecture layouts and stone-relief art, linking ancient Sanskrit epigraphy details to historic patterns of Maritime Trade Route merchant systems across Indonesia.",
    imagePath: "/assets/images/borobudur-relief-study.png",
    category: "culture",
    dossierId: "NKM-HIST-CUL-03",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-culture-wayangwong",
    title: "Wayang Wong Performer Selection",
    subtitle: "Traditional Javanese Classical Theatre Performance",
    description: "Trained in traditional epic court-theatre dance steps, performing classical choreography during bilateral diplomatic gatherings celebrating bilateral cooperation policies.",
    imagePath: "/assets/images/wayang-wong-performance.png",
    category: "culture",
    dossierId: "NKM-HIST-CUL-04",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-culture-kulit",
    title: "Young Wayang Kulit Performers Platform",
    subtitle: "Puppet Master Apprentice Studies",
    description: "Apprenticed in leather puppet carving and epic shadow theater stories, analyzing ancient Javanese moral philosophy frameworks from historic oral retellings.",
    imagePath: "/assets/images/young-wayang-kulit-performers.png",
    category: "culture",
    dossierId: "NKM-HIST-CUL-05",
    status: "Dossier Filed",
    date: "Pre-March 2026",
    isNew: false
  },
  {
    id: "old-culture-batam",
    title: "Batam Village Community Development",
    subtitle: "Humanitarian Civic Construction",
    description: "Spent extensive time constructing educational facilities and configuring rain-harvest irrigation units in dry agricultural villages across Riau Islands, Indonesia.",
    imagePath: "/assets/images/batam-village-volunteerism.png",
    category: "culture",
    dossierId: "NKM-HIST-CUL-06",
    status: "Verified",
    date: "Pre-March 2026",
    isNew: false
  }
];
