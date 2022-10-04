import React from 'react'
import * as GiIcons from 'react-icons/gi'


export const SidebarData = [
    {
       title: 'Home',
       path: '/',
       icon: <GiIcons.GiWoodCabin />,
       cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <GiIcons.GiDeerHead />,
        cName: 'nav-text'
     },
     {
        title: 'Prices',
        path: '/prices',
        icon: <GiIcons.GiDeerTrack />,
        cName: 'nav-text'
     },
     {
        title: 'Gallery',
        path: '/gallery',
        icon: <GiIcons.GiDeer />,
        cName: 'nav-text'
     },
     {
        title: 'Contact',
        path: '/contact',
        icon: <GiIcons.GiBeech />,
        cName: 'nav-text'
     }
]