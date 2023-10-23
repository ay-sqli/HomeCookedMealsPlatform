import React from "react"
import "./Hero.css"
import { MdOutlineArrowForwardIos } from "react-icons/md"
import styles from "../../../styles/styles";
import { Link } from "react-router-dom";



export default function Hero() {
    
    return( 
        
        <div className="Home-section">
   
                <div className="Welcome">
                    <h1>Welcome to <span className="text-red-400">Home Chef</span>👋</h1><br></br>
                    <p>Discover Delicious 😋 Homemade Creations by Talented Women 🧕 Cooks.</p><br></br>
                    <Link to="/products" className="inline-block">
                      <div className={`${styles.button} mt-5`}>
                          <span className="text-[#fff] font-[Poppins] text-[18px]">
                              Shop Now
                          </span>
                      </div>
                      </Link>                
                
                </div>
                
                <div className="Best-chef">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="33" viewBox="0 0 40 53" fill="none">
                    <path d="M22.3593 2.46995C22.3593 0.00627682 19.1866 -0.922257 17.7891 1.1201C4.96875 19.8595 23.1875 20.7032 23.1875 29.8125C23.1875 33.5008 20.1741 36.4851 16.4745 36.4365C12.8339 36.3899 9.93749 33.3548 9.93749 29.7142V20.8626C9.93749 18.6163 7.19743 17.5263 5.64884 19.1546C2.87773 22.0654 0 27.0518 0 33.125C0 44.0842 8.91579 53 19.875 53C30.8342 53 39.75 44.0842 39.75 33.125C39.75 15.4974 22.3593 13.1465 22.3593 2.46995Z" fill="#F35151"/>
                    </svg>
                        <h2 className="px-2 py-2">Our Best Selling</h2>
                    </div>
                    <div className="flex ">
                        <div className="chef-profil img-1 py-10 px-10 m-1 bg-slate-500 rounded-full mt-4"></div>
                        <div className="chef-profil img-2 py-10 px-10 m-1 bg-slate-500 rounded-full mt-4"></div>
                        <div className="chef-profil img-3 py-10 px-10 m-1 bg-slate-500 rounded-full mt-4"></div>
                        <div className="chef-profil img-4 py-10 px-10 m-1 bg-slate-500 rounded-full mt-4"></div>
                        <Link to="/best-selling" className="inline-block">
                        <div className="chef-profil img-5 m-1 outline outline-red-500 duration-500 hover:bg-gray-300 rounded-full mt-4 px-10 py-10 flex justify-center align-middle cursor-pointer"><span className="font-medium text-gray-800 text-6xl relative bottom-7">+</span></div>
                        </Link>                

                    </div>
                </div>
        </div>
 );

};
