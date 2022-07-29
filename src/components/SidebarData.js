import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Social',
    path: '/social',
    icon: <IoIcons.IoIosHand />,
    cName: 'nav-text'
  },
  {
    title: 'Forecast',
    path: '/forecast',
    icon: <FaIcons.FaCloud />,
    cName: 'nav-text'
  },
  
  {
    title: 'About me',
    path: '/about',
    icon: <FaIcons.FaUserAstronaut />,
    cName: 'nav-text'
  },
  
];
