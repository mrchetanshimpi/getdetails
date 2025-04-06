import React from 'react'
import '../css/Categories.css'
import { MdRestaurant } from "react-icons/md";
import { FaHammer } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdLocalHotel } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { MdOutlineElectricalServices } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";

const Categories = () => {
  return (
    <div className='categories-container'>
        <div className='category-heading'>Popular Categories</div>
        <div className='icon-container'>
            <div className='icon-and-name'>
                <div className='icon icon1'><MdRestaurant /></div>
                <div className='name'>Restaurants</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon icon2'><FaHammer /></div>
                <div className='name'>Plumbers</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon icon3'><FaUserDoctor /></div>
                <div className='name'>Doctors</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon icon4'><MdLocalHotel /></div>
                <div className='name'>Hotels</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon icon5'><GiAutoRepair /></div>
                <div className='name'>Auto Repair</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon icon6'><MdOutlineElectricalServices /></div>
                <div className='name'>Electricians</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon icon7'><GrUserManager /></div>
                <div className='name'>Contractors</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon icon8'><MdRestaurant /></div>
                <div className='name'>Dentists</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon icon9'><MdRestaurant /></div>
                <div className='name'>Education</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon icon10'><MdRestaurant /></div>
                <div className='name'>Wedding</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon icon11'><MdRestaurant /></div>
                <div className='name'>Hospitals</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon icon12'><MdRestaurant /></div>
                <div className='name'>Rent & Hire</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon icon13'><MdRestaurant /></div>
                <div className='name'>Gym</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon icon14'><MdRestaurant /></div>
                <div className='name'>PG / Hostels</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon icon15'><MdRestaurant /></div>
                <div className='name'>Courier Service</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon icon16'><MdRestaurant /></div>
                <div className='name'>Driving Schools</div>
            </div>
        </div>
    </div>
  )
}

export default Categories
