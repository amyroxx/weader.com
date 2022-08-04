import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },

  {
    title: 'Forecast',
    path: '/Forecast',
    icon: <FaIcons.FaCloud />,
    cName: 'nav-text'
  },
  
  {
    title: 'About me',
    path: '/about',
    icon: <FaIcons.FaUserAstronaut />,
    cName: 'nav-text'
  }
  
];
