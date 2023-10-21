import React from "react";
import './ChefSection.css'
import { MdOutlineArrowForwardIos } from "react-icons/md"
import WomenChef from './image/Chef-section.png'


export default function ChefSection() {
           return(
            <div className="Chef-section">
                 <h2 className="text-center text-3xl font-medium mt-6">Become a <span className="text-red-400">Home Chef</span></h2>
                 <p className=" font-normal ">Cook 🧑🏼‍🍳, Share 📱, and Earn 💸</p>
                 <h3 className="text-red-400 opacity-10">HOME CHEF</h3>
                <div className="Chef-content">
                    <div className="Chef-text">
                        <p>Are you a <span className="text-red-400">talented</span> woman chef with a passion for <span className="text-red-400">cooking</span>? <span className="text-red-400">Join 🤝</span> our platform and <span className="text-red-400">share</span> your culinary masterpieces 💫 with the world. Become a <span className="text-red-400">Home Chef</span> and <span className="text-red-400">inspire</span> others with your unique creations 🔥.</p>
                        <button className="bg-red-400 hover:bg-red-300 duration-500 text-white font-bold py-3 px-8 rounded-full mt-6">Join Us <MdOutlineArrowForwardIos style={{ fontSize: '1.3rem', marginLeft: '2px' }}/></button>
                    </div>
                    
                    <div className="image-bg-red bg-red-400">
                    <img src={WomenChef} alt="Women Chef"></img>
                    </div>

                </div>
            </div>

           );
};
