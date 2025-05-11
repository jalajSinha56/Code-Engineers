import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


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
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Mayank Varshney',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '10 Years',
        about: 'Dr. Mayank Varshney is conveniently located in Ghaziabad City, Ghaziabad, near Near Haldiram, making it easily accessible by public transportation for patients. For all type of diseases consult. General physician. Online consultation by appointment only . Clinic visit as per appointment only.',
        fees: 50,
        address: {
            line1: 'Residential clinic, Supertech Livingston,',
            line2: 'Crossings Republik, Ghaziabad, Uttar Pradesh 201016'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Anita Singla',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '21 Years',
        about: 'A medical practitioner and expert involved with patient care; worked closely with other doctors to provide comprehensive evaluation and treatment services for patients; Aims at promoting optimal wellness for women shares a sense of duty and enthusiasm towards a goal to keep a professional atmosphere.',
        fees: 60,
        address: {
            line1: 'Plot Number NH-1, Sector 6, Vikas Marg, Landmark: K.R. Mangalam',
            line2: 'World School | Best CBSE School in Vaishali, Ghaziabad'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Raman Kumar',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '12 Years',
        about: 'Medical Clinic, Consultant Physician, Diabetes Care, Thyroid Care, Hypertension, Asthma and Allergies, Epilepsy, Migraine, Joint Pain, Fever and infections - Dengue, Typhoid, Urine Infection, COVID, Viral, Care for the Whole Family, Children, Adults, Elderly Care, Preventive Health Check, vaccinations, Medical Fitness for Job, School & Travel Preventive Packages, Nursing services at Home, International Travel, Home Care, Dietitian.',
        fees: 50,
        address: {
            line1: 'Shop no 31, Ground floor, New Tech, LaGarcia,',
            line2: 'Crossings Republik, Ghaziabad, Uttar Pradesh 201016'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Ranjana Becon',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '28 Years',
        about: 'Dr. Ranjana Becon is a reputed gynecologist in Ghaziabad. She has vast experience and is highly qualified. Dr. Ranjana is currently associated with Manipal Hospital Ghaziabad as a consultant with the Department of Obstetrics & Gynecology. She is soft-spoken, sincere, professional and compassionate. Her areas of expertise include fertility and high-risk pregnancy.',
        fees: 60,
        address: {
            line1: 'NH 24, Hapur Road, Landmark: Near',
            line2: 'Landcraft Golflinks, Ghaziabad'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Gunjan Jha',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '10 Years',
        about: 'Dr Gunjan Jha completed MBBS in 2013 from Ranchi University. She did her DNB Family Medicine from Fortis Hospital Noida. She worked for 4 years at Fortis Hospital. Currently she is working as a Family Physician as Consultant Physician at Atlanta hospital Ghaziabad and Pursuit of Health Clinic, Indirapuram. Her expertise is in treating infectious disease; stomach , lung diseases; chronic diseases such as hypertension, diabetes, migraine, joint pain and others.',
        fees: 50,
        address: {
            line1: 'Plot Number 155, Vijay Laxmi Marg,',
            line2: 'Niti Khand 1, Landmark: Near Mangal Chowk, Ghaziabad'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Shubhra Jaiswal',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '21 Years',
        about: 'Dr. Shubhra Jaiswal is a Gynecologist in Vaishali, Ghaziabad and has an experience of 21 years in this field. Dr. Shubhra Jaiswal practices at AVee Hospital in Vaishali, Ghaziabad. She completed MBBS from University Of Allahabad in 2004 and DGO from Chhatrapati Shahu Ji Maharaj Medical University in 2014.',
        fees: 60,
        address: {
            line1: 'Plot Number NH-1, Sector 6, Vikas Marg,',
            line2: 'Landmark: K.R. Mangalam World School '
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]