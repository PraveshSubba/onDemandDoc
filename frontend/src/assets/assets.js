import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.png";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Richard James",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Richard James is a compassionate general physician known for his thorough diagnostic approach and patient-first mindset. He believes in establishing long-term relationships with his patients and works closely with them to prevent illness and promote wellness. With a strong emphasis on lifestyle modification, early detection, and continuous care, Dr. James ensures every patient receives personalized treatment that addresses both immediate symptoms and underlying causes.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Emily Larson",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Emily Larson is a dedicated gynecologist with a strong passion for women’s health. She specializes in adolescent care, menstrual disorders, fertility issues, and prenatal to postnatal care. Dr. Larson is known for her empathetic nature and excellent communication skills, making her patients feel heard and respected. Her practice is built on trust and education, ensuring women are empowered to make informed decisions about their reproductive health.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Sarah Patel",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Sarah Patel is an energetic and detail-oriented dermatologist specializing in both medical and cosmetic dermatology. She offers treatment for a range of skin conditions such as acne, eczema, psoriasis, and pigmentation disorders. Dr. Patel combines clinical knowledge with the latest dermatological techniques to ensure that her patients not only feel healthier but also more confident in their appearance. Her patient-centric approach ensures comfort, safety, and clear communication throughout every step of treatment.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Christopher Lee",
    image: doc4,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Christopher Lee is a warm and approachable pediatrician who provides holistic care to infants, children, and adolescents. He believes that pediatric healthcare is as much about understanding the family environment as it is about diagnosing symptoms. His clinic is designed to be child-friendly, and his consultations are aimed at making both children and parents feel comfortable and informed. Dr. Lee is particularly passionate about childhood development, nutrition, immunizations, and preventive care.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Jennifer Garcia",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Jennifer Garcia is a highly skilled neurologist who treats a wide range of neurological disorders, including epilepsy, migraine, stroke, and Parkinson’s disease. With a compassionate approach and a sharp diagnostic mind, she offers individualized care plans that balance medical treatment with lifestyle advice and rehabilitation. Her patients appreciate her calm demeanor and her ability to explain complex neurological conditions in simple terms, making her a trusted guide throughout the treatment journey.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Andrew Williams",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Andrew Williams is an experienced neurologist who brings both clinical precision and patient empathy to his practice. He specializes in treating disorders of the brain, spinal cord, and peripheral nerves. Known for his systematic evaluation techniques, Dr. Williams works diligently to understand each patient's symptoms and to provide targeted, evidence-based treatment. He is also a strong advocate of patient education and believes that understanding a condition is the first step to recovery.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Christopher Davis",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Christopher Davis is a friendly and highly capable general physician with a focus on preventive care and long-term wellness. He manages a variety of acute and chronic conditions and believes in building strong doctor-patient relationships. His practice integrates traditional medicine with modern diagnostics and encourages patients to play an active role in their own health decisions. Dr. Davis is known for his timely interventions and holistic approach.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Timothy White",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Timothy White is a seasoned gynecologist committed to offering individualized care in reproductive and sexual health. He provides a wide range of services from contraception counseling to complex gynecological surgeries. His approach is rooted in respect, empathy, and the latest scientific advancements. Patients trust him for his discretion, calm demeanor, and willingness to listen without judgment.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Ava Mitchell",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Ava Mitchell is a skilled dermatologist who is passionate about helping patients maintain healthy, radiant skin. She addresses a range of skin issues including allergies, infections, acne, and pigmentation. In addition to medical dermatology, Dr. Mitchell also offers aesthetic treatments like chemical peels and non-invasive rejuvenation therapies. Her compassionate approach makes her popular among both teenagers and adults.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Jeffrey King",
    image: doc10,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Jeffrey King is a pediatrician who believes every child deserves nurturing and expert care. He provides attentive and empathetic treatment tailored to the developmental needs of each child. With a gentle approach and cheerful presence, Dr. King works closely with parents to monitor growth, administer vaccines, and manage common childhood illnesses. He strives to make each visit enjoyable and informative for children and their caregivers.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Zoe Kelly",
    image: doc11,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Zoe Kelly is a respected neurologist with a keen interest in neurodegenerative diseases and pain management. She believes in a patient-centric approach that integrates clinical care with emotional support. Her expertise spans from seizures and multiple sclerosis to more subtle conditions like nerve pain. Dr. Kelly works to create trust with each patient, taking time to thoroughly explain diagnoses and treatment options.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Patrick Harris",
    image: doc12,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Patrick Harris is a calm and composed neurologist with extensive experience in treating conditions affecting the central and peripheral nervous systems. His focus lies in combining clinical skills with advanced imaging and diagnostics. Dr. Harris ensures that patients and their families are actively involved in the treatment process and fully understand their options. His care philosophy revolves around clarity, patience, and compassion.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Chloe Evans",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Chloe Evans brings a well-rounded approach to primary care, addressing everything from common infections to chronic disease management. She places great emphasis on preventative strategies, mental well-being, and lifestyle choices. Known for her warm demeanor and clear communication, Dr. Evans is especially appreciated by families looking for a trusted long-term medical advisor.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Ryan Martinez",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Ryan Martinez provides expert gynecological services with a focus on preventive care and reproductive health. His patient care philosophy is rooted in dignity and respect. Dr. Martinez has a particular interest in managing PCOS, menstrual disorders, and preconception counseling. He works diligently to make patients feel comfortable and supported in every phase of life.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Amelia Hill",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Amelia Hill is an enthusiastic dermatologist who combines medical expertise with a love for aesthetics. She offers skin treatments that balance health and beauty, treating acne, rashes, scars, and aging skin. Her attention to detail and patient-focused care make her an ideal choice for individuals seeking both dermatological relief and cosmetic enhancement.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc16",
    name: "Dr. Daniel Foster",
    image: doc12,
    speciality: "Gastroenterologist",
    degree: "MBBS, MD (Gastroenterology)",
    experience: "5 Years",
    about:
      "Dr. Daniel Foster is a skilled gastroenterologist with a focus on digestive tract health, liver disorders, and endoscopic procedures. He is known for his methodical approach to diagnosis and his calm demeanor during complex treatments. Dr. Foster emphasizes patient education and early screening, especially for chronic gastrointestinal diseases like Crohn's, IBS, and ulcers.",
    fees: 65,
    address: {
      line1: "67th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc17",
    name: "Dr. Olivia Bennett",
    image: doc13,
    speciality: "Gastroenterologist",
    degree: "MBBS, DNB (Gastroenterology)",
    experience: "6 Years",
    about:
      "Dr. Olivia Bennett offers expert care in treating conditions such as acid reflux, fatty liver, pancreatitis, and colorectal disorders. Her gentle bedside manner and ability to explain conditions clearly help build strong doctor-patient trust. She believes in using a multidisciplinary approach to optimize patient outcomes, especially for lifestyle-related GI issues.",
    fees: 70,
    address: {
      line1: "68th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc18",
    name: "Dr. Nathaniel Brooks",
    image: doc15,
    speciality: "Gastroenterologist",
    degree: "MBBS, DM (Gastroenterology)",
    experience: "4 Years",
    about:
      "Dr. Nathaniel Brooks is a compassionate gastroenterologist known for his precision in diagnosing complex digestive issues. He is adept in performing endoscopic procedures and managing liver cirrhosis, GI bleeds, and functional bowel diseases. Dr. Brooks is committed to continuous learning and incorporates the latest research into his clinical practice.",
    fees: 60,
    address: {
      line1: "69th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
];
