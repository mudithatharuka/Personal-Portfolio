import { GiComputing } from "react-icons/gi";
import TripplinCarRent from "../assets/dummyimg.png";
import WUSLlogo from "../assets/WUSL.jpeg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
  { url: "https://mudithabatuwangala.medium.com", title: "Blog" },
];

const profile = {
  name: "Muditha Batuwangala",
  roles: ["Software Engineer.", "Full Stack Developer.", "Researcher in AI."],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  urls: {
    resume: "https://google.com",
    github: "",
    linkedin: "",
    x: "",
    insta: "",
    facebook: "",
  },
};

const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://www.logolynx.com/images/logolynx/s_6e/6e6e1283cd55308a55b9eae8197b5e9b.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      // {
      //   name: "Bootstrap",
      //   image:
      //     "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      // },
      {
        name: "Tailwind",
        image:
          "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png",
      },
      {
        name: "Material UI",
        image: "https://www.pngrepo.com/download/354048/material-ui.png",
      },
      {
        name: "Chakra UI",
        image:
          "https://www.jeffy-evangelista.tech/assets/chakra-ui-08af548d.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image:
          "https://www.educloud.academy/_amplify/image?url=/images/frameworks/java.png&w=320&q=100",
      },
      {
        name: "C",
        image:
          "https://career.fpt-software.com/wp-content/uploads/2020/07/herstellerkat_c-programmierung.png",
      },
      {
        name: "C#",
        image: "https://iconape.com/wp-content/png_logo_vector/c.png",
      },
      {
        name: "PHP",
        image: "https://pngimg.com/uploads/php/php_PNG43.png",
      },
      {
        name: "TypeScript",
        image:
          "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_plain_logo_icon_146316.png",
      },
      {
        name: "Node Js",
        image:
          "https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png",
      },
      {
        name: "Express Js",
        image:
          "https://www.britwise.com/assets/imgs/meanstack-development/expressjslogo.png",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      {
        name: "Git",
        image:
          "https://cdn.freebiesupply.com/logos/large/2x/git-icon-logo-png-transparent.png",
      },
      {
        name: "GitHub",
        image:
          "https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png",
      },
      {
        name: "BitBucket",
        image:
          "https://www.axonius.com/hubfs/Adapter%20Logos/bitbucket%20logo.png#keepProtocol",
      },
      {
        name: "Docker",
        image:
          "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-1024.png",
      },
      {
        name: "AWS",
        image:
          "https://th.bing.com/th/id/R.a6c1d39637949a370f8e93aab60a741f?rik=ABtTtCBpS8oVOw&riu=http%3a%2f%2fgisuser.com%2fwp-content%2fuploads%2f2018%2f08%2f2000px-Amazon_Web_Services_Logo.svg_.png&ehk=hQq0rohWcsyiJCNiAOwDAXgnti8Yjm0TPZJLBnIXSHM%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        name: "Azure",
        image:
          "https://indiciatraining.com/wp-content/uploads/2019/10/azure_logo_transparent-2.png",
      },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      {
        name: "NumPy",
        image: "https://www.pngrepo.com/download/373938/numpy.png",
      },
      {
        name: "Pandas",
        image:
          "https://www.fireblazeaischool.in/blogs/wp-content/uploads/2020/06/Pandas.png",
      },
      {
        name: "PyTorch",
        image:
          "https://iconape.com/wp-content/files/cx/351981/svg/pytorch-seeklogo.com.svg",
      },
      {
        name: "TensorFlow",
        image:
          "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png",
      },
      {
        name: "Google Colab",
        image:
          "https://www.toolassistant.com/wp-content/uploads/2023/01/639ac31ba9624303044a727c_63996e8028a4d13366cc0117_colab_favicon_256px-600x600.png",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MySQL",
        image: "https://pngimg.com/uploads/mysql/mysql_PNG23.png",
      },
      {
        name: "SQL Server",
        image:
          "https://www.freeiconspng.com/uploads/sql-server-icon-png-28.png",
      },
      {
        name: "MongoDB",
        image:
          "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "VS Code",
        image:
          "https://static-00.iconduck.com/assets.00/file-type-vscode-icon-512x508-376y62ux.png",
      },
      {
        name: "Postman",
        image:
          "https://149510500.v2.pressablecdn.com/wp-content/uploads/2021/05/Postman-removebg-preview.png",
      },
      {
        name: "Linux",
        image:
          "https://www.pngall.com/wp-content/uploads/5/Linux-Logo-PNG-Download-Image.png",
      },
      {
        name: "Jira",
        image: "https://clipground.com/images/jira-logo-clipart-2.png",
      },
      {
        name: "Confluence",
        image:
          "https://www.dxtr.co.uk/wp-content/uploads/2020/05/confluence-logo.png",
      },
      {
        name: "REST Api",
        image:
          "https://icon-library.com/images/rest-api-icon/rest-api-icon-26.jpg",
      },
    ],
  },
];

const experiences = [
  {
    title: "Junior Software Engineer",
    companyName: "WIA Systems Inc.",
    location: "Colombo, Sri Lanka | Remote",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "Mar 2023 - Present",
    points: [
      "Implementation of configurations, custom reports, integrations, and modifications (CRIMs) on the functions of the IFS Enterprise Resource Planning (IFS ERP) application according to the customer requirements requirements.",
      "Migration of customer data from legacy systems to new implementations, ensuring a 96%+ success rate across all projects by collaborating closely with business analysts for seamless transitions.",
      "Conducting hands-on training sessions for customers and partners demonstrating the use of core application features.",
      "Investigating how existing IFS ERP features could replicate the deprecated functionalities to ensure seamless workflow continuity.",
    ],
    skills: [
      "IFS ERP",
      "Java",
      "C#",
      "PL/SQL",
      "SQL",
      "Git",
      "BitBucket",
      "SQL Server",
      "Postman",
      "REST API",
      "BizAPI",
      "Jira",
      "Confluence",
    ],
  },
  {
    title: "Full Stack Developer - Intern",
    companyName: "Elephant Hive Limited",
    location: "Dublin, Ireland | Remote",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Dec 2022",
    points: [
      "Developed and maintained 100+ React components, implemented JavaScript functions and backend request controllers (RESTful API) with Node.js and TypeScript to manipulate MongoDB database for providing features on the company main web application.",
      "Maintained the site reliability and high-quality by testing the web application with new functionalities.",
      "Improved the admin experience by incorporating Google Analytics events with user engagement on the website.",
      "Implemented 65% of mobile responsiveness and attained maximum client satisfaction and positive user reviews with the flawless operation of the application.",
      "Investigated and resolved defects to maintain quality and guarantee proper operation.",
    ],
    skills: [
      "JavaScript",
      "React Js",
      "Chakra UI",
      "Node JS",
      "TypeScript",
      "Express JS",
      "Git",
      "GitHub",
      "Azure",
      "MongoDB",
      "Postman",
      "REST API",
      "VS Code",
    ],
  },
  {
    title: "Full Stack Developer - Part Time",
    companyName: "Elephant Hive Limited",
    location: "Dublin, Ireland | Remote",
    // icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jun 2022",
    points: [
      "Achieved $150 monthly cost savings during the first two months of employment by conducting due diligence research and fine-tuning a natural language processing model with Python, utilizing an open-source library.",
      "Managed existing JavaScript function implementations to enhance site performance by 70% and developed new functions based on user requirements.",
      "Engaged with UI/UX designers to improve and manage the usability and performance of the company main website in areas such as speed, responsiveness, and graphical language.",
      "Completed frontend and backend improvements in less than the expected time frame using React, Node.js, Express, and TypeScript.",
    ],
    skills: [
      "JavaScript",
      "React Js",
      "Material UI",
      "Python",
      "Node JS",
      "TypeScript",
      "Express JS",
      "Git",
      "GitHub",
      "NumPy",
      "Pandas",
      "PyTorch",
      "TensorFlow",
      "Google Colab",
      "MongoDB",
      "REST API",
      "VS Code",
    ],
  },
];

const projects = [
  {
    name: "Tripplin Car Rent",
    duration: "Mar 2021 - Jan 2022",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "purple-text-gradient",
      },
    ],
    image: TripplinCarRent,
    category: "webapp",
    source_code_url: "https://github.com/mudithatharuka/TripplinCarRent",
    live_preview_url: "",
    members: [
      {
        name: "Muditha Batuwangala",
        img: "https://avatars.githubusercontent.com/u/81775289?v=4",
        linkedin: "https://www.linkedin.com/in/muditha-batuwangala",
        github: "https://github.com/mudithatharuka",
      },
    ],
  },
  {
    name: "Tripplin Car Rent",
    duration: "Mar 2021 - Jan 2022",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "purple-text-gradient",
      },
    ],
    image: TripplinCarRent,
    category: "webapp",
    source_code_url: "https://github.com/mudithatharuka/TripplinCarRent",
    live_preview_url: "",
    members: [
      {
        name: "Muditha Batuwangala",
        img: "https://avatars.githubusercontent.com/u/81775289?v=4",
        linkedin: "https://www.linkedin.com/in/muditha-batuwangala",
        github: "https://github.com/mudithatharuka",
      },
    ],
  },
  {
    name: "Tripplin Car Rent",
    duration: "Mar 2021 - Jan 2022",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "purple-text-gradient",
      },
    ],
    image: TripplinCarRent,
    category: "webapp",
    source_code_url: "https://github.com/mudithatharuka/TripplinCarRent",
    live_preview_url: "",
    members: [
      {
        name: "Muditha Batuwangala",
        img: "https://avatars.githubusercontent.com/u/81775289?v=4",
        linkedin: "https://www.linkedin.com/in/muditha-batuwangala",
        github: "https://github.com/mudithatharuka",
      },
      {
        name: "Muditha Batuwangala",
        img: "https://avatars.githubusercontent.com/u/81775289?v=4",
        linkedin: "https://www.linkedin.com/in/muditha-batuwangala",
        github: "https://github.com/mudithatharuka",
      },
    ],
  },
  {
    name: "Tripplin Car Rent",
    duration: "Mar 2021 - Jan 2022",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "purple-text-gradient",
      },
    ],
    image: TripplinCarRent,
    category: "webapp",
    source_code_url: "https://github.com/mudithatharuka/TripplinCarRent",
    live_preview_url: "",
    members: [
      {
        name: "Muditha Batuwangala",
        img: "https://avatars.githubusercontent.com/u/81775289?v=4",
        linkedin: "https://www.linkedin.com/in/muditha-batuwangala",
        github: "https://github.com/mudithatharuka",
      },
    ],
  },
  {
    name: "Tripplin Car Rent",
    duration: "Mar 2021 - Jan 2022",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "purple-text-gradient",
      },
    ],
    image: TripplinCarRent,
    category: "webapp",
    source_code_url: "https://github.com/mudithatharuka/TripplinCarRent",
    live_preview_url: "",
    members: [
      {
        name: "Muditha Batuwangala",
        img: "https://avatars.githubusercontent.com/u/81775289?v=4",
        linkedin: "https://www.linkedin.com/in/muditha-batuwangala",
        github: "https://github.com/mudithatharuka",
      },
      {
        name: "Muditha Batuwangala",
        img: "https://avatars.githubusercontent.com/u/81775289?v=4",
        linkedin: "https://www.linkedin.com/in/muditha-batuwangala",
        github: "https://github.com/mudithatharuka",
      },
    ],
  },
  {
    name: "Tripplin Car Rent",
    duration: "Mar 2021 - Jan 2022",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "purple-text-gradient",
      },
    ],
    image: TripplinCarRent,
    category: "webapp",
    source_code_url: "https://github.com/mudithatharuka/TripplinCarRent",
    live_preview_url: "",
    members: [
      {
        name: "Muditha Batuwangala",
        img: "https://avatars.githubusercontent.com/u/81775289?v=4",
        linkedin: "https://www.linkedin.com/in/muditha-batuwangala",
        github: "https://github.com/mudithatharuka",
      },
    ],
  },
];

const education = [
  {
    school: "Wayamba University of Sri Lanka",
    location: "Kuliyapitiya, LK",
    img: "https://www.wyb.ac.lk/wp-content/uploads/2020/09/cropped-android-chrome-512x512-1-180x180.png",
    date: "Jan 2018 - Aug 2023",
    grade: "Second Class (Upper Division) Honours | CGPA: 3.67 out of 4.0",
    desc: "I have completed my B.Sc. (Special) degree in Computer Science at Wayamba University of Sri Lanka, Kuliyapitiya with a CGPA of 3.67 out of 4.0. I have pursued subjects in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Cloud Computing, and AI as some of the main subjects. I was also a member of the IEEE Student Branch of Wayamba University of Sri Lanka in 2022, where I was able to share my knowledge in IT with junior collegues with many workshops. Also I was happy to work as the Student Department Coordinator of the Department of Computing & Information Systems in our batch in 2022.",
    degree: "B.Sc. (Special) in Computer Science",
    url: "https://www.wyb.ac.lk/",
  },
  {
    school: "Gurukula College",
    location: "Kelaniya, LK",
    img: "https://gurukula.schweb.lk/images/logo-final-strock-removed.png",
    date: "Jun 2014 - Aug 2016",
    grade: "1 Credit & 2 Ordinary passes",
    desc: "I have completed my 13th class high-school/secondary education at Gurukula College, Kelaniya, in Physical Science (Mathematics) stream. There I pursued Combined Mathematics, Chemistry, and Physics as my 3 major subjects.",
    degree: "G.C.E Advanced Level - Physical Science",
    url: "https://gurukula.schweb.lk/",
  },
  {
    school: "Gurukula College",
    location: "Kelaniya, LK",
    img: "https://gurukula.schweb.lk/images/logo-final-strock-removed.png",
    date: "Jan 2012 - Dec 2013",
    grade: "8 Distinctions & 1 Credit pass",
    desc: "I have completed my 11th class education at Gurukula College, Kelaniya. There I pursued Business and Accounting Studies, Music, and Media as my 3 bucket subjects apart for the 6 main subjects.",
    degree: "G.C.E Ordinary Level",
    url: "https://gurukula.schweb.lk/",
  },
];

export { navLinks, profile, skills, experiences, projects, education };
