import { ASSETS_MAP } from "@/lib/assets-map";

export type FAQItem = {
  question: string;
  answer: string;
};

export type ContentSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LinkItem = {
  label: string;
  href: string;
};

export type PageData = {
  slug: string;
  pageType: "commercial" | "education" | "location" | "secondary" | "support";
  title: string;
  description: string;
  h1: string;
  subheading: string;
  heroImage?: string;
  canonicalSlug?: string;
  sections: ContentSection[];
  faqs: FAQItem[];
  relatedLinks: LinkItem[];
  bestFor?: string[];
  notFor?: string[];
  showFromPrice?: boolean;
};

export const CORE_COMMERCIAL_SLUGS = [
  "about",
  "prices",
  "prices-and-booking",
  "reviews",
  "contact",
];

const fatFreezingFaqs: FAQItem[] = [
  {
    question: "Is fat freezing the same as cryolipolysis and fat freeze?",
    answer:
      "Yes. Fat freezing, fat freeze, and cryolipolysis refer to the same non-surgical cooling treatment used to reduce stubborn fat pockets.",
  },
  {
    question: "How many sessions do I need?",
    answer:
      "Most patients begin with 1-3 sessions depending on body area, fat thickness, and target outcome. A doctor-led assessment confirms the plan.",
  },
  {
    question: "When will I see results?",
    answer:
      "Early changes can appear in 3-4 weeks, with clearer results commonly seen around 8-12 weeks.",
  },
  {
    question: "Is there downtime after cryolipolysis?",
    answer:
      "Downtime is usually minimal. Temporary redness, numbness, and tenderness can happen and typically settle within days to weeks.",
  },
  {
    question: "Can I combine fat freezing with other body contouring treatments?",
    answer:
      "Yes. In selected cases, cavitation or radiofrequency can complement outcomes. Suitability is decided after consultation.",
  },
];

const secondaryCrossSellLinks: LinkItem[] = [
  { label: "Fat Freezing Specialist Page", href: "/fat-freezing" },
  { label: "Book Fat Freezing Consultation", href: "/book" },
  { label: "Fat Freezing Prices", href: "/prices" },
];

const baseRelatedLinks: LinkItem[] = [
  { label: "Book Consultation", href: "/book" },
  { label: "Prices", href: "/prices" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const homepageReviews = [
  {
    name: "Amel Brahmi",
    rating: 5,
    review:
      "Dr. Dayana explained every step clearly and I already noticed waist reduction after my second session.",
  },
  {
    name: "Andrei K",
    rating: 5,
    review:
      "Very clean clinic, professional team, and a structured consultation process before treatment.",
  },
  {
    name: "Princess Buhay",
    rating: 5,
    review:
      "The team discussed benefits and limitations honestly and made me feel comfortable during treatment.",
  },
  {
    name: "Chloe Nicholson",
    rating: 5,
    review:
      "Friendly specialists, clear guidance, and realistic timelines. Great overall experience.",
  },
];

export const bookingTreatments = [
  "Fat Freezing (Cryolipolysis)",
  "Aqualyx Fat Dissolving",
  "Lemon Bottle Fat Dissolving",
  "Ultrasound Cavitation",
  "Radiofrequency Skin Tightening",
  "HIFEM Sculpting",
  "Non-Surgical Brazilian Bum Lift",
  "Cellulite Reduction",
  "Non-Surgical Breast Lift",
  "HIFU Vaginal Tightening",
  "HIFU Facelift & Body Tightening",
  "HydroDerma Facial",
  "Radio Frequency Face Lift",
  "Plasma Eye Lift",
];

export const fatFreezingAreas = [
  "Stomach",
  "Love Handles",
  "Thighs",
  "Arms",
  "Chin",
  "Back",
  "Bra Fat",
  "Male Chest",
];

export const bookingPackages = {
  "Fat Freezing (Cryolipolysis)": [
    "Starter: 1 area from AED 489",
    "Contour: 2 areas from AED 899",
    "Shape+: 3 areas from AED 1299",
  ],
  "Aqualyx Fat Dissolving": ["Single area package from AED 489"],
  "Lemon Bottle Fat Dissolving": ["Single area package from AED 489"],
  "Ultrasound Cavitation": ["Inch-loss package from AED 489"],
  "Radiofrequency Skin Tightening": ["Skin tightening package from AED 489"],
  "HIFEM Sculpting": ["Muscle sculpting package from AED 489"],
  "Non-Surgical Brazilian Bum Lift": ["Lift package from AED 489"],
  "Cellulite Reduction": ["Cellulite protocol from AED 489"],
  "Non-Surgical Breast Lift": ["Breast lift support package from AED 489"],
  "HIFU Vaginal Tightening": ["HIFU intimate wellness package from AED 489"],
  "HIFU Facelift & Body Tightening": ["HIFU lift and tighten package from AED 489"],
  "HydroDerma Facial": ["HydroDerma skin health package from AED 489"],
  "Radio Frequency Face Lift": ["RF face lift package from AED 489"],
  "Plasma Eye Lift": ["Plasma eye-lift package from AED 489"],
} as const;

const corePages: PageData[] = [
  {
    slug: "about",
    pageType: "commercial",
    title: "About Fat Freezing Dubai | Doctor-Led Body Contouring in Jumeirah",
    description:
      "Meet our doctor-led body contouring team in Jumeirah 1, Dubai. Learn why clients choose our affordable, clinically responsible fat freezing approach.",
    h1: "About Our Doctor-Led Fat Freezing Clinic in Dubai",
    subheading:
      "We focus on safe, realistic body contouring outcomes with transparent planning and clear pricing.",
    heroImage: ASSETS_MAP.teamPrimary.src,
    sections: [
      {
        heading: "Why We Built a Fat Freezing Specialist Centre",
        paragraphs: [
          "Our clinic was built around one goal: offer high-quality fat freezing (cryolipolysis) in Dubai with medical oversight and accessible pricing.",
          "We prioritize patient education, safety screening, and realistic outcomes over aggressive sales language.",
        ],
      },
      {
        heading: "Doctor-Led Planning, Not One-Size-Fits-All",
        paragraphs: [
          "Every plan starts with consultation, body-area assessment, and contraindication checks.",
          "If fat freezing is not the best fit for your goal, we explain alternatives such as Aqualyx or cavitation transparently.",
        ],
      },
      {
        heading: "Dubai Location and Access",
        paragraphs: [
          "Our primary location is in Jumeirah 1, making consultations accessible from Dubai Marina, Downtown, Business Bay, Palm Jumeirah, JLT, and Al Barsha.",
          "Our contact team can guide transport and parking before your visit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are consultations doctor-led?",
        answer:
          "Yes. Treatment suitability and planning are reviewed in a clinician-led consultation.",
      },
      {
        question: "Do you only provide fat freezing?",
        answer:
          "Fat freezing is our hero treatment. We also provide selected body contouring treatments to support specific goals.",
      },
      {
        question: "Do you guarantee a specific number of centimeters lost?",
        answer:
          "No. Outcomes vary by body area, metabolism, and treatment adherence. We provide realistic ranges instead of guarantees.",
      },
    ],
    relatedLinks: [
      { label: "Fat Freezing Pillar", href: "/fat-freezing" },
      { label: "Book Consultation", href: "/book" },
      { label: "Read Reviews", href: "/reviews" },
      { label: "Clinic Contact", href: "/contact" },
    ],
  },
  {
    slug: "contact",
    pageType: "commercial",
    title: "Contact Fat Freezing Dubai | Jumeirah 1 Clinic",
    description:
      "Call, WhatsApp, or email Fat Freezing Dubai. Visit our Jumeirah 1 clinic and book a doctor-led consultation for cryolipolysis and body contouring.",
    h1: "Contact Our Jumeirah 1 Clinic",
    subheading:
      "Talk to our team by phone, WhatsApp, or email and we will help you schedule the right consultation.",
    sections: [
      {
        heading: "How to Reach Us",
        paragraphs: [
          "Our team responds quickly to booking requests and treatment questions.",
          "For fastest response, use WhatsApp and share your preferred treatment, body area, and date range.",
        ],
      },
      {
        heading: "Visit Details",
        paragraphs: [
          "Address: Jumeira St - Jumeirah - Jumeirah 1 - Dubai - United Arab Emirates.",
          "Working hours are typically 09:00 to 22:00 daily, with confirmation sent after booking.",
        ],
      },
      {
        heading: "Before Your Appointment",
        paragraphs: [
          "Bring your medical history overview and list of ongoing medications to keep consultation efficient.",
          "If you are unsure whether fat freezing suits your case, book a consultation first and we will guide you.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I book on WhatsApp?",
        answer:
          "Yes, you can send your details and preferred time through WhatsApp and the team will confirm available slots.",
      },
      {
        question: "Where is the clinic located?",
        answer:
          "We are located at Jumeira St, Jumeirah 1, Dubai, United Arab Emirates.",
      },
      {
        question: "Do you accept walk-ins?",
        answer:
          "Booking in advance is recommended so consultation and treatment rooms are prepared for your visit.",
      },
    ],
    relatedLinks: baseRelatedLinks,
  },
  {
    slug: "prices",
    pageType: "commercial",
    title: "Fat Freezing Dubai Prices | Packages from AED 489",
    description:
      "View fat freezing and body contouring package starting prices in Dubai. Transparent consultation-first pricing with final plan confirmed in clinic.",
    h1: "Fat Freezing and Body Contouring Prices in Dubai",
    subheading:
      "Packages start from AED 489. Final treatment scope is confirmed after doctor-led consultation.",
    sections: [
      {
        heading: "Transparent Starting Prices",
        paragraphs: [
          "Fat freezing (cryolipolysis) packages start from AED 489 per selected area.",
          "Aqualyx, Lemon Bottle, cavitation, radiofrequency skin tightening, and other supportive treatments are also available from AED 489 packages.",
        ],
        bullets: [
          "Fat Freezing: from AED 489",
          "Aqualyx: from AED 489",
          "Ultrasound Cavitation: from AED 489",
          "Radiofrequency Skin Tightening: from AED 489",
        ],
      },
      {
        heading: "What Changes Final Price",
        paragraphs: [
          "Final pricing depends on target areas, treatment intensity, number of sessions, and whether treatments are combined.",
          "We do not over-promise. Consultation includes clear scope and expected timeline before commitment.",
        ],
      },
      {
        heading: "Booking and Deposit",
        paragraphs: [
          "Online booking lets you submit treatment, body area, and date preference in minutes.",
          "You can reserve quickly and our team confirms your final schedule shortly after review.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are these final prices?",
        answer:
          "No. These are starting prices. Final package pricing is confirmed after consultation and treatment planning.",
      },
      {
        question: "Can I choose multiple body areas?",
        answer:
          "Yes, many plans cover multiple zones. Your final package is personalized in consultation.",
      },
      {
        question: "Do you have financing?",
        answer:
          "Ask our team during booking for current payment options and applicable terms.",
      },
    ],
    relatedLinks: [
      { label: "Book Consultation", href: "/book" },
      { label: "Fat Freezing Details", href: "/fat-freezing" },
      { label: "Read Reviews", href: "/reviews" },
    ],
    showFromPrice: true,
  },
  {
    slug: "prices-and-booking",
    pageType: "commercial",
    title: "Prices and Booking | Fat Freezing Dubai",
    description:
      "Quick access to treatment pricing and online booking for fat freezing and body contouring in Dubai.",
    h1: "Prices and Booking",
    subheading: "Use this page as a quick path to packages and appointment requests.",
    canonicalSlug: "prices",
    sections: [
      {
        heading: "Direct Access",
        paragraphs: [
          "Our full package guidance is available on the main prices page.",
          "You can continue directly to full pricing and booking from the links below.",
        ],
      },
    ],
    faqs: [],
    relatedLinks: [
      { label: "View Full Prices", href: "/prices" },
      { label: "Book Consultation", href: "/book" },
      { label: "Contact Team", href: "/contact" },
    ],
  },
  {
    slug: "reviews",
    pageType: "commercial",
    title: "Fat Freezing Dubai Reviews | Real Client Feedback",
    description:
      "Read verified-style client feedback for fat freezing and body contouring in Dubai, including consultation quality and treatment experience.",
    h1: "Client Reviews for Fat Freezing in Dubai",
    subheading:
      "Real feedback focused on consultation quality, treatment comfort, and measurable expectations.",
    sections: [
      {
        heading: "What Patients Mention Most",
        paragraphs: [
          "Patients consistently mention consultation clarity, team professionalism, and realistic expectation setting.",
          "Many reviews focus on waistline and stubborn fat-area improvements over planned sessions.",
        ],
      },
      {
        heading: "Our Review Standard",
        paragraphs: [
          "We highlight reviews that describe real treatment journeys, not just one-line comments.",
          "If you book with us, you will receive a follow-up request to share your own experience.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are these reviews specific to Dubai?",
        answer: "Yes, they reflect the Dubai clinic experience and care pathway.",
      },
      {
        question: "Can I leave a review after treatment?",
        answer:
          "Yes, patients are invited to share feedback after treatment and follow-up checkpoints.",
      },
    ],
    relatedLinks: [
      { label: "Book Consultation", href: "/book" },
      { label: "See Prices", href: "/prices" },
      { label: "Fat Freezing Hub", href: "/fat-freezing" },
    ],
  },
  {
    slug: "fat-freezing",
    pageType: "commercial",
    title: "Fat Freezing Dubai | Doctor-Led Cryolipolysis Clinic",
    description:
      "Fat freezing in Dubai with doctor-led planning. Learn how cryolipolysis works, who it suits, results timeline, safety, and booking options.",
    h1: "Fat Freezing in Dubai",
    subheading:
      "Our hero treatment for non-surgical fat reduction, built for localized stubborn fat zones.",
    heroImage: ASSETS_MAP.hero.src,
    sections: [
      {
        heading: "What Fat Freezing Treats",
        paragraphs: [
          "Fat freezing targets stubborn localized fat that often remains despite exercise and nutrition discipline.",
          "Common treatment zones include stomach, love handles, thighs, arms, chin, and back.",
        ],
      },
      {
        heading: "How Cryolipolysis Works",
        paragraphs: [
          "Controlled cooling is used to affect fat cells while surrounding tissue is protected with protocol-led settings.",
          "Over the following weeks, the body gradually clears affected fat cells, which is why outcomes evolve over time.",
        ],
      },
      {
        heading: "Clinical Safety and Contraindications",
        paragraphs: [
          "A doctor-led consultation screens for contraindications and confirms if fat freezing is appropriate.",
          "This treatment is not a weight-loss shortcut and is not suitable for all cases.",
        ],
      },
      {
        heading: "Enhance Outcomes",
        paragraphs: [
          "Where clinically appropriate, outcomes can be supported with adjunct treatments like ultrasound cavitation or radiofrequency skin tightening.",
          "Combination plans are personalized and scheduled only after clinical review.",
        ],
      },
    ],
    faqs: fatFreezingFaqs,
    relatedLinks: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Results Timeline", href: "/results-timeline" },
      { label: "Side Effects", href: "/side-effects-safety" },
      { label: "Aftercare", href: "/fat-freezing-aftercare" },
      { label: "Fat Freezing vs CoolSculpting", href: "/coolsculpting-vs-cryolipolysis" },
      { label: "Book Consultation", href: "/book" },
    ],
    showFromPrice: true,
  },
  {
    slug: "cryolipolysis",
    pageType: "education",
    title: "Cryolipolysis Dubai | Clinical Guide to Fat Freezing",
    description:
      "Understand cryolipolysis in Dubai: treatment mechanism, suitability, side effects, expected timeline, and doctor-led planning.",
    h1: "Cryolipolysis in Dubai",
    subheading:
      "Cryolipolysis is the clinical name for fat freezing and fat freeze treatment.",
    heroImage: ASSETS_MAP.hero.src,
    sections: [
      {
        heading: "Same Treatment, Different Search Terms",
        paragraphs: [
          "Cryolipolysis, fat freezing, and fat freeze describe the same non-surgical fat reduction method.",
          "We use all terms to make information accessible while keeping treatment planning clinically precise.",
        ],
      },
      {
        heading: "Who It Suits",
        paragraphs: [
          "It suits patients with pinchable stubborn fat pockets who want contour improvement without surgery.",
          "It is not a replacement for obesity management or metabolic disease treatment.",
        ],
      },
      {
        heading: "What to Expect",
        paragraphs: [
          "Sessions are planned by area with realistic timelines and follow-up checkpoints.",
          "Visible contour refinement usually appears progressively over 8 to 12 weeks.",
        ],
      },
    ],
    faqs: fatFreezingFaqs,
    relatedLinks: [
      { label: "Fat Freezing Main Page", href: "/fat-freezing" },
      { label: "Book Consultation", href: "/book" },
      { label: "Prices", href: "/prices" },
    ],
  },
  {
    slug: "fat-freeze",
    pageType: "education",
    title: "Fat Freeze Dubai | Non-Surgical Fat Freezing",
    description:
      "Fat freeze in Dubai explained: same as cryolipolysis fat freezing. Learn expected results, side effects, and booking process.",
    h1: "Fat Freeze in Dubai",
    subheading:
      "Fat freeze is another common term for cryolipolysis fat freezing.",
    heroImage: ASSETS_MAP.hero.src,
    canonicalSlug: "fat-freezing",
    sections: [
      {
        heading: "Fat Freeze = Fat Freezing",
        paragraphs: [
          "If you searched for fat freeze Dubai, you are looking at the same technology used in cryolipolysis fat freezing.",
          "The treatment pathway, safety checks, and timeline are identical.",
        ],
      },
      {
        heading: "Start with Consultation",
        paragraphs: [
          "We assess area suitability, expected response, and any contraindications before recommending sessions.",
          "You receive a plan with realistic outcomes and transparent package options.",
        ],
      },
    ],
    faqs: fatFreezingFaqs,
    relatedLinks: [
      { label: "Fat Freezing Pillar", href: "/fat-freezing" },
      { label: "Book Consultation", href: "/book" },
      { label: "Results Timeline", href: "/results-timeline" },
    ],
  },
  {
    slug: "how-it-works",
    pageType: "education",
    title: "How Fat Freezing Works | Cryolipolysis Dubai",
    description:
      "Detailed guide to how fat freezing works, session structure, biological process, and what patients feel during cryolipolysis treatment.",
    h1: "How Fat Freezing Works",
    subheading:
      "A practical walkthrough of cryolipolysis from consultation to follow-up.",
    sections: [
      {
        heading: "Step 1: Consultation and Mapping",
        paragraphs: [
          "We map stubborn zones, discuss goals, and confirm suitability with medical screening.",
          "The treatment plan defines area size, expected sessions, and timeline checkpoints.",
        ],
      },
      {
        heading: "Step 2: Controlled Cooling Session",
        paragraphs: [
          "A cooling applicator is positioned over the selected area with protocol-led safety settings.",
          "You may feel cold and pressure at first, usually followed by a numb sensation.",
        ],
      },
      {
        heading: "Step 3: Biological Clearance Phase",
        paragraphs: [
          "Fat-cell response develops gradually over weeks as the body processes affected cells.",
          "This delayed response is expected and is why we set staged review dates.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long is each session?",
        answer:
          "Session length varies by area and protocol. Your consultation confirms expected treatment duration.",
      },
      {
        question: "Does fat return after treatment?",
        answer:
          "Long-term contour maintenance depends on lifestyle and weight stability. Remaining fat cells can still enlarge with significant weight gain.",
      },
      {
        question: "Can I go back to work the same day?",
        answer: "Many patients return to normal activities quickly, with minimal downtime.",
      },
    ],
    relatedLinks: [
      { label: "Fat Freezing Main Hub", href: "/fat-freezing" },
      { label: "Side Effects", href: "/side-effects-safety" },
      { label: "Aftercare", href: "/fat-freezing-aftercare" },
    ],
  },
  {
    slug: "results-timeline",
    pageType: "education",
    title: "Fat Freezing Results Timeline | Week-by-Week Guide",
    description:
      "See a realistic fat freezing timeline from day one through 12 weeks, including when contour changes commonly become visible.",
    h1: "Fat Freezing Results Timeline",
    subheading: "What to expect week by week after cryolipolysis treatment.",
    sections: [
      {
        heading: "First 72 Hours",
        paragraphs: [
          "Temporary redness, sensitivity, or numbness can appear in treated areas.",
          "These effects usually settle as tissues recover from cooling exposure.",
        ],
      },
      {
        heading: "Weeks 2 to 4",
        paragraphs: [
          "Some patients begin noticing subtle contour changes during this phase.",
          "Hydration, movement, and aftercare adherence support smoother recovery.",
        ],
      },
      {
        heading: "Weeks 8 to 12",
        paragraphs: [
          "Most patients see clearer contour improvements in this period.",
          "Follow-up consultation confirms whether additional sessions are useful.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can results appear earlier than 8 weeks?",
        answer:
          "Yes, subtle improvements can appear sooner, but we evaluate outcomes on a full timeline.",
      },
      {
        question: "Do all body areas respond at the same speed?",
        answer:
          "No. Different zones can respond at different rates based on tissue profile and plan intensity.",
      },
      {
        question: "When should I book my review?",
        answer: "We usually schedule review checkpoints within the 8-12 week window.",
      },
    ],
    relatedLinks: [
      { label: "Book Follow-Up", href: "/book" },
      { label: "Aftercare Guide", href: "/fat-freezing-aftercare" },
      { label: "Fat Freezing FAQ", href: "/fat-freezing-faq" },
    ],
  },
  {
    slug: "side-effects-safety",
    pageType: "education",
    title: "Fat Freezing Side Effects | Safety Guide in Dubai",
    description:
      "Clinical guide to common fat freezing side effects, expected recovery signs, and when to contact your clinic after cryolipolysis.",
    h1: "Fat Freezing Side Effects and Safety",
    subheading:
      "Most effects are temporary, but understanding recovery signs is essential.",
    sections: [
      {
        heading: "Common Temporary Effects",
        paragraphs: [
          "Mild redness, tingling, numbness, and tenderness can occur after treatment.",
          "These signs usually improve over days or weeks depending on body area.",
        ],
      },
      {
        heading: "When to Contact the Clinic",
        paragraphs: [
          "If discomfort is severe, prolonged, or unusual, contact the clinic for assessment.",
          "Early communication helps the team guide next steps and reassurance effectively.",
        ],
      },
      {
        heading: "Why Consultation Matters",
        paragraphs: [
          "Risk screening before treatment is a key reason we require doctor-led consultation.",
          "Safety protocols are built into both planning and post-treatment follow-up.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is numbness normal after cryolipolysis?",
        answer:
          "Temporary numbness can happen and usually settles gradually. Your team will explain expected duration for your area.",
      },
      {
        question: "Can side effects be prevented completely?",
        answer:
          "No treatment is completely risk-free, but proper screening and protocol reduce avoidable issues.",
      },
      {
        question: "Should I exercise immediately after treatment?",
        answer:
          "Most patients can return to light activity quickly, but always follow your specific aftercare advice.",
      },
    ],
    relatedLinks: [
      { label: "Aftercare Instructions", href: "/fat-freezing-aftercare" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Book Consultation", href: "/book" },
    ],
  },
  {
    slug: "fat-freezing-aftercare",
    pageType: "education",
    title: "Fat Freezing Aftercare | Dubai Recovery Checklist",
    description:
      "Post-treatment fat freezing aftercare checklist with hydration, activity, and monitoring guidance to support recovery and contour outcomes.",
    h1: "Fat Freezing Aftercare",
    subheading:
      "Simple, practical steps to support comfort and recovery after cryolipolysis.",
    sections: [
      {
        heading: "First 7 Days",
        paragraphs: [
          "Stay hydrated, keep light movement, and avoid aggressive heat or pressure on treated areas unless advised.",
          "Monitor normal recovery signs and report concerns if symptoms feel unusual.",
        ],
        bullets: [
          "Hydrate well daily",
          "Keep gentle movement",
          "Follow clinic-specific care notes",
          "Attend planned review",
        ],
      },
      {
        heading: "Lifestyle Support",
        paragraphs: [
          "Fat freezing is a contour treatment, so nutrition consistency and activity help maintain outcome quality.",
          "Major weight fluctuations can reduce definition from treated areas.",
        ],
      },
      {
        heading: "Combine Only When Appropriate",
        paragraphs: [
          "Some cases benefit from additional sessions or supportive body contouring techniques.",
          "All combination plans should be clinician-approved rather than self-selected.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I massage the treated area?",
        answer:
          "Follow your clinician instructions for post-session massage guidance, as protocol can vary by area.",
      },
      {
        question: "Should I avoid flights after treatment?",
        answer:
          "Most patients can travel, but discuss specific plans if treatment is very recent or if you have concerns.",
      },
      {
        question: "When can I do gym training again?",
        answer:
          "Light activity is often fine quickly. Intensity progression should follow your comfort and clinic advice.",
      },
    ],
    relatedLinks: [
      { label: "Results Timeline", href: "/results-timeline" },
      { label: "Side Effects", href: "/side-effects-safety" },
      { label: "Book Consultation", href: "/book" },
    ],
  },
  {
    slug: "coolsculpting-vs-cryolipolysis",
    pageType: "education",
    title: "Fat Freezing vs CoolSculpting in Dubai | Educational Comparison",
    description:
      "Educational comparison: fat freezing cryolipolysis versus CoolSculpting brand terminology, treatment goals, and clinic selection criteria in Dubai.",
    h1: "Fat Freezing vs CoolSculpting: Dubai Guide",
    subheading:
      "CoolSculpting is a brand name. We provide cryolipolysis fat freezing technology.",
    sections: [
      {
        heading: "Important Terminology",
        paragraphs: [
          "CoolSculpting is a branded system name, while cryolipolysis is the treatment category.",
          "Our clinic provides fat freezing cryolipolysis treatment and explains platform specifics during consultation.",
        ],
      },
      {
        heading: "How to Compare Clinics",
        paragraphs: [
          "Focus on clinician-led assessment, treatment planning quality, safety protocol, and transparent pricing.",
          "Do not choose based on label alone; choose based on clinical suitability and provider standards.",
        ],
      },
      {
        heading: "Outcome Expectations",
        paragraphs: [
          "Both brand and non-brand comparisons still require realistic timelines and staged follow-up.",
          "Your body area, baseline profile, and adherence to aftercare strongly influence contour change.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you claim to offer CoolSculpting brand treatment?",
        answer:
          "No. We clearly present our service as cryolipolysis fat freezing treatment.",
      },
      {
        question: "Is non-brand cryolipolysis effective?",
        answer:
          "Effectiveness depends on clinical protocol, patient suitability, and follow-up discipline rather than label only.",
      },
      {
        question: "Can I book a comparison consultation?",
        answer:
          "Yes. Book a consultation and we will explain differences transparently based on your goals.",
      },
    ],
    relatedLinks: [
      { label: "Fat Freezing Main Page", href: "/fat-freezing" },
      { label: "Prices", href: "/prices" },
      { label: "Book Consultation", href: "/book" },
    ],
  },
  {
    slug: "fat-freezing-faq",
    pageType: "support",
    title: "Fat Freezing FAQ Dubai | Cryolipolysis Questions Answered",
    description:
      "Get answers to common fat freezing, fat freeze, and cryolipolysis questions in Dubai, including cost, timeline, and suitability.",
    h1: "Fat Freezing FAQs",
    subheading:
      "Answers to the most common consultation questions from Dubai patients.",
    sections: [
      {
        heading: "Everything in One Place",
        paragraphs: [
          "This page consolidates key questions from first-time and returning patients.",
          "For personal suitability, a doctor-led consultation remains essential.",
        ],
      },
    ],
    faqs: fatFreezingFaqs,
    relatedLinks: [
      { label: "Book Consultation", href: "/book" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Aftercare", href: "/fat-freezing-aftercare" },
    ],
  },
  {
    slug: "body-contouring",
    pageType: "support",
    title: "Body Contouring Dubai | Supportive Treatments with Fat Freezing Focus",
    description:
      "Explore body contouring options in Dubai including Aqualyx, cavitation, radiofrequency skin tightening and more, with fat freezing as hero treatment.",
    h1: "Body Contouring Treatments in Dubai",
    subheading:
      "Secondary treatments that support specific goals, while fat freezing remains our main speciality.",
    sections: [
      {
        heading: "Treatment Mix Strategy",
        paragraphs: [
          "Not every body concern needs the same approach. We match treatment to target area, fat type, and skin profile.",
          "When non-invasive fat reduction is the goal, fat freezing is usually the first option we evaluate.",
        ],
      },
      {
        heading: "Supportive Services",
        paragraphs: [
          "Our secondary cluster includes Aqualyx, Lemon Bottle, cavitation, radiofrequency skin tightening, HIFEM sculpting, and cellulite-focused protocols.",
          "Each page includes who it is best for, who it may not suit, and when fat freezing is a better choice.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can treatments be combined?",
        answer:
          "Yes, selected combinations are used when clinically suitable and timed correctly.",
      },
      {
        question: "Which treatment should I start with?",
        answer:
          "Start with consultation. We map your goal first, then choose the least invasive effective pathway.",
      },
    ],
    relatedLinks: [
      { label: "Fat Freezing Hub", href: "/fat-freezing" },
      { label: "Aqualyx", href: "/aqualyx" },
      { label: "Ultrasound Cavitation", href: "/ultrasound-cavitation" },
      { label: "Book Consultation", href: "/book" },
    ],
  },
  {
    slug: "privacy",
    pageType: "support",
    title: "Privacy Policy | Fat Freezing Dubai",
    description:
      "Privacy information for form submissions, appointment requests, and communication preferences.",
    h1: "Privacy Policy",
    subheading: "How we handle your booking and contact data.",
    sections: [
      {
        heading: "Data We Collect",
        paragraphs: [
          "We collect only required booking information: name, phone, email, treatment preference, and appointment details.",
          "Data is used for consultation scheduling, clinical communication, and service delivery.",
        ],
      },
      {
        heading: "Storage and Access",
        paragraphs: [
          "Booking requests are stored securely for operational follow-up and may later connect to a CRM system.",
          "Access is restricted to authorized clinic and support staff.",
        ],
      },
    ],
    faqs: [],
    relatedLinks: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "terms",
    pageType: "support",
    title: "Terms and Conditions | Fat Freezing Dubai",
    description:
      "General booking and consultation terms for fat freezing and body contouring appointments in Dubai.",
    h1: "Terms and Conditions",
    subheading: "General service terms for booking and consultation.",
    sections: [
      {
        heading: "Consultation and Suitability",
        paragraphs: [
          "All treatment recommendations are subject to consultation and clinician suitability review.",
          "Information on this website is educational and does not replace medical advice.",
        ],
      },
      {
        heading: "Pricing and Booking",
        paragraphs: [
          "Displayed prices are starting figures and can change based on treatment scope and clinical plan.",
          "Appointment confirmation is sent after team review and availability check.",
        ],
      },
    ],
    faqs: [],
    relatedLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Book", href: "/book" },
    ],
  },
];

const areaPageConfig = [
  {
    slug: "fat-freezing-stomach",
    area: "Stomach",
    concern: "lower belly and central abdominal fat",
  },
  {
    slug: "fat-freezing-love-handles",
    area: "Love Handles",
    concern: "side-waist fat around the flanks",
  },
  {
    slug: "fat-freezing-thighs",
    area: "Thighs",
    concern: "inner and outer thigh stubborn fat",
  },
  {
    slug: "fat-freezing-arms",
    area: "Arms",
    concern: "upper-arm fat pockets",
  },
  {
    slug: "fat-freezing-chin",
    area: "Chin",
    concern: "submental fullness under the chin",
  },
  {
    slug: "fat-freezing-back",
    area: "Back",
    concern: "back folds and bra-line fat",
  },
  {
    slug: "fat-freezing-bra-fat",
    area: "Bra Fat",
    concern: "bra-line fat pockets and upper-back bulges",
  },
  {
    slug: "fat-freezing-male-chest",
    area: "Male Chest",
    concern: "chest fat pockets in suitable male contouring cases",
  },
] as const;

const areaPages: PageData[] = areaPageConfig.map((item) => ({
  slug: item.slug,
  pageType: "commercial",
  title: `${item.area} Fat Freezing Dubai | Cryolipolysis for ${item.area}`,
  description: `Doctor-led fat freezing for ${item.area.toLowerCase()} in Dubai. Learn suitability, expected timeline, and booking options for cryolipolysis treatment.`,
  h1: `Fat Freezing for ${item.area} in Dubai`,
  subheading:
    "Targeted cryolipolysis planning for localized fat reduction with realistic timelines.",
  heroImage: ASSETS_MAP.hero.src,
  sections: [
    {
      heading: `${item.area} Treatment Focus`,
      paragraphs: [
        `This page focuses on fat freezing for ${item.concern} where exercise alone often leaves residual contour concerns.`,
        "Consultation confirms whether your area profile is suitable for cryolipolysis and how many sessions are likely required.",
      ],
    },
    {
      heading: "What Session Planning Includes",
      paragraphs: [
        "Area mapping, cooling strategy, and realistic progress checkpoints are defined before your first session.",
        "We explain comfort expectations and aftercare requirements clearly to reduce uncertainty.",
      ],
    },
    {
      heading: "Supportive Add-Ons",
      paragraphs: [
        "When clinically suitable, we may combine with cavitation or radiofrequency skin tightening to refine contour outcomes.",
        "Combination timing is tailored, not automatic.",
      ],
    },
  ],
  faqs: [
    {
      question: `How many ${item.area.toLowerCase()} sessions do I need?`,
      answer:
        "Most plans start with 1-3 sessions depending on fat thickness and desired contour change.",
    },
    {
      question: `Is ${item.area.toLowerCase()} fat freezing painful?`,
      answer:
        "Initial cold and pressure are common, then the area often becomes numb. Comfort varies by patient.",
    },
    {
      question: `When will ${item.area.toLowerCase()} results show?`,
      answer:
        "Subtle change can start in weeks, with clearer contour typically assessed around 8-12 weeks.",
    },
  ],
  relatedLinks: [
    { label: "Book Consultation", href: "/book" },
    { label: "Fat Freezing Main Hub", href: "/fat-freezing" },
    { label: "Results Timeline", href: "/results-timeline" },
  ],
  showFromPrice: true,
}));

const locationPageConfig = [
  { slug: "fat-freezing-jumeirah", area: "Jumeirah", travelCue: "around 5-15 minutes by car" },
  { slug: "fat-freezing-downtown-dubai", area: "Downtown Dubai", travelCue: "around 15-25 minutes by car" },
  { slug: "fat-freezing-business-bay", area: "Business Bay", travelCue: "around 15-25 minutes by car" },
  { slug: "fat-freezing-dubai-marina", area: "Dubai Marina", travelCue: "around 20-35 minutes by car" },
  { slug: "fat-freezing-palm-jumeirah", area: "Palm Jumeirah", travelCue: "around 20-35 minutes by car" },
  { slug: "fat-freezing-jlt", area: "JLT", travelCue: "around 20-35 minutes by car" },
  { slug: "fat-freezing-deira", area: "Deira", travelCue: "around 20-35 minutes by car" },
  { slug: "fat-freezing-bur-dubai", area: "Bur Dubai", travelCue: "around 15-30 minutes by car" },
  { slug: "fat-freezing-al-barsha", area: "Al Barsha", travelCue: "around 20-30 minutes by car" },
] as const;

const locationPages: PageData[] = locationPageConfig.map((loc) => ({
  slug: loc.slug,
  pageType: "location",
  title: `Fat Freezing ${loc.area} | Cryolipolysis Dubai Clinic Access`,
  description: `Fat freezing for clients in ${loc.area}. Visit our doctor-led Jumeirah 1 clinic for cryolipolysis consultation and booking support.`,
  h1: `Fat Freezing Near ${loc.area}`,
  subheading:
    "Serving clients across Dubai from our Jumeirah 1 clinic location.",
  sections: [
    {
      heading: `From ${loc.area} to Our Clinic`,
      paragraphs: [
        `If you are based in ${loc.area}, you can access our Jumeirah 1 clinic for consultation and treatment planning.`,
        `Typical journey time is ${loc.travelCue}, depending on traffic window and route choice.`,
        "We support appointment scheduling windows to reduce travel friction around work hours.",
      ],
    },
    {
      heading: "What Happens at Your First Visit",
      paragraphs: [
        "Your first visit includes area assessment, suitability review, and treatment plan discussion.",
        "You leave with expected timeline, starting package guidance, and booking options.",
      ],
    },
    {
      heading: "How to Reach Us",
      paragraphs: [
        "Primary clinic address: Jumeira St - Jumeirah - Jumeirah 1 - Dubai - United Arab Emirates.",
        `Call or WhatsApp before travel from ${loc.area} if you want route, parking, or timing guidance.`,
      ],
    },
  ],
  faqs: [
    {
      question: `Do you have a branch in ${loc.area}?`,
      answer:
        "Our primary location is in Jumeirah 1, and we welcome bookings from all major Dubai areas.",
    },
    {
      question: "Can I schedule evening appointments?",
      answer:
        "Subject to availability, evening-friendly time windows are often available.",
    },
    {
      question: "Can I book directly online?",
      answer:
        "Yes, submit your booking request online and our team confirms your slot shortly.",
    },
  ],
  relatedLinks: [
    { label: "Book Consultation", href: "/book" },
    { label: "Fat Freezing Hub", href: "/fat-freezing" },
    { label: "Contact", href: "/contact" },
  ],
}));

const secondaryPages: PageData[] = [
  {
    slug: "aqualyx",
    pageType: "secondary",
    title: "Aqualyx Dubai | Fat Dissolving Injection Consultation",
    description:
      "Aqualyx fat dissolving consultations in Dubai with doctor-led suitability checks and clear treatment planning.",
    h1: "Aqualyx Fat Dissolving in Dubai",
    subheading:
      "Supportive option for selected localized fat concerns when injection-based treatment is suitable.",
    heroImage: ASSETS_MAP.aqualyx.src,
    sections: [
      {
        heading: "How Aqualyx Is Positioned",
        paragraphs: [
          "Aqualyx can support selected localized fat concerns in medically suitable cases.",
          "Treatment planning and contraindication screening are required before injection protocols.",
        ],
      },
      {
        heading: "Best for / Not for",
        paragraphs: [
          "Best for: small, localized fat concerns where injection route is clinically suitable.",
          "Not for: generalized weight loss goals or patients seeking zero-needle treatments.",
        ],
      },
      {
        heading: "Fat Freezing Cross-Over",
        paragraphs: [
          "If your priority is non-invasive fat reduction with no injections, fat freezing is our speciality pathway.",
          "Ask for a comparison consultation to choose the right plan.",
        ],
      },
    ],
    bestFor: [
      "Localized small areas",
      "Patients open to injectable protocols",
      "Structured multi-session planning",
    ],
    notFor: ["Needle-averse patients", "General obesity goals", "No-consultation requests"],
    faqs: [
      {
        question: "Is Aqualyx better than fat freezing?",
        answer:
          "They serve different profiles. For non-invasive fat reduction, fat freezing is often preferred.",
      },
      {
        question: "Can I combine Aqualyx with fat freezing?",
        answer:
          "In selected cases yes, with doctor-led sequencing.",
      },
    ],
    relatedLinks: secondaryCrossSellLinks,
    showFromPrice: true,
  },
  {
    slug: "ultrasound-cavitation",
    pageType: "secondary",
    title: "Ultrasound Cavitation Dubai | Non-Surgical Inch-Loss Support",
    description:
      "Ultrasound cavitation in Dubai for non-surgical inch-loss support, with consultation-led planning and realistic outcomes.",
    h1: "Ultrasound Cavitation in Dubai",
    subheading:
      "A supportive contour treatment that can complement fat freezing plans in selected cases.",
    heroImage: ASSETS_MAP.cavitation.src,
    sections: [
      {
        heading: "How Cavitation Fits",
        paragraphs: [
          "Cavitation is often used as an adjunct contour support treatment rather than a standalone replacement for cryolipolysis.",
          "Protocol and session count vary by area and baseline profile.",
        ],
      },
      {
        heading: "Best for / Not for",
        paragraphs: [
          "Best for: mild contour support and clients needing non-invasive supportive protocols.",
          "Not for: patients expecting one-session dramatic fat-loss outcomes.",
        ],
      },
      {
        heading: "Fat Freezing Cross-Over",
        paragraphs: [
          "If your core goal is targeted stubborn fat reduction, fat freezing remains our main speciality.",
          "Cavitation can be considered as an enhancement layer where appropriate.",
        ],
      },
    ],
    bestFor: ["Mild contour support", "Adjunct to cryolipolysis", "Non-surgical protocols"],
    notFor: ["Single-session dramatic change", "Weight-loss replacement"],
    faqs: [
      {
        question: "Do cavitation results appear quickly?",
        answer:
          "Changes can be gradual and depend on protocol adherence and lifestyle support.",
      },
      {
        question: "Can cavitation replace fat freezing?",
        answer:
          "Not always. Fat freezing is often preferred for localized stubborn-fat reduction.",
      },
    ],
    relatedLinks: secondaryCrossSellLinks,
    showFromPrice: true,
  },
  {
    slug: "radiofrequency-skin-tightening",
    pageType: "secondary",
    title: "Radiofrequency Skin Tightening Dubai | RF Contour Support",
    description:
      "Radiofrequency skin tightening in Dubai for tone and firmness support, with medically guided treatment planning.",
    h1: "Radiofrequency Skin Tightening in Dubai",
    subheading:
      "Skin-firmness support that can complement fat-reduction plans.",
    heroImage: ASSETS_MAP.rf.src,
    sections: [
      {
        heading: "RF Treatment Role",
        paragraphs: [
          "Radiofrequency treatment supports skin quality and firmness goals in selected zones.",
          "It can be integrated with broader body contouring plans where clinically appropriate.",
        ],
      },
      {
        heading: "Best for / Not for",
        paragraphs: [
          "Best for: skin tightening support and contour refinement.",
          "Not for: primary stubborn fat reduction when cryolipolysis is indicated.",
        ],
      },
      {
        heading: "Fat Freezing Cross-Over",
        paragraphs: [
          "If your primary goal is non-invasive fat reduction, fat freezing is our speciality and starting pathway.",
          "RF can be layered later for selected skin goals.",
        ],
      },
    ],
    bestFor: ["Skin tone support", "Contour refinement", "Adjunct planning"],
    notFor: ["Primary fat-volume reduction", "Unscreened skin conditions"],
    faqs: [
      {
        question: "Does RF melt fat the same way as cryolipolysis?",
        answer:
          "No. RF and cryolipolysis have different mechanisms and treatment goals.",
      },
      {
        question: "Can RF be combined with cavitation?",
        answer: "Yes, combinations are used in selected non-surgical contour plans.",
      },
    ],
    relatedLinks: secondaryCrossSellLinks,
    showFromPrice: true,
  },
  {
    slug: "lemon-bottle-fat-dissolving",
    pageType: "secondary",
    title: "Lemon Bottle Dubai | Fat Dissolving Consultation",
    description:
      "Lemon Bottle fat dissolving consultation in Dubai with clinician-led suitability and realistic treatment planning.",
    h1: "Lemon Bottle Fat Dissolving in Dubai",
    subheading:
      "Injection-based contour support for selected small areas.",
    heroImage: ASSETS_MAP.lemonBottle.src,
    sections: [
      {
        heading: "Treatment Positioning",
        paragraphs: [
          "Lemon Bottle is offered for selected small-area fat concerns with consultation-based suitability checks.",
          "Protocol decisions are individualized and guided by clinical assessment.",
        ],
      },
      {
        heading: "Best for / Not for",
        paragraphs: [
          "Best for: targeted small-area support where injection protocol is suitable.",
          "Not for: non-invasive-only preference or broad fat-volume goals.",
        ],
      },
      {
        heading: "Fat Freezing Cross-Over",
        paragraphs: [
          "If you prefer a non-invasive path, fat freezing is our speciality and often the primary recommendation.",
          "We can compare both pathways during consultation.",
        ],
      },
    ],
    bestFor: ["Small localized zones", "Injection-acceptable plans"],
    notFor: ["Needle-averse clients", "Large-volume contour goals"],
    faqs: [
      {
        question: "Is Lemon Bottle the same as fat freezing?",
        answer: "No. Lemon Bottle is injection-based, while fat freezing is non-invasive cooling.",
      },
      {
        question: "Which is better for no downtime preference?",
        answer:
          "For non-invasive fat-reduction intent, fat freezing is usually the preferred route.",
      },
    ],
    relatedLinks: secondaryCrossSellLinks,
    showFromPrice: true,
  },
  {
    slug: "hifem-sculpting",
    pageType: "secondary",
    title: "HIFEM Sculpting Dubai | Focused Electromagnetic Body Shaping",
    description:
      "HIFEM body sculpting in Dubai for muscle-focused contour support and treatment planning with medical oversight.",
    h1: "HIFEM Sculpting in Dubai",
    subheading:
      "Muscle-focused body shaping support that can complement fat-reduction strategies.",
    heroImage: ASSETS_MAP.hifem.src,
    sections: [
      {
        heading: "Where HIFEM Fits",
        paragraphs: [
          "HIFEM protocols are typically used for muscle-focused shaping and contour support.",
          "In fat-focused cases, cryolipolysis may remain the primary pathway.",
        ],
      },
      {
        heading: "Best for / Not for",
        paragraphs: [
          "Best for: body shaping goals with muscle emphasis.",
          "Not for: clients expecting it to replace targeted fat freezing.",
        ],
      },
      {
        heading: "Fat Freezing Cross-Over",
        paragraphs: [
          "For non-invasive stubborn fat reduction, fat freezing is our specialist treatment.",
          "Hybrid plans can be discussed where goals include both fat and tone outcomes.",
        ],
      },
    ],
    bestFor: ["Muscle-focused shaping", "Adjunct contour plans"],
    notFor: ["Primary localized fat reduction only"],
    faqs: [
      {
        question: "Can HIFEM replace cryolipolysis?",
        answer:
          "Not usually. They target different goals and can be combined in selected plans.",
      },
      {
        question: "How many sessions are typical?",
        answer: "Session count depends on goal, body area, and baseline profile.",
      },
    ],
    relatedLinks: secondaryCrossSellLinks,
    showFromPrice: true,
  },
  {
    slug: "non-surgical-brazilian-bum-lift",
    pageType: "secondary",
    title: "Non-Surgical Brazilian Bum Lift Dubai | Body Contouring Support",
    description:
      "Non-surgical Brazilian bum lift in Dubai with doctor-led consultation and realistic contour expectations.",
    h1: "Non-Surgical Brazilian Bum Lift in Dubai",
    subheading:
      "Shape-focused body contouring support with consultation-led planning.",
    heroImage: ASSETS_MAP.bbl.src,
    sections: [
      {
        heading: "Treatment Role",
        paragraphs: [
          "Non-surgical BBL protocols support contour shaping and volume enhancement goals in selected cases.",
          "Your consultation determines suitability and expected improvement range.",
        ],
      },
      {
        heading: "Best for / Not for",
        paragraphs: [
          "Best for: non-surgical contour enhancement preferences.",
          "Not for: patients expecting surgical-equivalent outcomes in one session.",
        ],
      },
      {
        heading: "Fat Freezing Cross-Over",
        paragraphs: [
          "If your main objective is stubborn fat reduction, fat freezing is our hero treatment pathway.",
          "BBL-style protocols can be discussed separately where shape goals differ.",
        ],
      },
    ],
    bestFor: ["Shape-focused goals", "Non-surgical preferences"],
    notFor: ["Surgical-equivalent expectations", "Unsuitable baseline anatomy"],
    faqs: [
      {
        question: "Is this treatment the same as surgical BBL?",
        answer: "No. Non-surgical protocols have different mechanisms and more conservative outcomes.",
      },
      {
        question: "Can this be combined with fat freezing?",
        answer: "In selected plans, yes. We sequence safely based on your priorities.",
      },
    ],
    relatedLinks: secondaryCrossSellLinks,
    showFromPrice: true,
  },
  {
    slug: "cellulite-reduction",
    pageType: "secondary",
    title: "Cellulite Reduction Dubai | Non-Surgical Body Texture Support",
    description:
      "Cellulite reduction treatment planning in Dubai with non-surgical options and doctor-led suitability assessment.",
    h1: "Cellulite Reduction in Dubai",
    subheading:
      "Texture-focused support as part of broader body contouring strategies.",
    sections: [
      {
        heading: "Cellulite-Specific Goals",
        paragraphs: [
          "Cellulite treatment focuses on skin texture appearance rather than direct fat-volume reduction only.",
          "Treatment combinations are selected based on area profile and tissue response.",
        ],
      },
      {
        heading: "Best for / Not for",
        paragraphs: [
          "Best for: visible texture concerns and contour refinement needs.",
          "Not for: expecting cellulite protocol to replace targeted fat-freezing pathways.",
        ],
      },
      {
        heading: "Fat Freezing Cross-Over",
        paragraphs: [
          "If your priority is non-invasive stubborn fat reduction, fat freezing remains our specialist treatment.",
          "Cellulite protocols can be added where clinically useful.",
        ],
      },
    ],
    bestFor: ["Texture concerns", "Contour refinement"],
    notFor: ["Primary fat-volume reduction only"],
    faqs: [
      {
        question: "Can cellulite treatment remove deep fat pockets?",
        answer: "Not as a primary mechanism. Fat-focused goals are usually addressed with cryolipolysis.",
      },
      {
        question: "How quickly do texture changes appear?",
        answer: "Texture improvement is gradual and may require staged sessions.",
      },
    ],
    relatedLinks: secondaryCrossSellLinks,
    showFromPrice: true,
  },
  {
    slug: "non-surgical-breast-lift",
    pageType: "secondary",
    title: "Non-Surgical Breast Lift Dubai | Consultation-Led Contour Support",
    description:
      "Non-surgical breast lift consultations in Dubai with realistic expectation setting and doctor-led treatment planning.",
    h1: "Non-Surgical Breast Lift in Dubai",
    subheading:
      "Shape and lift-focused support for selected cases without surgery.",
    heroImage: ASSETS_MAP.breastLift.src,
    sections: [
      {
        heading: "How We Position Non-Surgical Breast Lift",
        paragraphs: [
          "This treatment focuses on visible lift and contour support in medically suitable cases.",
          "Consultation is required to align treatment choice with anatomy, skin quality, and realistic outcomes.",
        ],
      },
      {
        heading: "Best for / Not for",
        paragraphs: [
          "Best for: patients seeking non-surgical enhancement and gradual visible improvement.",
          "Not for: surgical-equivalent expectations or no-consultation treatment requests.",
        ],
      },
      {
        heading: "Fat Freezing Cross-Over",
        paragraphs: [
          "If your primary goal is non-invasive fat reduction, fat freezing remains our specialist treatment.",
          "Breast-lift protocols are handled separately and discussed only when clinically appropriate.",
        ],
      },
    ],
    bestFor: ["Non-surgical contour support", "Gradual enhancement goals"],
    notFor: ["Surgical-equivalent result expectation", "No consultation requests"],
    faqs: [
      {
        question: "Is this the same as breast surgery?",
        answer:
          "No. This is a non-surgical pathway with conservative, consultation-led outcome expectations.",
      },
      {
        question: "Can I combine this with body contouring?",
        answer:
          "Yes, selected plans combine treatments based on goals and clinical suitability.",
      },
    ],
    relatedLinks: secondaryCrossSellLinks,
    showFromPrice: true,
  },
  {
    slug: "hifu-vaginal-tightening",
    pageType: "secondary",
    title: "HIFU Vaginal Tightening Dubai | Non-Surgical Intimate Wellness Support",
    description:
      "HIFU vaginal tightening consultations in Dubai with clinician-led suitability review and expectation-focused guidance.",
    h1: "HIFU Vaginal Tightening in Dubai",
    subheading:
      "Non-surgical intimate wellness support with confidential consultation.",
    heroImage: ASSETS_MAP.hifuVaginal.src,
    sections: [
      {
        heading: "Treatment Positioning",
        paragraphs: [
          "HIFU vaginal tightening is offered as a non-surgical intimate wellness support option for selected cases.",
          "Consultation covers symptoms, goals, contraindications, and planned treatment intervals.",
        ],
      },
      {
        heading: "Best for / Not for",
        paragraphs: [
          "Best for: patients seeking non-surgical intimate tightening support with staged sessions.",
          "Not for: untreated gynecological conditions or anyone avoiding consultation and screening.",
        ],
      },
      {
        heading: "Fat Freezing Cross-Over",
        paragraphs: [
          "For body fat reduction goals, fat freezing remains our specialist and primary pathway.",
          "We separate intimate wellness and body-contouring plans to keep protocols precise.",
        ],
      },
    ],
    bestFor: ["Non-surgical intimate support", "Consultation-led treatment planning"],
    notFor: ["No-screening requests", "Unassessed medical contraindications"],
    faqs: [
      {
        question: "Is consultation private and confidential?",
        answer:
          "Yes. Consultations are handled confidentially with clear discussion of suitability and options.",
      },
      {
        question: "How many sessions are usually needed?",
        answer:
          "Session count varies by goals and baseline profile; your clinician confirms this during consultation.",
      },
    ],
    relatedLinks: secondaryCrossSellLinks,
    showFromPrice: true,
  },
  {
    slug: "hifu-facelift-and-body-tightening",
    pageType: "secondary",
    title: "HIFU Facelift and Body Tightening Dubai | Non-Surgical Lift Support",
    description:
      "HIFU facelift and body tightening consultations in Dubai with medically guided planning and realistic timeline expectations.",
    h1: "HIFU Facelift and Body Tightening in Dubai",
    subheading:
      "Lift and tighten support for selected face and body concerns.",
    heroImage: ASSETS_MAP.hifuLift.src,
    sections: [
      {
        heading: "Where HIFU Lift Fits",
        paragraphs: [
          "HIFU lift protocols focus on tissue tightening and appearance support rather than direct fat-volume reduction.",
          "Treatment suitability depends on skin profile, laxity grade, and target area.",
        ],
      },
      {
        heading: "Best for / Not for",
        paragraphs: [
          "Best for: non-surgical tightening goals with realistic, progressive expectations.",
          "Not for: instant surgical-equivalent lift expectations or unscreened cases.",
        ],
      },
      {
        heading: "Fat Freezing Cross-Over",
        paragraphs: [
          "If your main objective is stubborn fat reduction, fat freezing is our specialist treatment and first evaluation pathway.",
          "HIFU lift can be considered as an adjunct when skin-tightening goals are also present.",
        ],
      },
    ],
    bestFor: ["Tightening-focused goals", "Face and body refinement support"],
    notFor: ["Primary fat-volume reduction only", "Surgical-equivalent expectations"],
    faqs: [
      {
        question: "Is HIFU lift the same as cryolipolysis fat freezing?",
        answer:
          "No. HIFU lift and cryolipolysis target different outcomes and can be combined selectively.",
      },
      {
        question: "How quickly are changes visible?",
        answer:
          "Results are progressive and usually evaluated over staged follow-up windows.",
      },
    ],
    relatedLinks: secondaryCrossSellLinks,
    showFromPrice: true,
  },
  {
    slug: "hydroderma-facial",
    pageType: "secondary",
    title: "HydroDerma Facial Dubai | Skin Health and Glow Support",
    description:
      "HydroDerma facial treatments in Dubai with consultation-led skin analysis and treatment recommendations.",
    h1: "HydroDerma Facial in Dubai",
    subheading:
      "A skin-focused treatment for hydration, clarity, and texture support.",
    heroImage: ASSETS_MAP.hydroderma.src,
    sections: [
      {
        heading: "Treatment Focus",
        paragraphs: [
          "HydroDerma facial protocols target skin hydration, texture quality, and visible glow support.",
          "Suitability and session planning are tailored after skin analysis.",
        ],
      },
      {
        heading: "Best for / Not for",
        paragraphs: [
          "Best for: hydration, skin refresh, and non-invasive facial maintenance plans.",
          "Not for: patients seeking direct localized fat reduction outcomes.",
        ],
      },
      {
        heading: "Fat Freezing Cross-Over",
        paragraphs: [
          "If your objective is non-invasive fat reduction, fat freezing is our specialist pathway and the primary recommendation.",
          "HydroDerma supports skin goals and can be scheduled alongside body contouring journeys.",
        ],
      },
    ],
    bestFor: ["Hydration support", "Texture and glow goals"],
    notFor: ["Direct fat-reduction outcomes", "No skin assessment requests"],
    faqs: [
      {
        question: "Is HydroDerma facial a body-contouring treatment?",
        answer:
          "No. It is a skin-focused facial treatment, separate from fat-reduction procedures.",
      },
      {
        question: "Can I do HydroDerma and fat freezing in the same plan?",
        answer:
          "Yes, many patients combine skin and body protocols with proper scheduling.",
      },
    ],
    relatedLinks: secondaryCrossSellLinks,
    showFromPrice: true,
  },
  {
    slug: "radio-frequency-face-lift",
    pageType: "secondary",
    title: "Radio Frequency Face Lift Dubai | Non-Surgical RF Tightening",
    description:
      "Radio frequency face lift support in Dubai with consultation-led planning and realistic non-surgical tightening expectations.",
    h1: "Radio Frequency Face Lift in Dubai",
    subheading:
      "RF-based facial tightening support with staged treatment planning.",
    heroImage: ASSETS_MAP.rfFaceLift.src,
    sections: [
      {
        heading: "RF Face Lift Positioning",
        paragraphs: [
          "Radio frequency face-lift protocols focus on tightening and texture improvement support.",
          "Consultation confirms if RF is suitable for your skin profile and contour goals.",
        ],
      },
      {
        heading: "Best for / Not for",
        paragraphs: [
          "Best for: non-surgical facial tightening and gradual refinement.",
          "Not for: expectations of immediate surgical-level lifting.",
        ],
      },
      {
        heading: "Fat Freezing Cross-Over",
        paragraphs: [
          "For body fat-reduction goals, fat freezing is our specialist treatment and conversion focus.",
          "RF face-lift pathways are discussed separately for facial skin concerns.",
        ],
      },
    ],
    bestFor: ["Facial tightening support", "Progressive non-surgical refinement"],
    notFor: ["Primary body-fat reduction goals", "Surgical-level expectation"],
    faqs: [
      {
        question: "Is RF face lift painful?",
        answer:
          "Comfort varies by patient, but treatment is generally well tolerated with protocol-led settings.",
      },
      {
        question: "Can RF face lift replace surgery?",
        answer:
          "No. It is a non-surgical support treatment with more conservative outcomes.",
      },
    ],
    relatedLinks: secondaryCrossSellLinks,
    showFromPrice: true,
  },
  {
    slug: "plasma-eye-lift",
    pageType: "secondary",
    title: "Plasma Eye Lift Dubai | Non-Surgical Eye Area Tightening",
    description:
      "Plasma eye lift consultations in Dubai with clinician-led suitability review and careful eye-area protocol planning.",
    h1: "Plasma Eye Lift in Dubai",
    subheading:
      "Targeted non-surgical eye-area tightening support for selected cases.",
    heroImage: ASSETS_MAP.plasmaEye.src,
    sections: [
      {
        heading: "Plasma Eye Lift Positioning",
        paragraphs: [
          "Plasma eye lift focuses on tightening support for selected upper and lower eye-area concerns.",
          "Because the eye area is delicate, consultation and protocol precision are essential.",
        ],
      },
      {
        heading: "Best for / Not for",
        paragraphs: [
          "Best for: selected eye-area tightening goals with realistic expectations.",
          "Not for: untreated eye conditions or anyone avoiding clinical screening.",
        ],
      },
      {
        heading: "Fat Freezing Cross-Over",
        paragraphs: [
          "For non-invasive fat reduction and body contouring, fat freezing remains our specialist pathway.",
          "Plasma eye-lift treatments are separate and planned only for eye-area indications.",
        ],
      },
    ],
    bestFor: ["Eye-area tightening support", "Non-surgical contour refinement goals"],
    notFor: ["Unscreened eye conditions", "Body-fat reduction expectations"],
    faqs: [
      {
        question: "Is plasma eye lift the same as RF or HIFU?",
        answer:
          "No. They are different technologies and are selected based on area, goal, and clinical suitability.",
      },
      {
        question: "How many sessions are needed?",
        answer:
          "Session planning is individualized and confirmed after consultation.",
      },
    ],
    relatedLinks: secondaryCrossSellLinks,
    showFromPrice: true,
  },
];

const allPages = [...corePages, ...areaPages, ...locationPages, ...secondaryPages];

export const ALL_PAGE_DATA: PageData[] = allPages;

export const ALL_SLUGS = ALL_PAGE_DATA.map((page) => page.slug);

export const PAGE_DATA_MAP = new Map(ALL_PAGE_DATA.map((page) => [page.slug, page]));

export function getPageDataBySlug(slug: string): PageData | undefined {
  return PAGE_DATA_MAP.get(slug);
}

export const FAT_FREEZING_CLUSTER_LINKS: LinkItem[] = [
  { label: "Fat Freezing", href: "/fat-freezing" },
  { label: "Cryolipolysis", href: "/cryolipolysis" },
  { label: "Fat Freeze", href: "/fat-freeze" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Results Timeline", href: "/results-timeline" },
  { label: "Side Effects", href: "/side-effects-safety" },
  { label: "Aftercare", href: "/fat-freezing-aftercare" },
  { label: "Fat Freezing FAQ", href: "/fat-freezing-faq" },
  { label: "Fat Freezing vs CoolSculpting", href: "/coolsculpting-vs-cryolipolysis" },
];

export const LOCATION_CLUSTER_LINKS: LinkItem[] = locationPages.map((p) => ({
  label: p.h1.replace("Fat Freezing Near ", "").replace("Fat Freezing ", ""),
  href: `/${p.slug}`,
}));
