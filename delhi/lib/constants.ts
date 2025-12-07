import { ServiceItem, PrincipleItem, FAQItem, ConditionItem, PackageItem, DoctorProfile } from './types';

export const APP_NAME = "Delhi Naturopath";
export const ADDRESS = "456 Health Avenue, Saket, New Delhi, Delhi 110017";
export const PHONE = "+91 98765 43210";
export const WHATSAPP = "919876543210";
export const EMAIL = "contact@delhinaturopath.in";

// Keyword-rich introduction
export const HERO_TITLE = "Premier Naturopathy Clinic in Delhi for Natural Healing";
export const HERO_SUBTITLE = "Consult a leading Naturopath in Delhi to rejuvenate your health with Nature's touch. A state-of-the-art, drug-free, holistic healing clinic in Delhi for side-effect-free natural treatments.";

export const PRINCIPLES: PrincipleItem[] = [
  {
    title: "Holistic Approach",
    content: "We view health through a holistic lens, treating the interconnectedness of the body, mind, and spirit as a single, unified system."
  },
  {
    title: "Root Cause Resolution",
    content: "Our philosophy is that all diseases stem from a common cause—the accumulation of toxins. Our treatments focus on eliminating this root cause."
  },
  {
    title: "The Role of Microbes",
    content: "We believe that bacteria and viruses are not the primary cause of illness, but rather secondary factors that thrive in a toxic environment."
  },
  {
    title: "Acute Illnesses as Healing",
    content: "Acute diseases are the body's natural attempt to heal itself. We see them as allies in the healing process, not adversaries to be suppressed."
  },
  {
    title: "Medicine-Free Healing",
    content: "In our practice, we avoid the use of conventional medicines, relying instead on the body's natural healing abilities, supported by the five elements of nature."
  },
  {
    title: "The Power of Nature",
    content: "We believe that nature is the ultimate healer. Our role is to facilitate the body's innate ability to prevent illness and restore health."
  }
];

// --- CONTENT ECOSYSTEM FOR SEO ---

export const TREATMENTS: ServiceItem[] = [
  {
    id: 'mud-therapy',
    title: 'Earth Healing (Mud Therapy)',
    shortDescription: 'Rejuvenating mud applications to detoxify, reduce inflammation, and enhance skin health.',
    fullDescription: [
      "Earth Healing, or Mud Therapy, is a time-honored naturopathic treatment that harnesses the therapeutic properties of the earth. The mud we use is sourced from pristine locations, ensuring it is rich in minerals and free from contaminants.",
      "Our clinic in Delhi prepares the mud by sun-drying, powdering, and sieving it to create a smooth, potent paste for application."
    ],
    benefits: [
      "Soothes the nervous system and relaxes muscles.",
      "Reduces inflammation and pain in joints and muscles.",
      "Improves skin complexion and treats skin conditions.",
      "Draws out toxins and impurities from the body.",
      "Aids in digestion and relieves constipation."
    ],
    procedure: [
      "The therapeutic mud is mixed with water to form a smooth paste.",
      "The paste is applied to specific areas of the body or as a full-body pack.",
      "The application is left on for 20-30 minutes, allowing the skin to absorb the minerals.",
      "The mud is then washed off with lukewarm water, leaving the skin refreshed and rejuvenated."
    ],
    iconName: 'Leaf'
  },
  {
    id: 'hydrotherapy',
    title: 'Aqua Therapy (Hydrotherapy)',
    shortDescription: 'The therapeutic application of water in its various forms to stimulate circulation and promote healing.',
    fullDescription: [
      "Aqua Therapy, or Hydrotherapy, is a cornerstone of naturopathic medicine. It utilizes the healing properties of water at different temperatures to treat a wide range of health conditions.",
      "Our Delhi center offers a variety of hydrotherapy treatments, including spinal baths, hip baths, and steam therapy, to enhance blood circulation and detoxification."
    ],
    benefits: [
      "Improves blood circulation and lymphatic drainage.",
      "Reduces muscle soreness and joint pain.",
      "Promotes detoxification through sweating.",
      "Boosts the immune system.",
      "Reduces stress and promotes relaxation."
    ],
    iconName: 'Droplets'
  },
  {
    id: 'massage-therapy',
    title: 'Holistic Massage',
    shortDescription: 'Therapeutic massages designed to release tension, improve circulation, and support the body’s natural healing processes.',
    fullDescription: [
      "Our holistic massages are more than just a relaxation technique; they are a form of passive exercise that helps the body to eliminate toxins and restore balance.",
      "We use a blend of herbal oils tailored to your individual needs, with massage strokes designed to stimulate lymphatic flow and promote overall well-being."
    ],
    benefits: [
      "Reduces stress and anxiety.",
      "Improves circulation and lowers blood pressure.",
      "Relieves muscle tension and stiffness.",
      "Enhances the health and nourishment of the skin.",
      "Promotes deeper, more restful sleep."
    ],
    iconName: 'HeartPulse'
  },
  {
    id: 'detox',
    title: 'Natural Detoxification',
    shortDescription: 'A comprehensive approach to cleansing the body of accumulated toxins and restoring vitality.',
    fullDescription: [
      "Natural Detoxification is a fundamental aspect of naturopathy. We offer a range of therapies, including fasting, enemas, and specialized diets, to help the body eliminate waste and rejuvenate itself.",
      "Our detoxification programs are designed to cleanse the digestive tract, liver, and kidneys, leading to improved energy and overall health."
    ],
    benefits: [
      "Removes accumulated toxins from the body.",
      "Improves digestion and nutrient absorption.",
      "Boosts energy levels and mental clarity.",
      "Supports weight loss and a healthy metabolism.",
      "Enhances the appearance of skin and hair."
    ],
    iconName: 'Activity'
  },
  {
    id: 'yoga-therapy',
    title: 'Therapeutic Yoga',
    shortDescription: 'A personalized approach to yoga that addresses specific health concerns and promotes holistic well-being.',
    fullDescription: [
      "Therapeutic Yoga is a specialized form of yoga that is tailored to individual health needs. We design our yoga sessions to address specific conditions, such as back pain, diabetes, and anxiety.",
      "Our experienced yoga therapists guide you through a series of asanas, pranayama, and meditation techniques to restore balance and harmony to the body and mind."
    ],
    benefits: [
      "Improves flexibility, strength, and balance.",
      "Reduces stress and promotes mental calmness.",
      "Helps to manage chronic health conditions.",
      "Improves respiratory and cardiovascular function.",
      "Enhances overall quality of life."
    ],
    iconName: 'Sun'
  },
  {
    id: 'shirodhara',
    title: 'Mind Calming Therapy (Shirodhara)',
    shortDescription: 'A deeply relaxing Ayurvedic treatment that involves a continuous flow of warm oil over the forehead.',
    fullDescription: [
      "Shirodhara is a profound Ayurvedic therapy that works to calm the nervous system and induce a state of deep relaxation. It involves the gentle pouring of warm, herbal oil over the third eye, or 'ajna chakra.'",
      "This treatment is highly effective for reducing stress, anxiety, and insomnia, and for promoting mental clarity and emotional balance."
    ],
    benefits: [
      "Reduces stress, anxiety, and depression.",
      "Improves sleep quality and treats insomnia.",
      "Enhances concentration, memory, and mental clarity.",
      "Relieves headaches and migraines.",
      "Promotes a sense of peace and well-being."
    ],
    iconName: 'Brain'
  },
  {
    id: 'acupressure',
    title: 'Energy Point Stimulation (Acupressure)',
    shortDescription: 'An ancient healing art that uses gentle pressure on specific points of the body to relieve pain and restore energy flow.',
    fullDescription: [
      "Acupressure is based on the principles of traditional Chinese medicine, which holds that energy, or 'qi,' flows through the body along pathways called meridians. By applying pressure to specific points along these meridians, we can release blockages and restore the free flow of energy.",
      "This therapy is effective for a wide range of conditions, including pain, stress, and digestive issues."
    ],
    benefits: [
      "Relieves pain and muscle tension.",
      "Reduces stress and promotes relaxation.",
      "Improves circulation.",
      "Boosts the immune system.",
      "Enhances overall well-being."
    ],
    iconName: 'Flower'
  },
  {
    id: 'diet-therapy',
    title: 'Nutritional Therapy',
    shortDescription: 'A personalized approach to nutrition that uses food as medicine to support the body’s healing processes.',
    fullDescription: [
      "Nutritional Therapy is a cornerstone of naturopathic medicine. We believe that 'you are what you eat,' and we design our diet plans to provide the body with the nutrients it needs to heal and thrive.",
      "We emphasize a diet rich in fresh, whole foods, including fruits, vegetables, and whole grains, and we provide guidance on how to use food to address specific health concerns."
    ],
    benefits: [
      "Supports the body's natural healing processes.",
      "Boosts energy levels and vitality.",
      "Helps to manage weight and chronic health conditions.",
      "Improves digestion and nutrient absorption.",
      "Enhances overall health and well-being."
    ],
    iconName: 'Wind'
  }
];

export const CONDITIONS: ConditionItem[] = [
  {
    id: 'diabetes',
    title: 'Holistic Diabetes Care',
    shortDescription: 'A natural approach to managing blood sugar levels through diet, yoga, and lifestyle modifications.',
    symptoms: ['Frequent thirst', 'Increased urination', 'Unexplained weight loss', 'Fatigue', 'Blurred vision'],
    causes: ['Unhealthy diet', 'Lack of physical activity', 'Obesity', 'Stress', 'Genetics'],
    naturopathicTreatment: [
      "Personalized diet plans with low-glycemic foods.",
      "Therapeutic yoga and pranayama to improve insulin sensitivity.",
      "Herbal remedies to support pancreatic function.",
      "Hydrotherapy to improve circulation.",
      "Stress management techniques."
    ],
    relatedTreatments: ['diet-therapy', 'yoga-therapy', 'hydrotherapy']
  },
  {
    id: 'hypertension',
    title: 'Natural Blood Pressure Management',
    shortDescription: 'A holistic approach to lowering blood pressure through diet, stress reduction, and natural therapies.',
    symptoms: ['Headaches', 'Dizziness', 'Shortness of breath', 'Nosebleeds', 'Chest pain'],
    causes: ['High-sodium diet', 'Stress', 'Sedentary lifestyle', 'Obesity', 'Smoking'],
    naturopathicTreatment: [
      "A diet rich in fruits, vegetables, and whole grains.",
      "Stress-reducing therapies like shirodhara and meditation.",
      "Regular physical activity.",
      "Herbal remedies to support cardiovascular health.",
      "Massage therapy to improve circulation."
    ],
    relatedTreatments: ['diet-therapy', 'shirodhara', 'massage-therapy']
  },
  {
    id: 'digestive-disorders',
    title: 'Gut Health Restoration',
    shortDescription: 'A natural approach to healing digestive issues like IBS, acidity, and constipation.',
    symptoms: ['Bloating', 'Gas', 'Acid reflux', 'Constipation', 'Diarrhea'],
    causes: ['Poor diet', 'Stress', 'Food intolerances', 'Lack of exercise', 'Dehydration'],
    naturopathicTreatment: [
      "A personalized diet plan to identify and eliminate trigger foods.",
      "Herbal remedies to soothe the digestive tract.",
      "Yoga and meditation to reduce stress.",
      "Hydrotherapy to improve digestion.",
      "Detoxification therapies to cleanse the digestive system."
    ],
    relatedTreatments: ['diet-therapy', 'yoga-therapy', 'detox']
  },
  {
    id: 'arthritis',
    title: 'Natural Joint Pain Relief',
    shortDescription: 'A holistic approach to reducing joint pain and inflammation through diet, exercise, and natural therapies.',
    symptoms: ['Joint pain', 'Stiffness', 'Swelling', 'Reduced range of motion', 'Redness'],
    causes: ['Inflammation', 'Autoimmune disorders', 'Wear and tear', 'Obesity', 'Injuries'],
    naturopathicTreatment: [
      "An anti-inflammatory diet.",
      "Gentle yoga and stretching exercises.",
      "Herbal remedies to reduce inflammation and pain.",
      "Massage therapy to improve circulation and reduce stiffness.",
      "Hydrotherapy to soothe sore joints."
    ],
    relatedTreatments: ['diet-therapy', 'yoga-therapy', 'massage-therapy']
  },
  {
    id: 'obesity',
    title: 'Holistic Weight Management',
    shortDescription: 'A natural and sustainable approach to weight loss that addresses the root causes of weight gain.',
    symptoms: ['Excess body fat', 'Fatigue', 'Breathlessness', 'Joint pain', 'High blood pressure'],
    causes: ['Unhealthy diet', 'Lack of exercise', 'Hormonal imbalances', 'Stress', 'Poor sleep'],
    naturopathicTreatment: [
      "A personalized diet plan that promotes weight loss.",
      "Regular physical activity.",
      "Herbal remedies to support metabolism.",
      "Stress management techniques.",
      "Detoxification therapies to cleanse the body."
    ],
    relatedTreatments: ['diet-therapy', 'yoga-therapy', 'detox']
  }
];

export const DOCTOR: DoctorProfile = {
  name: "Dr. Ananya Sharma",
  title: "Lead Naturopath & Wellness Expert",
  qualifications: ["B.N.Y.S (Bachelor of Naturopathy & Yogic Sciences)", "M.Sc. in Yoga Therapy", "Certified in Nutritional Counseling"],
  specializations: ["Lifestyle Disorder Management", "Women's Health", "Mind-Body Medicine"],
  experience: "15+ Years",
  bio: [
    "Dr. Ananya Sharma is a highly respected Naturopath in Delhi, known for her compassionate and personalized approach to patient care. With over 15 years of experience, she has helped thousands of patients achieve optimal health and well-being.",
    "She is a firm believer in the power of nature to heal and is passionate about empowering her patients to take an active role in their own health journey. Her expertise lies in combining traditional naturopathic wisdom with modern scientific knowledge."
  ],
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop"
};

export const PACKAGES: PackageItem[] = [
  {
    id: 'detox-7',
    title: '7-Day Rejuvenation Program',
    price: '₹6,500',
    duration: '7 Days',
    recommendedFor: "Boosting energy, improving skin health, and kick-starting a healthier lifestyle.",
    features: [
      "Initial wellness consultation",
      "Daily detoxification therapies",
      "Personalized diet plan",
      "2 therapeutic yoga sessions",
      "1 holistic massage"
    ]
  },
  {
    id: 'pain-15',
    title: '15-Day Pain Management Program',
    price: '₹14,000',
    duration: '15 Days',
    recommendedFor: "Chronic pain, arthritis, back pain, and other musculoskeletal issues.",
    features: [
      "In-depth consultation with our doctor",
      "Daily pain relief therapies",
      "Anti-inflammatory diet plan",
      "5 therapeutic yoga sessions",
      "3 holistic massages"
    ]
  },
  {
    id: 'weight-21',
    title: '21-Day Weight Management Program',
    price: '₹20,000',
    duration: '21 Days',
    recommendedFor: "Sustainable weight loss, improving metabolism, and managing weight-related health issues.",
    features: [
      "Comprehensive wellness assessment",
      "Daily weight loss therapies",
      "Personalized diet and exercise plan",
      "7 therapeutic yoga sessions",
      "3 holistic massages"
    ]
  }
];

// Q&A Section specifically for "People Also Ask" SEO ranking
export const FAQS: FAQItem[] = [
  {
    question: "What is Naturopathy and how can it benefit me in Delhi?",
    answer: "Naturopathy is a holistic system of medicine that uses natural therapies to promote healing. In Delhi, our clinic offers a peaceful retreat from the hustle and bustle of city life, where you can rejuvenate your health and well-being."
  },
  {
    question: "What types of conditions can be treated with Naturopathy?",
    answer: "Naturopathy is effective for a wide range of chronic conditions, including digestive disorders, arthritis, diabetes, hypertension, and skin problems. It works by addressing the root cause of illness and supporting the body's natural healing abilities."
  },
  {
    question: "Is Naturopathy a safe alternative to conventional medicine?",
    answer: "Yes, Naturopathy is a safe and gentle approach to healing with no harmful side effects. Our therapies are all-natural and non-invasive, and we work in partnership with you to create a personalized treatment plan that is right for you."
  },
  {
    question: "Where is the best Naturopathy center in Delhi located?",
    answer: "Our clinic is conveniently located in Saket, with easy access from all parts of Delhi. We offer a serene and welcoming environment where you can relax, heal, and rejuvenate."
  }
];

export const SEO_AREAS = [
  "Saket", "Hauz Khas", "Greater Kailash", "Vasant Kunj", "Chanakyapuri",
  "Connaught Place", "Karol Bagh", "Dwarka", "Rohini", "Pitampura",
  "Noida", "Gurgaon", "Faridabad", "Ghaziabad"
];
