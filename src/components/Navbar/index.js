import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Dashboard from "./SideNavImages/Dashboard.jpg"
import Applications from './SideNavImages/Applications.jpg'
import Date from './SideNavImages/DateActive.jpg'
import Users from './SideNavImages/Users.jpg'
import DeployAgent from './SideNavImages/DeployAgent.jpg'
import settings from './SideNavImages/settings.jpg'
import vector from './SideNavImages/Vector.jpg'
import toggleLeft from './SideNavImages/Toggle.jpg'
import toggleRight from './SideNavImages/toggleRight.jpg'
import logo from './SideNavImages/Avesha.jpg'

import './index.css'
function Navbar() {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
          <Sidebar collapsed={collapsed} className="sidebar" backgroundColor="#ffffff"  >
                <Menu  className='nav-menu' >
                    <MenuItem icon = {<img src={vector} alt="vector" />}  ><span className='smart' >Smart</span><span className='scaler' > Scaler</span></MenuItem>
                    {collapsed ? <button onClick={handleToggleSidebar} className="toggle-left"  >
                        <img src={toggleLeft} alt='toggle-left'  />
                    </button> : 
                     <button onClick={handleToggleSidebar} className="toggle-right"  >
                    <img src={toggleRight} alt='toggle-right'  />
                    </button> }                    
                    <MenuItem icon = {<img src={Dashboard} alt="dashboard" />}  >Dashboard</MenuItem>
                    <MenuItem icon = {<img src={Applications} alt="applications" />} >Applications </MenuItem>
                    <MenuItem icon = {<img src={Date} alt="event" />}  className="nav-active" >Events</MenuItem>
                    <MenuItem icon = {<img src={Users} alt="users" />} >Users</MenuItem>
                    <MenuItem icon = {<img src={DeployAgent} alt="deployagent" />} >Deploy Agent</MenuItem>
                    <MenuItem icon = {<img src={settings} alt="settings" />} >Settings</MenuItem>
                    <MenuItem icon = {<img src={logo} alt="logo" className='nav-logo'/>} ></MenuItem>

                </Menu>
            </Sidebar>
     )
}

export default Navbar