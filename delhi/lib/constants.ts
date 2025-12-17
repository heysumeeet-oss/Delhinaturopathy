import { ServiceItem, PrincipleItem, FAQItem, ConditionItem, PackageItem, DoctorProfile } from './types';

export const APP_NAME = "Delhi Wellness Haven";
export const ADDRESS = "Plot 12, Green Park Main, New Delhi, Delhi 110016";
export const PHONE = "+91 99887 76655";
export const WHATSAPP = "919988776655";
export const EMAIL = "info@delhiwellnesshaven.com";

// Keyword-rich introduction - Rewritten
export const HERO_TITLE = "Sanctuary for Natural Healing & Holistic Wellness in Delhi";
export const HERO_SUBTITLE = "Experience the transformative power of nature at Delhi's finest Naturopathy center. We offer a drug-less, integrative approach to health, focusing on revitalizing your body's innate healing wisdom.";

export const PRINCIPLES: PrincipleItem[] = [
  {
    title: "Treat the Whole Person",
    content: "We don't just treat symptoms; we care for the individual. Our approach considers the physical, mental, emotional, and spiritual aspects of your being as one integrated whole."
  },
  {
    title: "Identify the Cause",
    content: "True healing begins when we understand why illness occurs. We strive to identify and remove the underlying barriers to health, rather than just suppressing symptoms."
  },
  {
    title: "First Do No Harm",
    content: "We utilize gentle, non-invasive, and effective natural therapies that have no harmful side effects, ensuring your path to recovery is safe and sustainable."
  },
  {
    title: "Doctor as Teacher",
    content: "Empowerment is key to health. We educate you on the principles of healthy living and self-care, giving you the tools to maintain wellness for a lifetime."
  },
  {
    title: "Prevention is Best",
    content: "We focus on overall health promotion and disease prevention. By assessing risk factors and heredity, we help you take proactive steps to stay healthy."
  },
  {
    title: "Healing Power of Nature",
    content: "We trust in the Vis Medicatrix Naturae—the healing power of nature. Our therapies act as a catalyst to unlock your body's inherent ability to heal itself."
  }
];

// --- CONTENT ECOSYSTEM FOR SEO ---

export const TREATMENTS: ServiceItem[] = [
  {
    id: 'mud-therapy',
    title: 'Mud Therapy',
    shortDescription: 'Detoxifying mud applications to cool the body, absorb toxins, and improve skin vitality.',
    fullDescription: [
      "Our Therapeutic Earth Packs utilize mineral-rich soil that has been carefully sourced and treated. This ancient therapy is renowned for its ability to draw out toxins and cool the body's internal systems.",
      "At our Delhi center, we apply this healing earth to specific problem areas or as a full-body pack, helping to relax muscles and improve blood circulation."
    ],
    benefits: [
      "Absorbs excess heat and toxins from the body.",
      "Relieves stiffness and pain in joints.",
      "Improves skin texture and glow.",
      "Alleviates digestive issues like acidity.",
      "Promotes deep relaxation and stress relief."
    ],
    procedure: [
      "Clean, mineral-rich mud is mixed with water to create a consistent paste.",
      "It is applied smoothly over the affected area or the entire body.",
      "The pack remains for 20-30 minutes until it dries effectively.",
      "It is then washed off, leaving you feeling light and refreshed."
    ],
    iconName: 'Leaf'
  },
  {
    id: 'hydrotherapy',
    title: 'Hydrotherapy',
    shortDescription: 'Using water at varying temperatures to boost immunity and stimulate the body’s vital functions.',
    fullDescription: [
      "Water is the essence of life and a powerful healing medium. Our Curative Water Treatments use the thermal and mechanical effects of water to stimulate the immune system and detoxify the body.",
      "From invigorating spinal sprays to relaxing hip baths, our Delhi facility offers a comprehensive range of hydrotherapy options tailored to your needs."
    ],
    benefits: [
      "Enhances metabolic rate and digestion.",
      "Stimulates blood circulation and nerve function.",
      "Aids in the elimination of waste products.",
      "Relieves muscle spasms and pain.",
      "Invigorates the mind and body."
    ],
    iconName: 'Droplets'
  },
  {
    id: 'massage-therapy',
    title: 'Restorative Bodywork',
    shortDescription: 'Skillful manipulation of soft tissues to release chronic tension and restore energetic balance.',
    fullDescription: [
      "Restorative Bodywork at our center goes beyond simple relaxation. It is a therapeutic intervention designed to correct postural imbalances, improve lymphatic drainage, and release deep-seated tension.",
      "We use specific organic oils and varied strokes to target different layers of muscle, promoting a sense of ease and vitality throughout the body."
    ],
    benefits: [
      "Alleviates chronic back and neck pain.",
      "Improves joint flexibility and range of motion.",
      "Reduces stress hormones like cortisol.",
      "Stimulates the lymphatic system to clear toxins.",
      "Enhances sleep quality and mental alertness."
    ],
    iconName: 'HeartPulse'
  },
  {
    id: 'detox',
    title: 'Detoxification Programs',
    shortDescription: 'Systematic cleansing protocols to reset your digestive system and boost energy levels.',
    fullDescription: [
      "Our Purification Programs are designed to give your digestive system a much-needed rest. By removing the burden of heavy digestion, your body can redirect energy towards healing and repair.",
      "We utilize methods such as intermittent fasting, juice cleanses, and specific elimination diets, all monitored by our experts in Delhi."
    ],
    benefits: [
      "Resets the digestive system.",
      "Clears skin blemishes and acne.",
      "Increases vitality and reduces lethargy.",
      "Supports healthy weight management.",
      "Improves mental clarity and focus."
    ],
    iconName: 'Activity'
  },
  {
    id: 'yoga-therapy',
    title: 'Yoga Therapy',
    shortDescription: 'Customized yoga sequences designed to address specific ailments and promote mental peace.',
    fullDescription: [
      "Mindful Movement differs from a general yoga class. Here, we prescribe specific asanas, breathing techniques (Pranayama), and meditation practices to target your unique health challenges.",
      "Whether you suffer from hypertension, back pain, or anxiety, our therapists create a practice that supports your healing journey."
    ],
    benefits: [
      "Strengthens the body and improves posture.",
      "Calms the mind and reduces anxiety.",
      "Regulates hormonal imbalances.",
      "Increases respiratory capacity.",
      "Promotes a deep sense of inner peace."
    ],
    iconName: 'Sun'
  },
  {
    id: 'shirodhara',
    title: 'Blissful Head Therapy (Shirodhara)',
    shortDescription: 'A classic therapy involving the rhythmic pouring of warm oil to soothe the mind and nervous system.',
    fullDescription: [
      "Experience the ultimate state of tranquility with Blissful Head Therapy. A continuous stream of warm, medicated oil is poured over the forehead, stimulating the pituitary gland and calming the mind.",
      "This therapy is renowned for its ability to treat stress-related disorders and mental fatigue."
    ],
    benefits: [
      "Profoundly relaxes the nervous system.",
      "Alleviates anxiety, depression, and stress.",
      "Treats insomnia and improves sleep patterns.",
      "Nourishes the hair and scalp.",
      "Sharpens the senses and memory."
    ],
    iconName: 'Brain'
  },
  {
    id: 'acupressure',
    title: 'Vital Point Therapy (Acupressure)',
    shortDescription: 'Stimulating the body’s energy meridians to unblock flow and relieve physical discomfort.',
    fullDescription: [
      "Vital Point Therapy is based on the concept of energy flow or 'Prana'. By applying precise pressure to specific points on the body, we can unblock stagnant energy and restore balance.",
      "This non-invasive technique is excellent for pain management and boosting the body's natural defense mechanisms."
    ],
    benefits: [
      "Provides rapid pain relief.",
      "Reduces nausea and digestive discomfort.",
      "Relieves tension headaches.",
      "Balances the body's energy levels.",
      "Promotes general relaxation."
    ],
    iconName: 'Flower'
  },
  {
    id: 'acupuncture',
    title: 'Acupuncture',
    shortDescription: 'Traditional therapy using fine needles to stimulate energy flow and healing.',
    fullDescription: [
        "Acupuncture is a key component of traditional medicine that involves inserting very thin needles into specific points on the body.",
        "It stimulates sensory nerves under the skin and in the muscles, resulting in the body producing natural substances like pain-relieving endorphins."
    ],
    benefits: [
        "Relieves chronic pain (back, neck, joint).",
        "Treats headaches and migraines.",
        "Reduces stress and anxiety.",
        "Improves sleep quality.",
        "Boosts immune system."
    ],
    procedure: [
        "Consultation to identify problem areas.",
        "Insertion of sterile, single-use needles.",
        "Relaxation period of 20-30 minutes.",
        "Gentle removal of needles."
    ],
    iconName: 'Activity'
  },
  {
    id: 'diet-therapy',
    title: 'Diet & Nutrition Counseling',
    shortDescription: 'Using the medicinal properties of food to correct imbalances and nourish the body at a cellular level.',
    fullDescription: [
      "Functional Nutrition focuses on the idea that food is information for our genes. We create personalized dietary plans that provide the right raw materials for your body to function optimally.",
      "Our approach emphasizes whole, unprocessed foods that are alkaline in nature, helping to reduce inflammation and acidity."
    ],
    benefits: [
      "Corrects nutritional deficiencies.",
      "Reduces systemic inflammation.",
      "Supports healthy gut flora.",
      "Stabilizes blood sugar levels.",
      "Provides sustained energy throughout the day."
    ],
    iconName: 'Wind'
  }
];

export const CONDITIONS: ConditionItem[] = [
  {
    id: 'diabetes',
    title: 'Diabetes Reversal Program',
    shortDescription: 'Integrative strategies to regulate insulin sensitivity and manage blood sugar naturally.',
    symptoms: ['Excessive thirst', 'Frequent urination', 'Fatigue', 'Slow healing of cuts', 'Blurred vision'],
    causes: ['Insulin resistance', 'Poor diet', 'Sedentary lifestyle', 'Genetic predisposition', 'Chronic stress'],
    naturopathicTreatment: [
      "Low-glycemic, fiber-rich diet plans.",
      "Specific yoga asanas like Mandukasana to stimulate the pancreas.",
      "Stress reduction techniques to lower cortisol.",
      "Hydrotherapy to enhance circulation to extremities.",
      "Natural supplements to support glucose metabolism."
    ],
    relatedTreatments: ['diet-therapy', 'yoga-therapy', 'hydrotherapy']
  },
  {
    id: 'hypertension',
    title: 'Hypertension Management',
    shortDescription: 'Natural protocols to maintain healthy blood pressure and heart function.',
    symptoms: ['Headaches', 'Palpitations', 'Breathlessness', 'Nosebleeds', 'Anxiety'],
    causes: ['High salt intake', 'Chronic stress', 'Lack of exercise', 'Obesity', 'Smoking/Alcohol'],
    naturopathicTreatment: [
      "DASH-like diet focusing on fruits and vegetables.",
      "Relaxation therapies like Shirodhara and meditation.",
      "Regular aerobic exercise guidance.",
      "Herbs to support heart health.",
      "Massage to improve peripheral circulation."
    ],
    relatedTreatments: ['diet-therapy', 'shirodhara', 'massage-therapy']
  },
  {
    id: 'digestive-disorders',
    title: 'Digestive Disorder Treatment',
    shortDescription: 'Healing the gut to resolve issues like acidity, bloating, and IBS.',
    symptoms: ['Abdominal pain', 'Bloating', 'Acid reflux', 'Irregular bowel movements', 'Fatigue'],
    causes: ['Processed foods', 'Stress', 'Food sensitivities', 'Antibiotic use', 'Dehydration'],
    naturopathicTreatment: [
      "Elimination diet to identify triggers.",
      "Probiotic-rich foods and supplements.",
      "Stress management to improve the gut-brain axis.",
      "Abdominal packs and hydrotherapy.",
      "Detoxification to remove accumulated waste."
    ],
    relatedTreatments: ['diet-therapy', 'yoga-therapy', 'detox']
  },
  {
    id: 'arthritis',
    title: 'Arthritis & Pain Relief',
    shortDescription: 'Reducing inflammation and pain to restore movement and flexibility.',
    symptoms: ['Joint pain', 'Stiffness (especially morning)', 'Swelling', 'Reduced range of motion', 'Warmth in joints'],
    causes: ['Inflammation', 'Autoimmune response', 'Degeneration', 'Obesity', 'Previous injury'],
    naturopathicTreatment: [
      "Anti-inflammatory diet (rich in Omega-3s).",
      "Gentle movement therapies and aquatic exercises.",
      "Mud packs to reduce local swelling.",
      "Massage to improve blood flow to tissues.",
      "Hydrotherapy contrast baths."
    ],
    relatedTreatments: ['diet-therapy', 'yoga-therapy', 'mud-therapy']
  },
  {
    id: 'obesity',
    title: 'Weight Loss Program',
    shortDescription: 'Achieving your ideal weight through metabolic balance and lifestyle change, not crash diets.',
    symptoms: ['Excess body weight', 'Low energy', 'Breathlessness on exertion', 'Joint pain', 'Snoring/Sleep apnea'],
    causes: ['Caloric surplus', 'Hormonal imbalances', 'Emotional eating', 'Lack of sleep', 'Sedentary habits'],
    naturopathicTreatment: [
      "Whole-food based nutrition plan.",
      "Metabolism-boosting therapies.",
      "Activity and exercise prescriptions.",
      "Stress management to reduce cortisol-induced weight gain.",
      "Detox therapies to improve liver function."
    ],
    relatedTreatments: ['diet-therapy', 'yoga-therapy', 'detox']
  },
  {
    id: 'pcod-pcos',
    title: 'PCOD/PCOS Treatment',
    shortDescription: 'Holistic treatment for hormonal balance and reproductive health.',
    symptoms: ['Irregular periods', 'Weight gain', 'Acne', 'Hair thinning', 'Mood swings'],
    causes: ['Hormonal imbalance', 'Insulin resistance', 'Lifestyle factors', 'Stress', 'Inflammation'],
    naturopathicTreatment: [
        "Seed cycling for hormone balance.",
        "Low-glycemic diet.",
        "Yoga for pelvic health.",
        "Mud packs for abdominal cooling.",
        "Stress management techniques."
    ],
    relatedTreatments: ['diet-therapy', 'yoga-therapy', 'mud-therapy']
  },
  {
    id: 'stress-management',
    title: 'Stress & Anxiety Management',
    shortDescription: 'Natural therapies to calm the mind and restore nervous system balance.',
    symptoms: ['Anxiety', 'Insomnia', 'Muscle tension', 'Fatigue', 'Irritability'],
    causes: ['Work pressure', 'Emotional trauma', 'Poor sleep', 'Nutritional deficiencies', 'Lack of downtime'],
    naturopathicTreatment: [
        "Shirodhara for deep relaxation.",
        "Meditation and Pranayama.",
        "Massage therapy.",
        "Adaptogenic herbs (if applicable).",
        "Hydrotherapy for nervous system regulation."
    ],
    relatedTreatments: ['shirodhara', 'yoga-therapy', 'massage-therapy']
  }
];

export const DOCTOR: DoctorProfile = {
  name: "Dr. Rajesh Verma",
  title: "Senior Naturopathic Consultant",
  qualifications: ["B.N.Y.S (Bachelor of Naturopathy & Yogic Sciences)", "Diploma in Acupuncture", "Certified Lifestyle Medicine Specialist"],
  specializations: ["Metabolic Disorders", "Spine & Joint Care", "Stress Management"],
  experience: "18+ Years",
  bio: [
    "Dr. Rajesh Verma is a distinguished practitioner in the field of Naturopathy in Delhi. With nearly two decades of clinical experience, he brings a wealth of knowledge and a compassionate touch to his practice.",
    "Dr. Verma specializes in treating chronic lifestyle diseases by integrating ancient naturopathic wisdom with modern diagnostic tools. He is dedicated to helping patients achieve long-term health through education and personalized care."
  ],
  image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop"
};

export const PACKAGES: PackageItem[] = [
  {
    id: 'detox-7',
    title: '7-Day Vitality Cleanse',
    price: '₹7,500',
    duration: '7 Days',
    recommendedFor: "Quick reboot, skin glow, and improved digestion.",
    features: [
      "Comprehensive health assessment",
      "Daily detox treatments",
      "Customized juice and diet plan",
      "2 private yoga sessions",
      "1 full body massage"
    ]
  },
  {
    id: 'pain-15',
    title: '15-Day Pain Relief Journey',
    price: '₹15,500',
    duration: '15 Days',
    recommendedFor: "Chronic back pain, arthritis, and joint stiffness.",
    features: [
      "Doctor consultation and follow-up",
      "Daily targeted pain therapies",
      "Anti-inflammatory nutrition plan",
      "5 therapeutic movement sessions",
      "3 restorative massages"
    ]
  },
  {
    id: 'weight-21',
    title: '21-Day Metabolic Reset',
    price: '₹22,000',
    duration: '21 Days',
    recommendedFor: "Weight loss, hormonal balance, and lifestyle correction.",
    features: [
      "Full body composition analysis",
      "Daily metabolic boosting therapies",
      "Strictly monitored diet plan",
      "7 power yoga/fitness sessions",
      "3 lymphatic drainage massages"
    ]
  }
];

// Q&A Section specifically for "People Also Ask" SEO ranking
export const FAQS: FAQItem[] = [
  {
    question: "How does Naturopathy differ from regular medicine?",
    answer: "Naturopathy focuses on finding and treating the root cause of an illness rather than just managing symptoms. It uses natural, non-invasive therapies to support the body's innate ability to heal, avoiding the side effects often associated with conventional drugs."
  },
  {
    question: "What chronic diseases can you treat at your Delhi clinic?",
    answer: "We successfully manage and reverse various chronic conditions including Type 2 Diabetes, Hypertension, Arthritis, Digestive disorders (IBS, Constipation), Asthma, and skin conditions like Psoriasis and Eczema."
  },
  {
    question: "Are the treatments painful?",
    answer: "Not at all. Naturopathic treatments are generally very gentle and relaxing. Therapies like massage, mud packs, and hydrotherapy are often described by our patients as soothing and rejuvenating."
  },
  {
    question: "Where in Delhi is the center located?",
    answer: "Our Wellness Haven is situated in the peaceful neighborhood of Green Park Main, easily accessible by Metro and road. We provide a calm oasis in the heart of the city."
  }
];

export const SEO_AREAS = [
  "Green Park", "Hauz Khas", "Safdarjung Enclave", "Vasant Vihar", "South Extension",
  "Lajpat Nagar", "Defence Colony", "Saket", "Malviya Nagar", "Nehru Place",
  "Okhla", "Jasola", "Sarita Vihar", "Greater Kailash"
];
