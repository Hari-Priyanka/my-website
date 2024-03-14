import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaFigma, FaSass, FaBootstrap, FaPhp } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { SiMysql } from 'react-icons/si';
import p1 from './images/p1.PNG';
import p2 from './images/p2.PNG';
import p3 from './images/p3.PNG';
import p4 from './images/p4.jpg';

export const educationData = [
    {degree: 'Bachelor of Science in Computer Science',
    institution: 'Dr. Lankapalli Bullayya College of Engineering for Woman',
    duration: '2016 - 2020',
    },

    {degree: 'Intermediate',
    institution: 'Narayana Junior College',
    duration: '2014 - 2016',
    },

    {degree: '10th',
    institution: 'Fort Catholic Girls high School',
    duration: '2014',
    }
]

export const personalData = [
    {
        category: 'Strengths',
        items: ['Quick learner', 'Self-Motivated', 'Positive attitude', 'Adaptability', 'Hardworking']
    },
    {
        category: 'Hobbies', 
        items: ['Reading books', 'Listening to music', 'Drawing']
    },
]

export const skillsData = [
    { name: 'HTML', icon: <FaHtml5 />, percentage: '90%' },
    { name: 'CSS', icon: <FaCss3 />, percentage: '85%' },
    { name: 'JavaScript', icon: <DiJavascript />, percentage: '70%' },
    { name: 'Reactjs', icon: <FaReact />, percentage: '70%' },
    { name: 'PHP', icon: <FaPhp />, percentage: '60%' },
];

export const additionalSkillsData = [
    { name: 'MYSQL', icon: <SiMysql />, percentage: '65%' },
    { name: 'Bootstrap', icon: <FaBootstrap />, percentage: '75%' },
    { name: 'Sass', icon: <FaSass />, percentage: '80%' },
    { name: 'Figma', icon: <FaFigma />, percentage: '60%' },
    { name: 'Node.js', icon: <FaNodeJs />, percentage: '50%' },
];


export const projectsData = [
    {
        id: '01',
        image: p1,
        name: 'Weather Forecast App',
        description: 'A weather app built with React that displays current and forecast weather using OpenWeather API.',
        githubLink: 'https://github.com/yourusername/weather-app',
        demoLink: 'https://yourusername.github.io/weather-app'
    },
    {
        id:'02',
        image: p2,
        name: 'Furniture Website',
        description: 'A front-end furniture website with login and add-to-cart functionality built using HTML, CSS, and JS.',
        githubLink: 'https://github.com/yourusername/furniture-website',
        demoLink: 'https://yourusername.github.io/furniture-website'
    },
    {
        id:'03',
        image: p4,
        name: 'Amazon Clone',
        description: 'An amazon clone built using reactjs, and has add to cart functionality and payment',
        githubLink: 'https://github.com/yourusername/furniture-website',
        demoLink: 'https://yourusername.github.io/furniture-website'
    },
    {
        id:'04',
        image: p3,
        name: 'AI Image generator',
        description: 'An Ai image generator built using openApi',
        githubLink: 'https://github.com/yourusername/furniture-website',
        demoLink: 'https://yourusername.github.io/furniture-website'
    },
    {
        id:'05',
        image: p2,
        name: 'Delicious-Food Recipes',
        description: 'Find food recipes using api',
        githubLink: 'https://github.com/yourusername/furniture-website',
        demoLink: 'https://yourusername.github.io/furniture-website'
    },
    {
        id:'06',
        image: p4,
        name: 'Spotify Clone',
        description: 'An Ai image generator built using openApi',
        githubLink: 'https://github.com/yourusername/furniture-website',
        demoLink: 'https://yourusername.github.io/furniture-website'
    },
];

