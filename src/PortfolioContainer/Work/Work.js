import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Work.css";

export default function Work(props) {
    const [expandedCard, setExpandedCard] = useState(null);

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const workDetails = [
        {
            title: "Brovanta Industry Private Limited",
            subTitle: "A Multi-Venture Innovation Leader",
            description: "In today’s fast-changing business environment, Brovanta Industry Private Limited has emerged as a fast-growing multi-venture organization. The company represents innovation, resilience, and global ambition. It operates under one strong corporate umbrella.",
            extraContent: "Moreover, Brovanta manages seven diversified ventures in Entertainment, Food & Beverage, Pet Care Services, Software & Technology Solutions, Event Management, Digital Marketing, and Celebrity & Influencer Marketing. As a result, the brand has built a powerful multi-tech identity. It continues to deliver creative and technology-driven solutions to clients worldwide.",
        },
        {
            title: "The Journey",
            subTitle: "From Startup to Global Enterprise",
            description: "Notably, the story of Brovanta Industry is deeply inspiring. The company was founded by young entrepreneur Abinash Rout from a small town. Initially, it started with limited resources but a strong vision.",
            extraContent: "However, lack of metro exposure never became a barrier. Instead, determination and innovation became the foundation of growth. Through careful planning and consistent efforts, Abinash transformed a local startup into a global enterprise. Therefore, his journey reflects the true spirit of modern Indian entrepreneurship.",
        },
        {
            title: "Global Expansion",
            subTitle: "Across India and Global Markets",
            description: "Today, Brovanta Industry has established a strong presence across major Indian cities including Pune, Hyderabad, Odisha, and Delhi. Meanwhile, the company has expanded internationally.",
            extraContent: "The company has expanded internationally to Dubai, Sharjah, South Korea, Sri Lanka, the USA, and Canada. Furthermore, each venture is designed to meet modern market demands. It successfully combines creativity with advanced technology. From software development and digital branding to pet care services and influencer collaborations, Brovanta offers complete business solutions. Consequently, startups and brands can scale efficiently in competitive markets.",
        },
        {
            title: "Vision & Growth",
            subTitle: "Sustainable Growth & Empowerment",
            description: "With its diversified portfolio, Brovanta Industry continues to strengthen its global position. Moreover, the company focuses on empowering young talent and creating employment opportunities.",
            extraContent: "It actively contributes to the digital and creative economy. Additionally, customer satisfaction remains a top priority. Innovation and sustainability guide every business decision. As a result, Brovanta delivers long-term value to its partners. Looking ahead, the company aims to expand further while maintaining strong ethical values. Therefore, it stands as proof that small beginnings can lead to global success.",
        },
    ];

    const toggleExpand = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <div className="work-container screen-container fade-in" id={props.id || ""}>
            <div className="work-parent">
                <ScreenHeading title={"Work"} subHeading={"Brovanta Industry Private Limited"} />
                <div className="work-card-container">
                    {workDetails.map((work, index) => (
                        <div className="work-card" key={index}>
                            <div className="work-card-header">
                                <h3>{work.title}</h3>
                                <h4>{work.subTitle}</h4>
                            </div>
                            <div className="work-card-body">
                                <p>{work.description}</p>
                                {expandedCard === index && (
                                    <p className="extra-content show">{work.extraContent}</p>
                                )}
                            </div>
                            <div className="work-card-footer">
                                <button className="read-more-btn" onClick={() => toggleExpand(index)}>
                                    {expandedCard === index ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
