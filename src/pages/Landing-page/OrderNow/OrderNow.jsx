import React from "react";
import './OrderNow.css'
import { MdOutlineArrowForwardIos } from "react-icons/md"


export default function OrderNow() {
    
    return(
            <div className="Order-now">
                    <div className="Order-Now-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="59" viewBox="0 0 66 59" fill="none">
                    <path d="M20.1298 28.7065H4.65306C4.91705 13.2956 7.95297 10.7547 17.4238 5.14474C18.5128 4.48475 18.8758 3.09877 18.2158 1.97679C17.5558 0.88781 16.1697 0.524849 15.0478 1.18484C3.89394 7.78473 0 11.8106 0 31.0165V48.8032C0 54.4461 4.58702 59 10.1969 59H20.0968C25.9047 59 30.2934 54.6111 30.2934 48.8032V38.9033C30.3264 33.0954 25.9377 28.7065 20.1298 28.7065Z" fill="#292D32"/>
                    <path opacity="0.4" d="M55.836 28.7065H40.3593C40.6233 13.2956 43.6596 10.7547 53.1304 5.14474C54.2194 4.48475 54.5824 3.09877 53.9224 1.97679C53.2624 0.88781 51.8761 0.524849 50.7541 1.18484C39.6003 7.78473 35.7064 11.8106 35.7064 31.0165V48.8032C35.7064 54.4461 40.2936 59 45.9035 59H55.8034C61.6113 59 65.9999 54.6111 65.9999 48.8032V38.9033C66.0329 33.0954 61.6439 28.7065 55.836 28.7065Z" fill="#292D32"/>
                    </svg>
                    <h2 className="font-bold text-4xl">The Taste of Home, Just a Click Away</h2>
                    <p className="font-light">Rediscover the joy of homemade food with us at Home Chef Hub, where every meal tells a story. Join our community for a delightful culinary journey.</p>
                    <button className="bg-red-400 hover:bg-red-300 duration-500 text-white font-bold py-3 px-8 rounded-full">Order Now 😋<MdOutlineArrowForwardIos style={{ fontSize: '1.3rem', marginLeft: '2px' }}/></button>
                    </div>
            </div>
    );
};
