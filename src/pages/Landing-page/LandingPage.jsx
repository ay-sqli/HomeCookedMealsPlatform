import React from "react"
import HomeSection from "./HomeSection/HomeSection"
import AboutSection from "./AboutSection/AboutSection"
import HowWorks from "./HowWorks/HowWorks"
import ChefSection from "./ChefSection/ChefSection"
import OrderNow from "./OrderNow/OrderNow"
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "./LandingPage.css"



export default function Landing() {
    
        return(
        <>   
        <Navbar/>
            <div className="Container">
                    <HomeSection/>
                    <AboutSection/>
                    <ChefSection/>
                    <HowWorks/>
                    <OrderNow/>
            </div>
        <Footer/>
        </>
        );

};
