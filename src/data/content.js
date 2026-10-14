/**
 * CLIENT CONTENT REPOSITORY: RAVINDRANAATH C
 * 
 * Instructions:
 * - All text, statistics, dates, and contact information are centralized in this file.
 * - Any information flagged as requiring client confirmation is clearly documented below.
 * - Change values here and they will immediately reflect across the entire website.
 */

export const CLIENT_CONFIG = {
  // Years of Experience:
  // Note: The PDF states 37 years on the cover, 36 years in one section, and "over 30 years" elsewhere.
  // Standardized to "37" here, easily adjustable in this single location:
  yearsOfExperience: "37",
  
  // Primary Contact Details
  // Note: The PDF mentions three emails: ravi.slrgroup@gmail.com (signature), smileravee@gmail.com, and raveeinsurance@lntecc.com.
  // Using ravi.slrgroup@gmail.com as the primary operational address.
  primaryEmail: "ravi.slrgroup@gmail.com",
  secondaryEmail: "smileravee@gmail.com",
  phone: "+91 99623 21356",
  phoneDisplay: "+91 99623 21356",
  location: "Hyderabad & Chennai, India",
  officeAddress: "[Office Address to be confirmed by client]", // Placeholder
  availabilityNote: "Available for yearly contracts (full time) with hospitals, MNCs, corporates, logistics, security companies, and institutions.",
};

export const NAVIGATION = {
  logo: {
    title: "Ravindranaath C",
    subtitle: "Insurance & Risk Specialist",
  },
  links: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Career Journey", href: "#career" },
    { label: "Achievements", href: "#achievements" },
    { label: "Media & Writing", href: "#media" },
    { label: "Contact", href: "#contact" },
  ],
  ctaButton: "Contact Me",
};

export const HERO_SECTION = {
  headlinePrefix: "All The Way – With You",
  headlineAccent: "Your Man in India",
  subtext: `Insurance, Loss Prevention & Risk Management Professional with over ${CLIENT_CONFIG.yearsOfExperience} years of experience`,
  primaryCta: "Get a Consultation",
  secondaryCta: "Read My Story",
  floatingBadge: {
    role: "CEO & MD",
    organization: "SLR-Industrial Security & Facility Services",
  },
  portraitPlaceholder: {
    label: "[PHOTO: Ravindranaath C – professional portrait]",
    caption: "Senior Insurance & Loss Prevention Specialist",
    alt: "Ravindranaath C Professional Portrait Placeholder",
  },
};

export const SERVICES_SECTION = {
  eyebrow: "AREAS OF EXPERTISE",
  title: "Professional Services & Solutions",
  subtitle: "Decades of proven leadership in navigating insurance claims, risk management, and protective facility services.",
  services: [
    {
      id: "motor-vehicle",
      title: "Motor & Vehicle Insurance Claims",
      shortDesc: "Third-party and own-damage claims for accidents, theft, fire, and natural calamities.",
      fullDesc: "Specialized advocacy and settlement handling for motor vehicle accidental third-party claims and own-damage claims arising from accidental damage, theft, fire, and natural calamities. Ensuring transparent liaison between vehicle owners, surveyors, and insurance companies.",
      iconName: "CarFront",
      highlighted: false,
    },
    {
      id: "health-life",
      title: "Health & Life Insurance Benefits",
      shortDesc: "Medical claims, settlements, and guidance on personal and health insurance benefits.",
      fullDesc: "End-to-end guidance through complex medical claims and settlements. Resolving disputes between insurers, TPAs, and hospitals to safeguard legitimate medical and life coverage benefits for individuals and corporate employees.",
      iconName: "HeartPulse",
      highlighted: false,
    },
    {
      id: "loss-prevention",
      title: "Loss Prevention & Risk Management",
      shortDesc: "Loss prevention coordination, property and personal insurance coverage, claims, and compensation.",
      fullDesc: "Proactive loss prevention coordination, customized property and personal insurance advisory, risk assessment, and compensation advocacy. Backed by extensive corporate risk stewardship across thousands of personnel and heavy infrastructure projects.",
      iconName: "ShieldAlert",
      highlighted: true, // Navy card highlighted as in the reference design
    },
    {
      id: "industrial-security",
      title: "Industrial Security & Safety",
      shortDesc: "Industrial security, safety, protection, and manpower outsourcing services.",
      fullDesc: "Comprehensive security operations, industrial asset safety, premises protection, and organized manpower outsourcing. Available on yearly corporate retainers for institutions, manufacturing sites, logistics hubs, and hospitals.",
      iconName: "Building2",
      highlighted: false,
    },
  ],
};

export const ABOUT_SECTION = {
  eyebrow: "ABOUT ME",
  heading: "Guiding You Through Claims, Security & Confidence",
  narrativeParagraphs: [
    `A native of Hyderabad, qualified in General Insurance, who began his career with National Insurance Company Ltd (1978–2002) and built a career in insurance, industrial security, and customer care, including leadership roles at Larsen & Toubro Ltd (2013–2020) and his current role as CEO & MD of SLR-Industrial Security & Facility Services.`,
    `Over several decades of service, Ravindranaath has spearheaded critical risk management initiatives, navigated high-stakes claim negotiations, and bridged communication across administrative and regulatory tiers.`
  ],
  imagePlaceholder: {
    label: "[PHOTO: Ravindranaath C – working / meeting photo]",
    caption: "Executive in consultation & corporate review",
    alt: "Ravindranaath C Working / Meeting Photo Placeholder",
  },
  highlights: [
    "People's person who is at ease in cutting across hierarchies",
    "Interfacing with top government officials, ministers, and policy makers",
    "Helping employees with claims disputes between insurers and hospitals",
  ],
  personalPhilosophy: {
    quotes: [
      "People's person, who is at ease in cutting across hierarchies",
      "Life is beautiful, if used properly",
      "If We Don't Change, We Don't Grow. If We Don't Grow, We Are Not Living.",
    ],
  },
};

export const CAREER_JOURNEY_SECTION = {
  eyebrow: "PROFESSIONAL RECORD",
  title: "Career Journey",
  subtitle: "A distinguished progression across public sector insurance, major infrastructure conglomerates, and executive security leadership.",
  timeline: [
    {
      period: "2023 – Present",
      role: "CEO & MD",
      organization: "SLR-Industrial Security & Facility Services",
      description: "Executive management of industrial security operations, detective and facility services, and specialized manpower outsourcing.",
      badge: "Current Leadership",
    },
    {
      period: "2013 – 2020",
      role: "Senior Insurance Coordinator cum Service Delivery Leader",
      organization: "Larsen & Toubro Ltd (L&T Constructions, HQ Chennai)",
      description: "Risk Management Advisor / Consultant. Managed 35,000+ L&T employees across Indian project sites and international locations.",
      badge: "Corporate Leadership",
    },
    {
      period: "2004 – 2012",
      role: "Director / CEO",
      organization: "Industrial Security, Detective Facility & Risk Management Services",
      description: "Led risk assessment, industrial detective services, and facility operations. [Note: Company legal entity name unreadable in PDF source; pending client confirmation].",
      badge: "Executive Management",
    },
    {
      period: "1978 – 2002",
      role: "Branch Manager (March 1978 – May 2002)",
      organization: "National Insurance Company Ltd (Owned by Govt. of India), Hyderabad",
      description: "Acknowledged as No. 1 Branch Manager among 44 branches and divisions in the Hyderabad Region. Declared Best Manager among regional offices.",
      badge: "Public Sector (Govt. of India)",
    },
    {
      period: "1974 – 1978",
      role: "Media Role: Production Assistant, Programmer, Presenter & Writer",
      organization: "All India Radio (AIR), Hyderabad",
      description: "Program production, feature presentation, and writing for state broadcasts. [Note: Printed as '1074' in scanned PDF, standardized here as 1974 pending client verification].",
      badge: "Broadcasting & Media",
    },
  ],
};

export const ACHIEVEMENTS_SECTION = {
  eyebrow: "KEY MILESTONES",
  title: "Achievements & Recognition",
  subtitle: "Measurable impact across organizational leadership, public service, and executive recognition.",
  stats: [
    {
      value: "35,000+",
      label: "Employees of L&T Managed",
      subtext: "Covered across Indian sites & overseas locations",
      iconName: "Users",
    },
    {
      value: "No. 1",
      label: "Branch Manager",
      subtext: "Among 44 branches & divisions in Hyderabad Region",
      iconName: "Award",
    },
    {
      value: "Best Manager",
      label: "Declared Regional Leader",
      subtext: "Awarded among the offices in the region",
      iconName: "Trophy",
    },
    {
      value: "Practical Man",
      label: "Practical Leadership Recognition",
      subtext: "Recognized as a practical man & modern writer",
      iconName: "Sparkles",
    },
  ],
  chiefGuestHonors: [
    {
      institution: "Bethanya Academy, Secunderabad",
      occasion: "School Day Celebration",
      date: "19 February 2002",
    },
    {
      institution: "Nazareth Academy Group, Avadi, Chennai",
      occasion: "Independence Day Celebration",
      date: "15 August 2019",
    },
  ],
  dignitariesMet: {
    heading: "High-Level Interfacing & Engagements",
    caption: "Interacted with dignitaries and leaders as documented in client profile:",
    names: [
      "President of India (R. Venkataraman)",
      "Prime Ministers of India (P.V. Narasimha Rao, Rajiv Gandhi)",
      "Governor of Tamil Nadu (Ch. Vidyasagar Rao)",
      "Governor of Reserve Bank of India (Dr. C. Rangarajan)",
      "Mother Teresa",
      "Chief Ministers of Andhra Pradesh (N.T. Rama Rao, N. Chandrababu Naidu)",
    ],
  },
};

export const WHY_CHOOSE_ME_SECTION = {
  eyebrow: "DEDICATION & APPROACH",
  title: "Why Work With Ravindranaath",
  subtitle: "Rooted in client empathy and practical problem-solving across insurance and safety challenges.",
  items: [
    {
      title: "Client-Centered Approach",
      description: "Your concerns are heard, understood, and addressed, the way we would expect for a loved one. Every claim or safety concern receives immediate, personalized advocacy.",
      placeholder: {
        label: "[PHOTO: client consultation / review]",
        caption: "One-on-one consultation with clients & claimants",
        alt: "Client Consultation Placeholder",
      },
    },
    {
      title: "Experienced Professional",
      description: "Efficiently managed claims and benefits for thousands of employees, bridging the gap between companies, hospitals, and insurers to secure rightful coverage.",
      placeholder: {
        label: "[PHOTO: team / meeting]",
        caption: "Coordination with hospital TPAs & insurance executives",
        alt: "Professional Meeting Placeholder",
      },
    },
  ],
};

export const TESTIMONIALS_SECTION = {
  eyebrow: "COLLEAGUE & EXECUTIVE ENDORSEMENTS",
  title: "What Colleagues & Leaders Say",
  subtitle: "Exact testimonials from senior corporate executives at Larsen & Toubro Ltd.",
  testimonials: [
    {
      quote: "Proud to have a colleague like you!!",
      author: "Vivek Kumar Dubey",
      designation: "DGM-HR",
      organization: "Larsen & Toubro Ltd",
    },
    {
      quote: "You are rendering an outstanding service and support to the needy people.",
      author: "N. Nachiappan",
      designation: "DGM-Finance",
      organization: "Larsen & Toubro Ltd",
    },
  ],
};

export const MEDIA_AND_WRITING_SECTION = {
  eyebrow: "CREATIVE & EDITORIAL PURSUITS",
  title: "Media & Writing",
  subtitle: "A parallel lifelong contribution to journalism, Telugu literature, and corporate publication.",
  cards: [
    {
      title: "Literary & Dramatic Works",
      description: "Written and published many Telugu stories, features, and plays reflecting human experience and social themes.",
      category: "Literature",
      iconName: "BookOpen",
    },
    {
      title: "All India Radio Broadcasting",
      description: "Presented news reels and cultural programs on All India Radio (AIR) Hyderabad.",
      category: "Broadcasting",
      iconName: "Radio",
    },
    {
      title: "Magazine Publications",
      description: "Stories and cultural articles published in leading weekly magazines including Andhra Patrika, Andhra Jyoti, and Mayuri.",
      category: "Periodicals",
      iconName: "Newspaper",
    },
    {
      title: "L&T In-House e-Magazine (2014–2020)",
      description: "Spearheaded the concept, compilation, and editorial direction of the official in-house e-Magazine at Larsen & Toubro.",
      category: "Corporate Publishing",
      iconName: "FileEdit",
    },
  ],
  quoteBlock: {
    quote: "Life is beautiful, if used properly.",
    author: "Ravindranaath C",
    tagline: "All The Way – With You – Your Man in India",
  },
};

export const MEMBERSHIPS_SECTION = {
  eyebrow: "AFFILIATIONS & COMMUNITY",
  title: "Honorary & Professional Memberships",
  subtitle: "Active involvement across professional councils, social initiatives, and charitable foundations.",
  items: [
    "Lions Club",
    "YMCA",
    "Red Cross Society",
    "Public Relations Society",
    "South India Film Chambers",
    "Loss Prevention Association of India",
    "Claims Care Insurance Help Line Society of India",
    "Forum for Social Upliftment (FOSP)",
    "Mother Teresa Charity Home for Aged and Orphan Children",
  ],
};

export const CTA_BANNER = {
  headline: "Do You Need Help With an Insurance Claim or Security Concern?",
  subtext: "Get direct, professional guidance on accidental claims, hospital settlements, or industrial facility security.",
  buttonText: "Book a Consultation",
};

export const CONTACT_SECTION = {
  eyebrow: "GET IN TOUCH",
  title: "Contact & Consultations",
  subtitle: "Reach out for personal claims assistance, corporate insurance coordination, or industrial security retainers.",
  details: {
    phone: CLIENT_CONFIG.phone,
    email: CLIENT_CONFIG.primaryEmail,
    locations: "Hyderabad & Chennai",
    addressPlaceholder: CLIENT_CONFIG.officeAddress,
    availability: CLIENT_CONFIG.availabilityNote,
  },
  form: {
    nameLabel: "Your Full Name",
    emailLabel: "Email Address",
    phoneLabel: "Phone Number",
    serviceLabel: "Area of Interest",
    servicesList: [
      "Motor & Vehicle Insurance Claims",
      "Health & Life Insurance Benefits",
      "Loss Prevention & Risk Management",
      "Industrial Security & Facility Retainer",
      "General Consultation",
    ],
    messageLabel: "How can Ravindranaath assist you?",
    submitButton: "Send Inquiry",
  },
};

export const FOOTER_SECTION = {
  logo: "Ravindranaath C",
  tagline: "All The Way – With You",
  subTagline: "Insurance, Loss Prevention & Industrial Security Advisory",
  copyright: `© 2026 Ravindranaath C. All rights reserved.`,
  verificationNotice: "Client profile compiled directly from documented records. Clarifications noted for confirmation.",
};
