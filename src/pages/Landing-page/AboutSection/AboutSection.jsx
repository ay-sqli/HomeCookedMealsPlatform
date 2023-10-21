import React from "react";
import './aboutSection.css';
import AboutCard from "./AboutCard/AboutCard";
import image1 from "./AboutCard/image/image1.png"
import image2 from "./AboutCard/image/image2.png"
import image3 from "./AboutCard/image/image3.png"
import image4 from "./AboutCard/image/image4.png"
import image5 from "./AboutCard/image/image5.png"


const aboutCards = [
  {
    titleContent: "Support Local Talent",
    textContent: "Empower passionate local chefs.",
    image: image1,
  },
  {
    titleContent: "Authentic Homemade Flavors",
    textContent: "Savor generational recipes",
    image: image2,
  },
  {
    titleContent: "Variety You'll Love",
    textContent: "Explore diverse, satisfying dishes.",
    image: image3,
  },
  {
    titleContent: "Convenience at Your Fingertips",
    textContent: "Easy, mobile ordering.",
    image: image4,
  },
  {
    titleContent: "Variety You'll Love",
    textContent: "Explore diverse, satisfying dishes.",
    image: image5,
  },
];

export default function AboutSection() {
  return (
    <div className="About-section">
        <h2 className="text-center text-3xl font-medium mt-12">Why Choose <span className="text-red-400">Home Chef</span>?</h2>
        <p className=" font-normal ">Discover the Reasons to Choose HomeChef Hub 🤔</p>

      <div className="About-card">
        {aboutCards.map((card, index) => (
          <AboutCard 
            key={index}
            titleContent={card.titleContent}
            textContent={card.textContent}
            image={card.image}
          />
        ))}
      </div>
      <div className="Slide-arrow flex m-12">

        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 52 50" fill="none" className="hover:bg-gray-300 duration-500 py-2 px-2 rounded-full">
          <path d="M29.8054 46.6056L27.3054 49.1591C26.2468 50.2404 24.5167 50.2587 23.4469 49.2L1.08607 27.319C0.00483141 26.2604 -0.0134872 24.5304 1.04521 23.4605L22.9376 1.09957C23.9962 0.0183287 25.7262 1.00273e-05 26.7961 1.05871L29.3496 3.55877C30.4424 4.62861 30.4383 6.39306 29.3455 7.46328L15.7685 20.6751L48.4804 20.3287C49.9942 20.3127 51.225 21.5177 51.241 23.0315L51.2796 26.6737C51.2956 28.1875 50.0906 29.4183 48.5768 29.4343L15.8649 29.7807L29.7186 42.702C30.8452 43.7487 30.8867 45.5127 29.8054 46.6056Z" fill="#F35151"/>
        </svg> 

        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 52 50" fill="none" className="hover:bg-gray-300 duration-500 py-2 px-2 rounded-full">
          <path d="M21.684 3.32948L24.2109 0.802532C25.2809 -0.267438 27.011 -0.267438 28.0696 0.802532L50.1975 22.919C51.2675 23.989 51.2675 25.7192 50.1975 26.7778L28.0696 48.9057C26.9997 49.9756 25.2695 49.9756 24.2109 48.9057L21.684 46.3787C20.6026 45.2973 20.6254 43.533 21.7295 42.4744L35.4456 29.4072L2.73183 29.4072C1.21794 29.4072 -6.06783e-06 28.1892 -5.93548e-06 26.6753L-5.61705e-06 23.0329C-5.4847e-06 21.519 1.21794 20.301 2.73183 20.301L35.4456 20.301L21.7295 7.23373C20.614 6.17515 20.5912 4.41083 21.684 3.32948Z" fill="#F35151"/>
        </svg>
      
      </div>
    </div>
  );
};
