export interface Review {
  author: string;
  rating: number;
  date: string;
  text: string;
  treatment?: string;
  location?: string;
}

export const REVIEWS: Review[] = [
  {
    author: "Amit Srivastava",
    rating: 5,
    date: "2023-10-12",
    text: "I was suffering from chronic back pain for 3 years. Doctors suggested surgery, but I wanted to try something natural. Dr. Ravi Gupta's treatment in Gomti Nagar changed my life. The potli massage and spinal bath therapy worked wonders. Highly recommend!",
    treatment: "Chronic Back Pain",
    location: "Gomti Nagar"
  },
  {
    author: "Priya Sharma",
    rating: 5,
    date: "2023-11-05",
    text: "Best Naturopathy centre in Lucknow! I joined for weight loss and lost 8kg in 2 months with just diet and yoga. No medicines, no side effects. The detox diet plan is very effective.",
    treatment: "Weight Loss",
    location: "Indira Nagar"
  },
  {
    author: "Rajesh Verma",
    rating: 5,
    date: "2023-09-20",
    text: "My diabetes levels were uncontrollable (HbA1c was 9.2). After 3 months of treatment here, it's down to 6.5 without heavy medication. The mud therapy and karela juice diet really works. Dr. Ravi is very knowledgeable.",
    treatment: "Diabetes Management",
    location: "Aliganj"
  },
  {
    author: "Suman Gupta",
    rating: 4,
    date: "2023-12-01",
    text: "Very peaceful environment. I went for stress and anxiety issues. Shirodhara treatment is magical. Felt so relaxed after the first session itself. Staff is very cooperative.",
    treatment: "Stress & Anxiety",
    location: "Hazratganj"
  },
  {
    author: "Vikram Singh",
    rating: 5,
    date: "2024-01-15",
    text: "I had severe acidity and gas issues. The enema and hip bath treatment cleared my stomach completely. It's a true natural treatment hospital. The pricing is also very reasonable compared to other clinics.",
    treatment: "Digestive Disorders",
    location: "Jankipuram"
  },
  {
    author: "Meera Patel",
    rating: 5,
    date: "2023-08-10",
    text: "Excellent experience. I took the 7-day detox package. My skin is glowing and I feel so energetic. The mud bath was a unique experience. Definitely the best holistic healing center in the city.",
    treatment: "Detox Program",
    location: "Mahanagar"
  },
  {
    author: "Rahul Dixit",
    rating: 5,
    date: "2023-11-22",
    text: "Dr. Ravi Gupta gives a lot of time to understand the patient's history. He explained why I had migraines and treated the root cause with diet and acupressure. No painkillers needed anymore!",
    treatment: "Migraine",
    location: "Ashiyana"
  },
  {
    author: "Anjali Mishra",
    rating: 4,
    date: "2023-10-30",
    text: "Great facility for yoga and meditation. The instructors are well trained. I go for daily yoga classes for my PCOD and have seen great improvement in my cycles.",
    treatment: "PCOD & Yoga",
    location: "Vikas Nagar"
  },
  {
    author: "Suresh Yadav",
    rating: 5,
    date: "2024-02-05",
    text: "Suffering from arthritis knee pain? Go here. The steam bath and oil massage gave me relief in just 10 days. I can walk without pain now. Thank you team Lucknow Naturopathy.",
    treatment: "Arthritis",
    location: "Charbagh"
  },
  {
    author: "Kavita Rastogi",
    rating: 5,
    date: "2023-07-18",
    text: "I was skeptical about naturopathy first, but the results speak for themselves. My high BP is normal now without pills. The diet charts are easy to follow even for a working professional.",
    treatment: "Hypertension",
    location: "Gomti Nagar"
  },
  {
    author: "Mohd. Irfan",
    rating: 5,
    date: "2023-12-12",
    text: "Friendly staff and hygienic center. Best place for hydrotherapy in Lucknow. The spinal spray is very refreshing.",
    treatment: "Hydrotherapy",
    location: "Aminabad"
  },
  {
    author: "Deepa Sethi",
    rating: 5,
    date: "2023-09-05",
    text: "Post-pregnancy weight loss was a struggle for me. The Udvartana massage and diet helped me lose the belly fat naturally. Feeling confident again.",
    treatment: "Post-Natal Care",
    location: "Alambagh"
  },
  {
    author: "Dr. A.K. Asthana",
    rating: 5,
    date: "2023-11-15",
    text: "Being a doctor myself, I appreciate their scientific approach to natural healing. No quackery, just pure science of body and nature. Dr. Ravi is a gem.",
    treatment: "Wellness",
    location: "Civil Lines"
  },
  {
    author: "Renu Chaudhary",
    rating: 4,
    date: "2023-08-28",
    text: "Good treatment for cervical spondylitis. Acupressure points really work for pain relief. The center is clean and well maintained.",
    treatment: "Cervical Spondylitis",
    location: "Rajajipuram"
  },
  {
    author: "Aditya Kumar",
    rating: 5,
    date: "2024-01-20",
    text: "If you want to quit smoking or alcohol, their de-addiction and detox program is helpful. It cleanses the system effectively.",
    treatment: "De-addiction",
    location: "Telibagh"
  },
  {
    author: "Shweta Tiwari",
    rating: 5,
    date: "2023-10-05",
    text: "My son had chronic constipation. Child specialists gave laxatives but it came back. Naturopathy diet cured it permanently. Best decision.",
    treatment: "Pediatric Care",
    location: "Indira Nagar"
  },
  {
    author: "Gaurav Malhotra",
    rating: 5,
    date: "2023-12-25",
    text: "The full body mud bath is an experience everyone should try! It feels so cooling and relaxing. Total detox for the body.",
    treatment: "Mud Therapy",
    location: "Gomti Nagar"
  },
  {
    author: "Nidhi Saxena",
    rating: 5,
    date: "2023-09-18",
    text: "Affordable and effective. I compared prices with other naturopathy centers in Lucknow, and this one offers the best value. Plus the doctor is very senior.",
    treatment: "General Consultation",
    location: "Faizabad Road"
  },
  {
    author: "Pankaj Dubey",
    rating: 4,
    date: "2023-11-08",
    text: "Parking space is good, clinic is on the main road. Treatment for sciatica was effective. Pain reduced by 80% in 2 weeks.",
    treatment: "Sciatica",
    location: "Mahanagar"
  },
  {
    author: "Sarah Khan",
    rating: 5,
    date: "2024-01-10",
    text: "I love their organic juice counter! The green detox juice is tasty and healthy. I visit weekly just for a health reboot.",
    treatment: "Diet Therapy",
    location: "Hazratganj"
  },
  {
    author: "Vinay Tandon",
    rating: 5,
    date: "2023-08-01",
    text: "Complete holistic healing. They treat the mind and body together. Yoga nidra sessions are very powerful.",
    treatment: "Mental Wellness",
    location: "Chowk"
  },
  {
    author: "Ritu Kapoor",
    rating: 5,
    date: "2023-12-20",
    text: "The best thing is they don't force you to buy expensive products. Everything is based on home remedies and natural treatments available at the clinic.",
    treatment: "General Wellness",
    location: "Gomti Nagar"
  }
];
