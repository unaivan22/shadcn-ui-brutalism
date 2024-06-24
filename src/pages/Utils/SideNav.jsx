import { Github } from 'lucide-react';
import React from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';

export default function SideNav() {
    const activeLinkStyle = {
        backgroundColor: 'white', // Change the background color
        color: 'blue', // Change the text color
        // Add any other styles you want to apply to the active link
      };
    
      return (
        <div className='flex flex-col pl-10 pr-6 py-4 bg-yellow-200 h-[96vh] overflow-y-scroll pb-12 gap-y-1'>
            <a className="font-medium block flex gap-x-2 items-center border-2 border-black rounded-full px-4 py-2 w-fit my-4 md:hidden text-gray-600 hover:text-white hover:bg-black dark:text-neutral-400 dark:hover:text-neutral-500" href="https://github.com/unaivan22/shadcn-ui-brutalism" target="_blank" rel="noopener noreferrer"> <Github /> Github</a>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/"
                activeClassName="active" 
            >
                Home
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/installation"
                activeClassName="active" 
            >
                Installation
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/accordion"
                activeClassName="active" 
            >
                Accordion
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/alert"
                activeClassName="active" 
            >
                Alert
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/alert-dialog"
                activeClassName="active" 
            >
                Alert Dialog
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/badge"
                activeClassName="active" 
            >
                Badge
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/button"
                activeClassName="active" 
            >
                Button
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/calendar"
                activeClassName="active" 
            >
                Calendar
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/card"
                activeClassName="active" 
            >
                Card
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/carousel"
                activeClassName="active" 
            >
                Carousel
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/checkbox"
                activeClassName="active" 
            >
                Checkbox
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/combobox"
                activeClassName="active" 
            >
                Combobox
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/command"
                activeClassName="active" 
            >
                Command
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/date-picker"
                activeClassName="active" 
            >
                Date Picker
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/dialog"
                activeClassName="active" 
            >
                Dialog
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/drawer"
                activeClassName="active" 
            >
                Drawer
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/dropdown-menu"
                activeClassName="active" 
            >
                Dropdown Menu
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/hover-card"
                activeClassName="active" 
            >
                Hover Card
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/input"
                activeClassName="active" 
            >
                Input
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/input-otp"
                activeClassName="active" 
            >
                Input OTP
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/menubar"
                activeClassName="active" 
            >
                Menubar
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/navigation-menu"
                activeClassName="active" 
            >
                Navigation Menu
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/pagination"
                activeClassName="active" 
            >
                Pagination
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/popover"
                activeClassName="active" 
            >
                Popover
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/progress"
                activeClassName="active" 
            >
                Progress
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/radio-group"
                activeClassName="active" 
            >
                Radio Group
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/select"
                activeClassName="active" 
            >
                Select
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/slider"
                activeClassName="active" 
            >
                Slider
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/switch"
                activeClassName="active" 
            >
                Switch
            </NavLink>
            <NavLink
                exact
                className='rounded-full py-[.3rem] text-sm font-light opacity-70'
                to="/tabs"
                activeClassName="active" 
            >
                Tabs
            </NavLink>
        </div>
      );
  }