// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Darian",
  middleName: "",
  lastName: "Uriarte",
  message: " Passionate about using technology to make a positive impact ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/darianuriarte",
    },
    {
      image: "fa-instagram",
      url: "https://instagram.com/uriarte_darian?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/darian-uriarte-28500b251",
    },

  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/My project.png"),
  imageSize: 375,
  message:
    "I am a Computer Science senior at the University of Florida with a passion for software development and a robust background in various programming languages and technologies. Having led a full stack software engineering project, managed IT services, and provided comprehensive technical support, I possess a strong blend of technical skills, leadership, and customer service. My bilingual proficiency in English and Spanish, combined with my ability to create solutions, positions me to make a significant impact in a software development role. Over my academic and professional journey, I have received numerous honors and awards that recognize my technical expertise, leadership potential, and academic accomplishments.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "darianuriarte", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 55 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 90 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "Java", value: 85 },
    { name: "Node.js", value: 75 },
    { name: "Express.js", value: 60 },
    { name: "Git", value: 70 },
    { name: "GraphQL", value: 30 },
    { name: "REST API", value: 80 },
    { name: "Material UI", value: 75 },
    { name: "Information technology (IT)", value: 95 },
    { name: "Digital Logic", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 95 },
    { name: "Time Management", value: 60 },
    { name: "Leadership", value: 100 },
    { name: "Innovation", value: 85 },
    { name: "Self-Motivation", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Engineering Internship opportunities! If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "darianuriarte99@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Full Stack Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/YIT.png'),
      date: 'May 2023 - Present ',
    },
    {
      role: 'Services Manager',
      companylogo: require('../assets/img/ODP.png'),
      date: 'Jan 2020 - Dec 2021',
    },
    {
      role: 'IT Technician',
      companylogo: require('../assets/img/compu.png'),
      date: 'Jul 2018 - Dec 2019',
    },
  ]
}


export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
