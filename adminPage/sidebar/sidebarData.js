import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import ProfileIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';



export const SidebarData = [
    {
        title:"Home",
        icon:<HomeIcon />,
        link:"/Home"
    },
    {
        title:"Post",
        icon:<EditIcon />,
        link:"/Post"
    },
    {
        title:"Profile",
        icon:<ProfileIcon />,
        link:"/Profile"
    },
    {
        title:"Messages",
        icon:<EmailIcon />,
        link:"/messages"
    },
    {
        title:"Settings",
        icon:<SettingsIcon />,
        link:"/settings"
    },
    {
        title:"Logout",
        icon:<LogoutIcon/>,
        link:"/logout"
    },
]
 