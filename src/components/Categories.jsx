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
                <div className='icon'><MdRestaurant /></div>
                <div className='name'>Restaurants</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon'><FaHammer /></div>
                <div className='name'>Plumbers</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon'><FaUserDoctor /></div>
                <div className='name'>Doctors</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon'><MdLocalHotel /></div>
                <div className='name'>Hotels</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon'><GiAutoRepair /></div>
                <div className='name'>Auto Repair</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon'><MdOutlineElectricalServices /></div>
                <div className='name'>Electricians</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon'><GrUserManager /></div>
                <div className='name'>Contractors</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon'><MdRestaurant /></div>
                <div className='name'>Dentists</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon'><MdRestaurant /></div>
                <div className='name'>Education</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon'><MdRestaurant /></div>
                <div className='name'>Wedding</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon'><MdRestaurant /></div>
                <div className='name'>Hospitals</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon'><MdRestaurant /></div>
                <div className='name'>Rent & Hire</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon'><MdRestaurant /></div>
                <div className='name'>Gym</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon'><MdRestaurant /></div>
                <div className='name'>PG / Hostels</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon'><MdRestaurant /></div>
                <div className='name'>Courier Service</div>
            </div>
            <div className='icon-and-name'>
                <div className='icon'><MdRestaurant /></div>
                <div className='name'>Driving Schools</div>
            </div>
        </div>
    </div>
  )
}

export default Categories
