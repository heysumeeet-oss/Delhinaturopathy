import { ServiceItem, PrincipleItem, FAQItem, ConditionItem, PackageItem, DoctorProfile } from './types';

export const APP_NAME = "Lucknow Natural Healing Centre";
export const ADDRESS = "123 Wellness Lane, Gomti Nagar, Lucknow, Uttar Pradesh 226010";
export const PHONE = "+91 88742 06748";
export const WHATSAPP = "918874206748";
export const EMAIL = "biotb.instantreply@gmail.com";

// Keyword-rich introduction
export const HERO_TITLE = "Best Naturopathy in Lucknow, Natural Treatment Doctor Clinic for Holistic Healing";
export const HERO_SUBTITLE = "Consult Naturopath in Lucknow to restore your health through the power of Nature. A naturopathy based drugless, holistic healing center in Lucknow for natural treatment without side effects by naturopathic doctor.";

export const PRINCIPLES: PrincipleItem[] = [
  {
    title: "Holistic View Point",
    content: "Unlike other systems, Naturopathy is based on a holistic viewpoint. We treat the body, mind, and spirit as one entity."
  },
  {
    title: "Unity of Disease & Cure",
    content: "All diseases, their causes, and treatments are one: the accumulation of morbid matter in the body and their elimination."
  },
  {
    title: "Bacteria are Secondary",
    content: "The primary cause of disease is not bacteria or virus. They only survive when morbid matter accumulates. They are secondary causes."
  },
  {
    title: "Acute Diseases are Friends",
    content: "Acute diseases are the body's self-healing effort. They are our friends, not enemies. Suppressing them leads to chronic disease."
  },
  {
    title: "Drugless Healing",
    content: "In Naturopathy, there is no place for medicines or concoctions. The body is a composition of 'Pancha Maha Bhuthas' and they alone restore health."
  },
  {
    title: "Nature is the Healer",
    content: "Nature is the greatest healer. The body has an innate capacity to prevent disease and regain health if it becomes unhealthy."
  }
];

// --- CONTENT ECOSYSTEM FOR SEO ---

export const TREATMENTS: ServiceItem[] = [
  {
    id: 'mud-therapy',
    title: 'Mud Therapy',
    shortDescription: 'Cooling and soothing mud packs to eliminate toxins, improve circulation, and treat skin conditions.',
    fullDescription: [
      "Mud therapy is a distinct and ancient branch of Naturopathy. Mud corresponds to the Earth element (Prithvi Mahabhuta), which has an immense impact on the human body in health and sickness.",
      "The mud used in our clinic in Lucknow is taken from 3-4 feet depth from the surface of the ground. It is free from contamination, stone pieces, and chemical manures. It is dried, powdered, and sieved before use to ensure maximum therapeutic potency."
    ],
    benefits: [
      "Relaxes muscles and improves blood circulation.",
      "Absorbs excessive heat from the body (great for fever and inflammation).",
      "Draws out toxins from deep tissues.",
      "Excellent for skin diseases like Psoriasis, Eczema, and Acne.",
      "Relieves constipation when applied as a pack on the abdomen."
    ],
    procedure: [
      "Mud packs are prepared by mixing the clay with cold water.",
      "The pack is applied to the affected area (abdomen, eyes, or forehead) for 20-30 minutes.",
      "For full body mud bath, the patient is covered in mud and sits in sunlight.",
      "After drying, the mud is washed off with a cold shower."
    ],
    iconName: 'Leaf'
  },
  {
    id: 'hydrotherapy',
    title: 'Hydrotherapy',
    shortDescription: 'Therapeutic use of water including Hip Bath, Spinal Bath, Steam Bath, and Jacuzzi to revitalize the system.',
    fullDescription: [
      "Hydrotherapy is the treatment of disease by the use of water. Water has great healing properties and exhibits different physiological effects at different temperatures.",
      "At our Lucknow center, we use various forms of hydrotherapy to manipulate blood circulation. Cold water contracts blood vessels, while hot water dilates them. Alternating treatments acts as a pump to flush toxins."
    ],
    benefits: [
      "Improves digestion and cures constipation (Hip Bath).",
      "Relieves chronic back pain and sciatica (Spinal Bath).",
      "Detoxifies the skin through sweating (Steam Bath).",
      "Boosts immunity and blood circulation.",
      "Relieves stress and insomnia."
    ],
    iconName: 'Droplets'
  },
  {
    id: 'massage-therapy',
    title: 'Therapeutic Massage',
    shortDescription: 'Ayurvedic and Naturopathic massages to relax muscles, improve lymphatic drainage, and reduce stress.',
    fullDescription: [
      "Massage is a systematic manipulation of the body's soft tissues. In Naturopathy, massage is not just for relaxation but is a passive exercise that helps the body eliminate waste products.",
      "We use specific herbal oils suited to your body type (Vata, Pitta, Kapha). The strokes are designed to improve lymphatic drainage, ensuring toxins are moved towards excretory organs."
    ],
    benefits: [
      "Tones up the nervous system.",
      "Eliminates poisons and toxins from the body.",
      "Improves respiration and circulation.",
      "Reduces swelling and pain in arthritic joints.",
      "Promotes deep sleep and mental relaxation."
    ],
    iconName: 'HeartPulse'
  },
  {
    id: 'detox',
    title: 'Detoxification',
    shortDescription: 'Deep cleansing via Colon Hydrotherapy, Enema, and Sankh Prakshalan to remove morbid matter.',
    fullDescription: [
      "Detoxification is the cornerstone of Naturopathy. We believe disease is just the accumulation of waste. Our detox programs are designed to cleanse the colon, liver, and kidneys.",
      "Treatments like Enema and Shankh Prakshalana (Master Cleanse) completely flush the digestive tract, resetting your metabolism and digestion."
    ],
    benefits: [
      "Complete removal of impacted fecal matter.",
      "Instant relief from gas, acidity, and bloating.",
      "Improves nutrient absorption.",
      "Promotes weight loss.",
      "Clears skin and brightens complexion."
    ],
    iconName: 'Activity'
  },
  {
    id: 'yoga-therapy',
    title: 'Yoga & Meditation',
    shortDescription: 'Customized Asanas and Pranayama to align the mind and body for total holistic wellness.',
    fullDescription: [
      "Yoga is not just exercise; it is a science of living. Our medical yoga sessions are tailored to specific diseases. For example, we teach 'Mandukasana' for diabetes and 'Bhujangasana' for back pain.",
      "Pranayama (Breath Control) is used to balance the vital life force (Prana), which directly effects the nervous system and mental state."
    ],
    benefits: [
      "Increases flexibility and muscle strength.",
      "Balances hormones (Thyroid, Insulin).",
      "Reduces stress and anxiety.",
      "Lowers blood pressure.",
      "Improves lung capacity."
    ],
    iconName: 'Sun'
  },
  {
    id: 'shirodhara',
    title: 'Shirodhara',
    shortDescription: 'A classic Ayurvedic therapy that pours warm oil over the forehead to treat insomnia and anxiety.',
    fullDescription: [
      "Shirodhara comes from the Sanskrit words 'Shiro' (head) and 'Dhara' (flow). It involves gently pouring liquids (usually herbal oil) over the forehead.",
      "This treatment creates a profound state of relaxation. It works on the 'Ajna Chakra' (Third Eye), calming the hypothalamus and regulating the pituitary gland."
    ],
    benefits: [
      "Ultimate cure for Insomnia and sleep disorders.",
      "Reduces anxiety, stress, and depression.",
      "Improves concentration and memory.",
      "Treats hair loss and premature greying.",
      "Relieves migraines and tension headaches."
    ],
    iconName: 'Brain'
  },
  {
    id: 'acupressure',
    title: 'Acupressure',
    shortDescription: 'Stimulating specific energy points to relieve pain and balance the body’s energy flow.',
    fullDescription: [
      "Acupressure is an ancient healing art using the fingers to gradually press key healing points, which stimulate the body's natural self-curative abilities.",
      "It is based on the concept of Life Energy (Chi) which flows through 'meridians' in the body. Blockage in this flow causes pain and disease."
    ],
    benefits: [
      "Instant pain relief (Back, Knee, Neck).",
      "Releases muscle tension.",
      "Promotes circulation of blood.",
      "Enhances spirituality and mental clarity.",
      "Effective for sinus and allergy problems."
    ],
    iconName: 'Flower'
  },
  {
    id: 'diet-therapy',
    title: 'Diet Therapy',
    shortDescription: 'Food is medicine. We design specific diet plans to help the body repair and maintain itself.',
    fullDescription: [
      "In Naturopathy, 'Food is Medicine'. We advocate that your kitchen is your pharmacy. An alkaline diet is essential for health.",
      "We design Elimination Diets, Soothing Diets, and Constructive Diets depending on the stage of your disease. We emphasize raw juices, sprouts, and seasonal fruits."
    ],
    benefits: [
      "Restores the body's pH balance (Acid-Alkaline balance).",
      "Provides live enzymes for digestion.",
      "Reduces inflammation naturally.",
      "Sustainable weight loss.",
      "Reverses lifestyle diseases like Diabetes type 2."
    ],
    iconName: 'Wind'
  }
];

export const CONDITIONS: ConditionItem[] = [
  {
    id: 'diabetes',
    title: 'Diabetes Management',
    shortDescription: 'Control blood sugar naturally without heavy medication through diet and yoga.',
    symptoms: ['Excessive thirst & hunger', 'Frequent urination', 'Fatigue', 'Blurred vision', 'Slow healing wounds'],
    causes: ['Sedentary lifestyle', 'Stress', 'Obesity', 'Poor diet (high refined sugar)', 'Genetic factors'],
    naturopathicTreatment: [
      "Mud packs on abdomen to improve pancreatic function.",
      "Bitter Gourd (Karela) and Jamun juice therapy.",
      "Mandukasana and Kapalbhati Pranayama.",
      "Hip bath to improve circulation to abdominal organs.",
      "Strict low-glycemic, alkaline diet plan."
    ],
    relatedTreatments: ['mud-therapy', 'yoga-therapy', 'diet-therapy']
  },
  {
    id: 'hypertension',
    title: 'Hypertension (High BP)',
    shortDescription: 'Reduce blood pressure naturally using stress-relief therapies and cardiac-friendly diet.',
    symptoms: ['Headaches', 'Shortness of breath', 'Nosebleeds', 'Chest pain', 'Dizziness'],
    causes: ['High sodium intake', 'Stress & Anxiety', 'Lack of physical activity', 'Smoking/Alcohol', 'Obesity'],
    naturopathicTreatment: [
      "Shirodhara to calm the nervous system.",
      "Spinal bath to relax the sympathetic nervous system.",
      "Diet rich in potassium (Banana, Coconut water).",
      "Meditation and Yoga Nidra.",
      "Massage therapy to improve peripheral circulation."
    ],
    relatedTreatments: ['shirodhara', 'hydrotherapy', 'massage-therapy']
  },
  {
    id: 'digestive-disorders',
    title: 'Digestive Disorders',
    shortDescription: 'Cure IBS, Constipation, Gas, and Acidity by resetting your gut health.',
    symptoms: ['Bloating', 'Chronic Constipation', 'Acid Reflux', 'Abdominal Pain', 'Irregular bowel movements'],
    causes: ['Low fiber diet', 'Dehydration', 'Antibiotic overuse', 'Stress', 'Eating processed foods'],
    naturopathicTreatment: [
      "Enema for immediate colon cleansing.",
      "Mud pack on abdomen to absorb heat.",
      "Hip bath to tone digestive organs.",
      "Fasting therapy (Lemon water/Fruit juice) to rest the gut.",
      "Probiotic-rich natural diet."
    ],
    relatedTreatments: ['detox', 'mud-therapy', 'hydrotherapy']
  },
  {
    id: 'arthritis',
    title: 'Arthritis & Joint Pain',
    shortDescription: 'Reduce inflammation and improve mobility with heat therapy and anti-inflammatory diet.',
    symptoms: ['Joint pain', 'Stiffness', 'Swelling', 'Redness', 'Decreased range of motion'],
    causes: ['Accumulation of uric acid', 'Autoimmune response', 'Wear and tear', 'Obesity', 'Previous injuries'],
    naturopathicTreatment: [
      "Steam bath to eliminate toxins through sweat.",
      "Potli Massage with herbal pouches.",
      "Anti-inflammatory diet (avoiding sour/fermented foods).",
      "Sun bath (Vitamin D absorption).",
      "Magnetic therapy and Acupressure."
    ],
    relatedTreatments: ['massage-therapy', 'hydrotherapy', 'acupressure']
  },
  {
    id: 'obesity',
    title: 'Obesity & Weight Loss',
    shortDescription: 'Sustainable weight loss programs that boost metabolism and detoxify the body.',
    symptoms: ['Excess body fat', 'Breathlessness', 'Fatigue', 'Joint pain', 'Snoring'],
    causes: ['Overeating', 'Hormonal imbalance (Thyroid/PCOS)', 'Slow metabolism', 'Lack of sleep', 'Sedentary life'],
    naturopathicTreatment: [
      "Udvartana (Dry Powder Massage) to break cellulite.",
      "Steam bath and Sauna to burn calories.",
      "Juice fasting and raw diet.",
      "Power Yoga and Surya Namaskar.",
      "Enema to remove old waste contributing to weight."
    ],
    relatedTreatments: ['detox', 'yoga-therapy', 'diet-therapy']
  }
];

export const DOCTOR: DoctorProfile = {
  name: "Dr. Ravi Gupta",
  title: "Senior Naturopath & Yoga Consultant",
  qualifications: ["B.N.Y.S (Bachelor of Naturopathy & Yogic Sciences)", "Diploma in Acupressure", "Certified Nutritionist"],
  specializations: ["Chronic Pain Management", "Diabetes Reversal", "Detoxification Specialist"],
  experience: "15+ Years",
  bio: [
    "Dr. Ravi Gupta is a renowned Naturopath in Lucknow dedicated to the cause of natural living. With over 15 years of clinical experience, he has successfully treated over 5000+ patients with chronic ailments.",
    "He believes that 'The body heals itself' and focuses on educating patients about their lifestyle. His approach combines modern diagnostic methods with ancient wisdom of Nature Cure."
  ],
  image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop"
};

export const PACKAGES: PackageItem[] = [
  {
    id: 'detox-7',
    title: '7 Days Detox Program',
    price: '₹5,500',
    duration: '7 Days',
    recommendedFor: "General wellbeing, Skin glow, Mild constipation",
    features: [
      "Consultation with Doctor",
      "Daily Mud Pack & Enema",
      "3 Steam Baths",
      "3 Full Body Massages",
      "Diet Chart"
    ]
  },
  {
    id: 'pain-15',
    title: 'Chronic Pain Relief',
    price: '₹12,000',
    duration: '15 Days',
    recommendedFor: "Arthritis, Back Pain, Sciatica, Spondylitis",
    features: [
      "Daily Potli/Herbal Massage",
      "Local Steam & Spinal Bath",
      "Acupressure Sessions",
      "Physiotherapy Exercises",
      "Anti-inflammatory Diet"
    ]
  },
  {
    id: 'weight-21',
    title: '21 Days Weight Loss',
    price: '₹18,000',
    duration: '21 Days',
    recommendedFor: "Obesity, PCOD, Thyroid, High Cholesterol",
    features: [
      "Udvartana (Powder Massage)",
      "Daily Yoga & Power Yoga",
      "Fasting Therapy (Juice/Fruit)",
      "Colon Hydrotherapy",
      "Sauna Bath"
    ]
  }
];

// Q&A Section specifically for "People Also Ask" SEO ranking
export const FAQS: FAQItem[] = [
  {
    question: "What is Naturopathy and how does it help in Lucknow?",
    answer: "Naturopathy is a drugless system of healing that uses natural elements like water, mud, and diet to cure diseases. Our clinic in Lucknow focuses on removing the root cause—morbid matter—rather than just suppressing symptoms."
  },
  {
    question: "Which diseases can be cured by Naturopathy?",
    answer: "Naturopathy is highly effective for chronic conditions such as digestive disorders, arthritis, asthma, diabetes, hypertension, skin diseases, and obesity. It reverses disease conditions by boosting the body's self-healing capacity."
  },
  {
    question: "Is Naturopathy safe compared to modern medicine?",
    answer: "Yes, Naturopathy is completely harmless. Treatment plans rely on diet, exercise, and natural elements, ensuring there are no harmful side effects or negative symptom suppression."
  },
  {
    question: "Where is the best Naturopathy centre in Lucknow located?",
    answer: "We are located in Gomti Nagar, accessible from Aliganj, Hazratganj, and Indira Nagar. We provide the most comprehensive holistic treatment facilities in the city."
  }
];

export const SEO_AREAS = [
  "Gomti Nagar", "Aliganj", "Hazratganj", "Indira Nagar", "Mahanagar", 
  "Jankipuram", "Lucknow Cantonment", "Aminabad", "Ashiyana", "Vikas Nagar",
  "Chowk", "Rajajipuram", "Charbagh", "Telibagh"
];