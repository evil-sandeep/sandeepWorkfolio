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
      duration: { fromDate: "2024", toDate: "2024" },
      description:
        "A full-stack Coffee Shop web application where users can explore the weekly menu, view food items day-wise, add items to the cart, place orders, and proceed to checkout with address and payment flow. The application also includes an admin panel for managing menu items and orders.",
      subHeading: "Technologies Used: MongoDB, Express JS, React JS, Node JS, Bootstrap",
      url: "https://kgarhcafe.vercel.app/"
    }
    ,
    {
      title: "OneWarranty",
      duration: { fromDate: "2025", toDate: "2025" },
      description:
        "A digital warranty management system that enables users to securely store bills, track warranty periods, and receive expiry notifications, making warranty handling simple and paperless.",
      subHeading: "Technologies Used: MERN Stack, Tailwind",
      url: 'https://onewarranty.vercel.app/'
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2024", toDate: "2024" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "EasyShop  ",
      duration: { fromDate: "2023", toDate: "2024" },
      description:
        "Developed a robust MERN e-commerce platform featuring seamless payment integration for streamlined transactions, ensuring a smooth and secure shopping experience",
      subHeading:
        "Technologies Used:  React.js, Mongo DB, Express Js, Node Js, Redux.,Bootswatch",
      url: 'https://easyshop-9a676ebc47a9.herokuapp.com'
    },
    {
      title: "YT Clone  ",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Added video purchasing and single-character search for enhanced usability, with infinite scroll for smooth browsing in the YouTube clone project",
      subHeading:
        "Technologies Used: React Js, Redux, Tailwind CSS.",
      url: 'https://66214298da1f29081ba44dd5--fluffy-melomakarona-22fef0.netlify.app/'
    },
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
