import { Service, Feature, Testimonial, FAQItem, ProcessStep, StatItem, BeforeAfterItem } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "deep-clean",
    title: "Complete Deep Cleaning",
    description: "An intensive, detailed top-to-bottom clean designed to tackle deep-seated dust, grime, and overlooked areas.",
    icon: "Sparkles",
    priceEstimate: "Starts at $149",
    benefits: ["Baseboard & trim detailing", "Appliance interior sanitizing", "Deep dust extraction", "Hard-to-reach areas cleaned"]
  },
  {
    id: "regular-maintenance",
    title: "Routine Maintenance",
    description: "Keep your spaces clean and healthy with regular touch-ups tailored to your ongoing calendar and lifestyle.",
    icon: "CalendarRange",
    priceEstimate: "Starts at $89",
    benefits: ["Surface dusting & wiping", "Vacuuming & mopping floors", "Kitchen counter cleaning", "Trash emptying"]
  },
  {
    id: "move-in-out",
    title: "Move-In / Move-Out Clean",
    description: "Ensure a flawless transition. We prepare the space to look brand new for its next occupants, securing your deposit.",
    icon: "Home",
    priceEstimate: "Starts at $189",
    benefits: ["Cabinet & drawer cleaning", "Oven & fridge interiors", "Wall spot washing", "Sanitized bathrooms"]
  },
  {
    id: "window-glass",
    title: "Detailed Window & Glass",
    description: "Streak-free, crystal-clear window washing that lets natural light flood into your beautifully refreshed spaces.",
    icon: "Layers",
    priceEstimate: "Starts at $59",
    benefits: ["Interior & exterior panes", "Screen dust removal", "Sill & track wiping", "Streak-free guarantee"]
  },
  {
    id: "post-construction",
    title: "Post-Construction Restores",
    description: "Tackle heavy construction dust, paint drops, residue, and wood particles post-remodel or fresh build.",
    icon: "HardHat",
    priceEstimate: "Starts at $249",
    benefits: ["Fine dust filtration", "Adhesive & paint spot removal", "Air duct register wiping", "Heavy debris sweep"]
  },
  {
    id: "sanitization-care",
    title: "High-Sanitization Care",
    description: "Advanced disinfection protocols utilizing non-toxic, hospital-grade agents to secure optimal hygiene and health.",
    icon: "ShieldAlert",
    priceEstimate: "Starts at $119",
    benefits: ["Hospital-grade disinfectant", "High-touch surface sterilization", "Electrostatic spray option", "Eco-friendly protection"]
  }
];

export const FEATURES_DATA: Feature[] = [
  {
    id: "experienced-pro",
    title: "Experienced Professionals",
    description: "Every member is background checked, fully bonded, insured, and thoroughly trained to provide our signature high-end care.",
    icon: "Award"
  },
  {
    id: "eco-friendly",
    title: "Eco-Friendly Products",
    description: "We exclusively use plant-based, non-toxic, biodegradable products that are safe for your children, pets, and the environment.",
    icon: "Leaf"
  },
  {
    id: "affordable-pricing",
    title: "Affordable & Transparent",
    description: "Get precise flat rates up front with zero surprise surcharges or hidden fees. We build packages around your budget.",
    icon: "DollarSign"
  },
  {
    id: "reliable-scheduling",
    title: "Reliable Scheduling",
    description: "We understand your time is valuable. Expect punctual arrivals, rapid real-time notifications, and flexible rescheduling.",
    icon: "Clock"
  },
  {
    id: "quality-guaranteed",
    title: "100% Satisfaction Guarantee",
    description: "We take extreme pride in our craftsmanship. If any spot is missed, notify us within 24 hours, and we will reclean it for free.",
    icon: "CheckCircle"
  },
  {
    id: "fast-response",
    title: "Fast Active Response",
    description: "Our customer success support team responds to quotes, inquiries, and booking adjustments in under 15 minutes.",
    icon: "Zap"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Request a Free Quote",
    description: "Fill out our easy 60-second online quote form with your basic parameters.",
    icon: "FileText"
  },
  {
    stepNumber: 2,
    title: "Schedule Your Date",
    description: "Choose a time slot that matches your routine perfectly. We confirm instantly.",
    icon: "CalendarCheck"
  },
  {
    stepNumber: 3,
    title: "We Clean to Perfection",
    description: "Our meticulous crew arrives on time and executes our thorough checklist.",
    icon: "SprayCan"
  },
  {
    stepNumber: 4,
    title: "Enjoy Your Space",
    description: "Breathe in the freshness and relax in your spotless, beautifully organized environment.",
    icon: "Smile"
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: "completed",
    value: 12450,
    suffix: "+",
    label: "Cleanings Completed",
    icon: "CheckSquare"
  },
  {
    id: "happy",
    value: 4800,
    suffix: "+",
    label: "Satisfied Customers",
    icon: "Heart"
  },
  {
    id: "years",
    value: 8,
    suffix: "+",
    label: "Years of Excellence",
    icon: "TrendingUp"
  },
  {
    id: "team",
    value: 45,
    suffix: "+",
    label: "Active Professionals",
    icon: "Users"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    role: "Residential Homeowner",
    rating: 5,
    text: "CleanCamp completely changed how I think about professional cleaning. They pay attention to tiny details I never would have noticed. The baseboards look brand new, and the fresh scent they leave behind is incredible without being overpowering!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    verified: true
  },
  {
    id: "t2",
    name: "Marcus Chen",
    role: "Office Operations Director",
    rating: 5,
    text: "We switched to CleanCamp for our main headquarters, and the team was thrilled. Punctual, extremely reliable, and highly professional. Their communication is top-tier, and our office environment is noticeably cleaner and healthier.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    verified: true
  },
  {
    id: "t3",
    name: "Elena Rostova",
    role: "Property Manager",
    rating: 5,
    text: "As a property manager, prompt turnarounds are vital for lease success. CleanCamp's Move-In/Move-Out clean is second to none. They work fast and always guarantee my security deposits. Highly recommend their reliable crew!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    verified: true
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "q1",
    question: "What is included in a premium cleaning service?",
    answer: "Every CleanCamp session includes a comprehensive cleaning of surfaces, thorough vacuuming and mopping, sanitization of high-touch areas, kitchen and bathroom scrub-downs, dusting of furniture, and baseboard detail work. Deep cleans include internal windows, appliance interiors, and additional detail scrubbing."
  },
  {
    id: "q2",
    question: "Do I need to supply the cleaning equipment and products?",
    answer: "No, you don't! Our professional crew arrives fully equipped with commercial-grade vacuums, microfibers, and a comprehensive suite of EPA-certified, plant-based, eco-friendly cleaning solutions. If you prefer us to use a specific product of your own, just let us know during booking!"
  },
  {
    id: "q3",
    question: "Is your team insured and background-checked?",
    answer: "Absolutely. Security and peace of mind are our highest priorities. Every professional at CleanCamp undergoes a rigorous multi-state background check, comprehensive references screening, and active bonding. Our company is fully insured up to $2,000,000 in liability coverage."
  },
  {
    id: "q4",
    question: "Do I need to be present at home during the cleaning?",
    answer: "You are welcome to be home, but it is not required. Many of our regular clients provide a secure digital lockbox code, keyless entry, or leave keys with concierge desks. We will confirm your entry method during scheduling and message you as soon as the service begins and ends."
  },
  {
    id: "q5",
    question: "What happens if I need to cancel or reschedule?",
    answer: "We offer completely free schedule adjustments and cancellations. All we ask is a simple 24-hour advance notice. Any cancellation or reschedule within 24 hours of the appointment window may incur a standard late-notice handling fee."
  },
  {
    id: "q6",
    question: "How does the 100% satisfaction guarantee work?",
    answer: "It is simple: we guarantee our work. If you are ever dissatisfied with any part of our service, notify us via email or phone within 24 hours of completion. We will send a professional team member back to inspect and reclean the specified area absolutely free, no questions asked."
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: "kitchen-marble",
    category: "Kitchen Detail",
    title: "Marble Countertop & Backsplash Restoration",
    description: "Deep grease removal and stone polishing to bring back natural reflections and a spotless sheen.",
    beforeImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bathroom-grout",
    category: "Bathroom Polish",
    title: "Tile, Grout & Chrome Sparkling Revive",
    description: "Intense soap scum extraction, hard water stain elimination, and mirror-finished chrome detail.",
    beforeImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "lounge-living",
    category: "Living Space Dusting",
    title: "Premium Dust Extraction & Floor Finish",
    description: "Detail dusting of architectural shelving, intensive HEPA vacuuming, and wood floor polishing.",
    beforeImage: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
  }
];
