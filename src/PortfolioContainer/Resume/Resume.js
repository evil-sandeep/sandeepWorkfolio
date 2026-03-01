import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import education from '../../assets/Resume/education.svg';
import interests from '../../assets/Resume/interests.svg';
import programmingSkills from '../../assets/Resume/programming-skills.svg';
import projects from '../../assets/Resume/projects.svg';
import workHistory from '../../assets/Resume/work-history.svg';

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logo: education },
    { label: "Work History", logo: workHistory },
    { label: "Programming Skills", logo: programmingSkills },
    { label: "Projects", logo: projects },
    { label: "Interests", logo: interests },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 60 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Tailwind CSS", ratingPercentage: 80 },
    { skill: "My Sql ", ratingPercentage: 60 },

  ];

  const projectsDetails = [

    {
      title: "Coffee Shop Web Application",
      duration: { fromDate: "2026 Jan", toDate: "Present" },
      description:
        "A full-stack Coffee Shop web application where users can explore the weekly menu, view food items day-wise, add items to the cart, place orders, and proceed to checkout with address and payment flow. The application also includes an admin panel for managing menu items and orders.",
      subHeading: "Technologies Used: MongoDB, Express JS, React JS, Node JS, Bootstrap",
      url: "https://kgarhcafe.vercel.app/"
    },
    {
      title: "Brovanta SaaS Business Solution Platform",
      duration: { fromDate: "2026 Jan", toDate: "2026 Feb" },
      description:
        "A fully customized SaaS web application developed for Brovanta to solve his core business operational challenges. The platform streamlines client management, service tracking, automated workflows, and performance monitoring. It includes secure user authentication, role-based dashboards, real-time analytics, and scalable architecture tailored specifically to client requirements.",
      subHeading: "Technologies Used: MongoDB, Express JS, React JS, Node JS, Tailwind CSS, Redis, Cloudinary.",
      url: "https://brovanta.com"
    }
    ,
    {
      title: "Docify – PDF & Image Editing SaaS Platform",
      duration: { fromDate: "2025", toDate: "Present" },
      description:
        "Docify is a versatile web-based document management platform that enables users to edit, optimize, and transform both PDF files and images with ease. The application provides powerful utilities such as PDF merging, splitting, editing, compressing, and resizing. For images, users can remove backgrounds, adjust dimensions, enhance resolution, and convert images to PDF seamlessly. Designed with a focus on performance and usability, Docify delivers a smooth and efficient document processing experience for individuals and businesses.",
      subHeading: "Technologies Used: React JS, Node JS, Express JS, PDF Processing Libraries, Image Processing APIs, Tailwind CSS, Vercel Deployment",
      url: "https://onepdf-omega.vercel.app/"
    }, {
      title: "Advocate Portfolio Website – Professional Legal Presence",
      duration: { fromDate: "2025 Nov", toDate: "2026 Jan" },
      description:
        "A professionally designed portfolio website developed for an advocate to establish a strong and credible digital presence. The platform highlights legal expertise, practice areas, case focus, client communication channels, and professional achievements. The website is fully responsive, optimized for performance, and structured to build trust with potential clients. Ongoing maintenance and feature enhancements are provided based on client requirements to ensure continuous improvement and relevance.",
      subHeading: "Technologies Used: React JS, Tailwind CSS, Responsive Design, Vercel Deployment, SEO Optimization",
      url: "https://prabhat-khandelwal.vercel.app/"
    }, {
      title: "AI Home Design – Intelligent Dream House Generator",
      duration: { fromDate: "2025", toDate: "Present" },
      description:
        "AI Home Design is an AI-powered web application that generates personalized dream house concepts based on user preferences. The system interacts with users by asking lifestyle and design-related questions, then intelligently creates customized house blueprints, exterior visuals, interior color themes, and modern architectural concepts. By combining AI-driven design logic with a responsive and user-friendly interface, the platform delivers a unique and tailored home visualization experience.",
      subHeading: "Technologies Used: React JS, Node JS, Express JS, AI Integration (Prompt Engineering), Image Generation API, Tailwind CSS, Vercel Deployment",
      url: "https://aihomedesign-smoky.vercel.app/"
    },
    {
      title: "OneWarranty",
      duration: { fromDate: "2025 Dec", toDate: "Present" },
      description:
        "A digital warranty management system that enables users to securely store bills, track warranty periods, and receive expiry notifications, making warranty handling simple and paperless.",
      subHeading: "Technologies Used: MERN Stack, Tailwind",
      url: 'https://onewarranty.vercel.app/'
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2025 Dec", toDate: "2026 Feb" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "EasyShop  ",
      duration: { fromDate: "2025 Aug", toDate: "2025 Dec" },
      description:
        "Developed a robust MERN e-commerce platform featuring seamless payment integration for streamlined transactions, ensuring a smooth and secure shopping experience",
      subHeading:
        "Technologies Used:  React.js, Mongo DB, Express Js, Node Js, Redux.,Bootswatch",
      url: 'https://easyshop-seven.vercel.app/'
    },
    {
      title: "YT Clone  ",
      duration: { fromDate: "2025 Sep", toDate: "2025 Oct" },
      description:
        "Added video purchasing and single-character search for enhanced usability, with infinite scroll for smooth browsing in the YouTube clone project",
      subHeading:
        "Technologies Used: React Js, Redux, Tailwind CSS.",
      url: 'https://66214298da1f29081ba44dd5--fluffy-melomakarona-22fef0.netlify.app/'
    },
    {
      title: "Bhookaed Shopping App",
      duration: { fromDate: "2024 Jun", toDate: "2025 Jun" },
      description:
        "Bhookaed is an engaging React-based e-commerce application designed to deliver a seamless and interactive shopping experience. The platform features real-time order status indicators, smooth cart management, personalized user interactions, and optimized UI performance. To enhance user engagement, it also includes offline entertainment features like a built-in Tic-Tac-Toe game, ensuring users stay connected and entertained even during idle moments.",
      subHeading: "Technologies Used: React JS, JavaScript (ES6+), CSS3, REST APIs, Context API, Responsive Design",
      url: "https://660285d4ed368cba58b09bb1--starlit-twilight-327931.netlify.app/"
    }, {
      title: "Interactive Calendar Web Application",
      duration: { fromDate: "2024 April", toDate: "2024 April" },
      description:
        "A fully interactive and responsive Calendar web application designed to help users efficiently manage schedules and events. The application allows users to add, edit, and delete events directly within the calendar interface. It ensures seamless usability across devices and stores event data using local storage for persistent access without backend dependency.",
      subHeading: "Technologies Used: HTML5, CSS3, JavaScript (ES6), Local Storage API, Responsive Design",
      url: "https://evil-sandeep.github.io/Calender/"
    }, {
      title: "Interactive SignUp Form Application",
      duration: { fromDate: "2024 March", toDate: "2024 March" },
      description:
        "An engaging and visually appealing SignUp Form web application featuring smooth interactive transitions from a landing page to the authentication interface. The platform allows users to choose preferred signup options such as Facebook, Instagram, or LinkedIn, offering flexibility and convenience. The form dynamically adapts to user selections, ensuring a seamless and intuitive onboarding experience across all devices.",
      subHeading: "Technologies Used: HTML5, CSS3, JavaScript (ES6), Responsive Design, UI/UX Animation",
      url: "https://evil-sandeep.github.io/SignUp-Form/"
    }, {
      title: "Bouncing Ball Interactive Animation",
      duration: { fromDate: "2024 Jan", toDate: "2024 Jan" },
      description:
        "A visually engaging web animation project featuring a dynamic bouncing ball as the central interactive element. The animation enhances user engagement by creating a playful and responsive experience — when a square element collides with the ball, it triggers a smooth and delightful jumping effect. This project demonstrates creative UI interaction design and seamless integration of animation logic using front-end technologies.",
      subHeading: "Technologies Used: HTML5, CSS3 (Animations & Transitions), JavaScript (DOM Manipulation, Event Handling)",
      url: "https://evil-sandeep.github.io/Ball-Animation/"
    },
    {
      title: "College Website – Responsive Institutional Web Platform",
      duration: { fromDate: "2023 Dec", toDate: "2023 Dec" },
      description:
        "A visually appealing and fully responsive college website developed to provide detailed institutional information in an engaging format. The platform features a stylish navigation bar with college branding, animated cursor effects, structured course information sections, interactive map integration for easy navigation, and a user-friendly contact letterbox for direct communication. The footer includes quick access links for enhanced usability, ensuring both aesthetic appeal and functional efficiency across all devices.",
      subHeading: "Technologies Used: HTML5, CSS3, Bootstrap, JavaScript, Responsive Web Design",
      url: "https://evil-sandeep.github.io/Coolage-Site/"
    },
    {
      title: "Notepad Application – Local Storage Based Notes Manager",
      duration: { fromDate: "2023 Nov", toDate: "2023 Nov" },
      description:
        "A lightweight and user-friendly Notepad web application that allows users to create, save, and manage unlimited notes efficiently. Upon launching the app, users are presented with a blank note interface and can generate additional notes using the 'Add Note' feature. Notes can be saved directly to local storage, ensuring data persistence even after page refresh. The application also includes a 'Trash' functionality that permanently removes unwanted notes, maintaining clean and organized storage.",
      subHeading: "Technologies Used: HTML5, CSS3, JavaScript (ES6), Local Storage API, DOM Manipulation, Responsive Design",
      url: "https://evil-sandeep.github.io/Notepad/"
    },
    {
      title: "To-Do List Application – Task Management with Animated UI",
      duration: { fromDate: "2023 Oct", toDate: "2023 Oct" },
      description:
        "A dynamic and visually engaging To-Do List web application designed to help users manage daily tasks efficiently. The app allows users to add pending tasks, mark them as completed, and remove them instantly using an intuitive checkbox and delete system. To enhance user experience, the interface features RGB light animation effects, creating a modern and attractive visual design while maintaining smooth task management functionality.",
      subHeading: "Technologies Used: HTML5, CSS3 (RGB Animation Effects), JavaScript (ES6), DOM Manipulation, Responsive Design",
      url: "https://evil-sandeep.github.io/To-Do-List-App/"
    }, {
      title: "MCQ Quiz Application – Interactive Learning Platform",
      duration: { fromDate: "2023 Sep", toDate: "2023 Sep" },
      description:
        "An interactive MCQ Quiz web application designed to enhance learning and user engagement through structured assessments. The app features a collection of JavaScript multiple-choice questions with instant feedback, highlighted correct answers, and a detailed scorecard at the end of each quiz session. Built with a clean and vibrant interface, the application ensures a smooth and responsive experience across devices while promoting effective knowledge evaluation.",
      subHeading: "Technologies Used: HTML5, CSS3, JavaScript (ES6), DOM Manipulation, Responsive Design",
      url: "https://evil-sandeep.github.io/Quizz-app/"
    },
    {
      title: "Drum Kit Web Application – Interactive Sound Experience",
      duration: { fromDate: "2023 Aug", toDate: "2023 Aug" },
      description:
        "An interactive Drum Kit web application that allows users to create rhythmic beats using either keyboard inputs or touch screen interactions. Each key press or tap triggers a unique drum sound, delivering a responsive and immersive audio experience. Designed for entertainment and creative exploration, the project demonstrates real-time event handling, sound integration, and engaging user interface interactions.",
      subHeading: "Technologies Used: HTML5, CSS3, JavaScript (ES6), Audio API, Event Listeners, DOM Manipulation",
      url: "https://evil-sandeep.github.io/Drum-Kit-/"
    }, {
      title: "Dice Game – Randomized Outcome Web Application",
      duration: { fromDate: "2023 Jul", toDate: "2023 Jul" },
      description:
        "A simple yet engaging Dice Game web application built using front-end technologies. The game automatically generates random dice values upon page refresh and determines the winner instantly. This project demonstrates the implementation of random number generation, DOM manipulation, and dynamic UI updates to create an interactive and entertaining user experience.",
      subHeading: "Technologies Used: HTML5, CSS3, JavaScript (ES6), Random Number Generation, DOM Manipulation",
      url: "https://evil-sandeep.github.io/Dice-Game-/"
    },
    {
      title: "We Are Brothers – Themed Static Website",
      duration: { fromDate: "2023 Jun", toDate: "2023 Jun" },
      description:
        "A creatively designed static website built to represent the theme 'We Are Brothers'. The project focuses on clean layout structure, visual storytelling, and responsive design principles. It highlights structured content sections, engaging typography, and aesthetic styling to deliver a meaningful and visually appealing web experience.",
      subHeading: "Technologies Used: HTML5, CSS3, JavaScript, Responsive Web Design",
      url: "https://evil-sandeep.github.io/We-Are-Brothers/"
    }
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={" Biju Patnaik University of Technology (BPUT), Rourkela"}
        subHeading={"MASTER OF COMPUTER APPLICATIONS"}
        fromDate={"2021"}
        toDate={"2023"}
      />

      <ResumeHeading
        heading={"Utkal University,Bhubaneswar"}
        subHeading={"Bachelor of Science degree in Physics"}
        fromDate={"2017"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"Council of Higher Secondary Education, Odisha"}
        subHeading={"SCIENCE"}
        fromDate={"2015"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"Board Of Secondary Education , Odisha"}
        subHeading={"MATRICULATION"}
        fromDate={"2015"}
        toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">



        <ResumeHeading
          heading={"District Civil & Sessions Court, Balasore"}
          subHeading={"Amity Software Pvt. LTD "}
          fromDate={"APRIL 2024"}
          toDate={"PRESENT"}
        />
        <span className="resume-description-text">
          •  Monitor and update security protocols to safeguard sensitive court data.
          <br />
          •Provide system administration and technical support for the Vulnerable Witness Deposition Complex (VWDC).<br />
          •Collaborate with legal teams and court staff to address technical issues promptly.

        </span>


        <ResumeHeading
          heading={"LIVEDIGITAL TECHNOLOGIES"}
          subHeading={"FRONTEND DEVELOPER INTERN"}
          fromDate={"Jul 2023"}
          toDate={"Oct 2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            • Developed and implemented user interface components using React.js, ensuring adherence to well-known
            workflows like Redux.
            <br />
            • Proficient in developing dynamic web interfaces using React.js, with experience in component-based architecture
            and React Router for navigation
          </span>


        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container scrollable" key="projects">
      {projectsDetails.map((project, index) => (
        <div key={index}>
          <ResumeHeading
            heading={
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            }
            subHeading={project.subHeading}
            description={project.description}
            fromDate={project.duration.fromDate}
            toDate={project.duration.toDate}
          />
        </div>
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Travel & Exploration"
        description="Passionate about exploring new cultures and destinations, fostering adaptability, curiosity, and a global perspective."
      />
      <ResumeHeading
        heading="Outdoor Activities"
        description="Engaging in outdoor activities such as hiking, cycling, or camping can showcase your well-roundedness and ability to maintain a healthy work-life balance."
      />
      <ResumeHeading
        heading="Online Gaming"
        description="Passionate about online gaming, adept at teamwork, strategy, and problem-solving in virtual environments."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={bullet.logo}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
