/**
 * CLIENT CONTENT REPOSITORY: RAVINDRANAATH C
 * 
 * Instructions:
 * - All text, numbers, statistics, and contact details are stored here in one central place.
 * - Editable constants: yearsOfExperience, primaryEmail, phone, officeAddress, etc.
 */

export const CLIENT_CONFIG = {
  // Years of Experience constant (PDF mentions 37 years, 36 years, and 30+ years):
  yearsOfExperience: "37",

  // Contact Constants (PDF prints three emails; ravi.slrgroup@gmail.com is primary):
  primaryEmail: "ravi.slrgroup@gmail.com",
  phone: "+91 99623 21356",
  phoneDisplay: "+91 99623 21356",
  location: "Hyderabad / Chennai",
  officeAddress: "[ADDRESS: to be provided by client]",
  tagline: "All The Way – With You",
};

export const NAVIGATION = {
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Journey", href: "#journey" },
    { label: "Media", href: "#media" },
    { label: "Contact", href: "#contact" },
  ],
  ctaButton: "Contact Me",
};

export const HERO_SECTION = {
  eyebrow: "Insurance · Loss Prevention · Risk Management",
  headlineLine1: "All The Way",
  headlineLine2: "Your Man in India",
  subtext: `Insurance, loss prevention and risk management professional with over ${CLIENT_CONFIG.yearsOfExperience} years of experience. A people's person, at ease across every level of an organization.`,
  primaryCta: "Get a Consultation",
  secondaryCta: "Read My Story",
  floatingBadge: "CEO & MD, SLR-Industrial Security & Facility Services",
  photoPlaceholder: "[PHOTO: Ravindranaath C, professional portrait]",
};

export const SERVICES_SECTION = {
  eyebrow: "Our Services",
  title: "Areas of Expertise",
  subtitle: "Decades of proven leadership in navigating insurance claims, risk management, and protective facility services.",
  cards: [
    {
      id: "motor-vehicle",
      title: "Motor & Vehicle Claims",
      desc: "Third-party and own-damage claims for accidents, theft, fire and natural calamities.",
      isNavy: false,
      iconName: "Car",
    },
    {
      id: "health-life",
      title: "Health & Life Benefits",
      desc: "Guidance on medical claims, benefits and settlements with insurers and hospitals.",
      isNavy: true, // Second card highlighted in navy with white text
      iconName: "HeartPulse",
    },
    {
      id: "loss-prevention",
      title: "Loss Prevention",
      desc: "Loss prevention coordination, property and personal insurance coverage and claims.",
      isNavy: false,
      iconName: "ShieldAlert",
    },
    {
      id: "industrial-security",
      title: "Industrial Security",
      desc: "Industrial security, safety, protection and manpower outsourcing services.",
      isNavy: false,
      iconName: "Building2",
    },
  ],
};

export const ABOUT_SECTION = {
  eyebrow: "About Me",
  heading: "Guiding You Through Claims, Security & Confidence",
  p1: "A native of Hyderabad and a qualified general insurance professional. My career began with National Insurance Company Ltd, followed by senior leadership at Larsen & Toubro Ltd and today as CEO & MD of SLR-Industrial Security & Facility Services.",
  p2: "Interfacing with top government officials, ministers and policy makers at the centre and in the states.",
  placeholder: "[PHOTO: working or meeting photo]",
};

export const ACHIEVEMENTS_SECTION = {
  eyebrow: "Proven Record",
  title: "Key Achievements & Recognition",
  stats: [
    {
      number: "35,000+",
      label: "L&T employees managed",
    },
    {
      number: "No. 1",
      label: "Branch Manager among 44 branches, Hyderabad Region",
    },
    {
      number: "Best Manager",
      label: "Declared among regional offices",
    },
    {
      number: "Practical Man",
      label: "Recognized for practical leadership",
    },
  ],
  chiefGuest: [
    "Bethanya Academy (School Day, 2002)",
    "Nazareth Academy Group, Avadi (Independence Day, 2019)",
  ],
  metWith: [
    "President of India (R. Venkataraman)",
    "Prime Minister of India (Rajiv Gandhi, P.V. Narasimha Rao)",
    "Governor of Tamil Nadu (Ch. Vidyasagar Rao)",
    "RBI Governor (Dr. C. Rangarajan)",
    "Mother Teresa",
    "AP Chief Ministers (NTR, N. Chandrababu Naidu)",
  ],
};

export const CAREER_JOURNEY_SECTION = {
  eyebrow: "Milestones",
  title: "Career Journey",
  timeline: [
    {
      period: "2023 – Present",
      role: "CEO & MD",
      organization: "SLR-Industrial Security & Facility Services",
      desc: "Executive leadership of industrial security, detective facility, and protective manpower operations.",
    },
    {
      period: "2013 – 2020",
      role: "Senior Insurance Coordinator cum Service Delivery Leader",
      organization: "Larsen & Toubro Ltd, HQ Chennai",
      desc: "Risk Management Advisor / Consultant. Managed 35,000+ employees across Indian sites and international countries.",
    },
    {
      period: "2004 – 2012",
      role: "Director / CEO",
      organization: "Industrial Security, Detective Facility & Risk Management Services",
      desc: "Spearheaded risk management advisory, industrial detective investigations, and facility operations.",
    },
    {
      period: "1978 – 2002",
      role: "Branch Manager (March 1978 – May 2002)",
      organization: "National Insurance Company Ltd, Hyderabad",
      desc: "Acknowledged as No. 1 Branch Manager among 44 branches and divisions in the Hyderabad Region; declared Best Manager among regional offices.",
    },
    {
      period: "1974 – 1978 (to be verified)",
      role: "Media Role: Production Assistant, Programmer, Presenter & Writer",
      organization: "All India Radio (AIR), Hyderabad",
      desc: "Broadcast journalism, news reel presentation, and scriptwriting for state radio programming.",
    },
  ],
};

export const MEDIA_SECTION = {
  eyebrow: "Creative Pursuits",
  title: "Media & Writing",
  cards: [
    {
      title: "Published Writer",
      desc: "Telugu stories, features and plays published in leading weeklies: Andhra Patrika, Andhra Jyoti and Mayuri.",
      icon: "BookOpen",
    },
    {
      title: "All India Radio",
      desc: "Presented news reels and cultural programmes on All India Radio, Hyderabad.",
      icon: "Radio",
    },
    {
      title: "L&T e-Magazine",
      desc: "Concept, compilation and editing of the official in-house e-Magazine, 2014–2020.",
      icon: "FileText",
    },
  ],
  quote: "Life is beautiful, if used properly.",
};

export const TESTIMONIALS_SECTION = {
  eyebrow: "Endorsements",
  title: "Colleague Endorsements",
  testimonials: [
    {
      quote: "Proud to have a colleague like you!!",
      author: "Vivek Kumar Dubey",
      title: "DGM-HR, L&T",
    },
    {
      quote: "You are rendering an outstanding service and support to the needy people.",
      author: "N. Nachiappan",
      title: "DGM-Finance, L&T",
    },
  ],
};

export const MEMBERSHIPS_SECTION = {
  eyebrow: "Affiliations",
  title: "Honorary & Professional Memberships",
  memberships: [
    "Lions Club",
    "YMCA",
    "Red Cross Society",
    "Public Relations Society",
    "South India Film Chambers",
    "Loss Prevention Association of India",
    "Claims Care Insurance Help Line Society of India",
    "Forum for Social Upliftment (FOSP)",
    "Mother Teresa Charity Home",
  ],
};

export const CONTACT_SECTION = {
  eyebrow: "Contact",
  heading: "Let's Talk",
  leftTitle: "Need Help With an Insurance Claim or Security Concern?",
  leftText: "Get direct, experienced guidance on personal claims disputes, corporate insurance coordination, or industrial facility security contracts.",
  enquiryTypes: [
    "Motor & Vehicle Claims",
    "Health & Life Benefits",
    "Loss Prevention Coordination",
    "Industrial Security Retainer",
    "General Consultation",
  ],
};
