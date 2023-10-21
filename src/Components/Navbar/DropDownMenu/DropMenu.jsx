import React from "react";
import './DropMenu.css'
import {BsFillPersonFill} from 'react-icons/bs'
import {BiSolidCategory, BiSolidHelpCircle, BiSolidShoppingBags} from 'react-icons/bi'
import {BsTagsFill} from 'react-icons/bs'

export default function DropMenu({isopen}) {
    console.log(isopen)
    return(
        <div className={`${isopen ? 'active' : ''} dropdown bg-white py-3 px-2 m-6 `}>
            <ul>
                <li className=" hover:bg-slate-200 px-5 py-2 rounded-full"><BsFillPersonFill className="mr-3"/>Profil</li>
                <li className=" hover:bg-slate-200 px-5 py-2 rounded-full"><BiSolidCategory className="mr-3"/>Categories</li>
                <li className=" hover:bg-slate-200 px-5 py-2 rounded-full"><BsTagsFill className="mr-3"/>Promotions</li>
                <li className=" hover:bg-slate-200 px-5 py-2 rounded-full"><BiSolidShoppingBags className="mr-3"/>Seller</li>
                <li className=" hover:bg-slate-200 px-5 py-2 rounded-full"><BiSolidHelpCircle className="mr-3"/>Help /FAQ</li>
            </ul>
        </div>
    );
};
