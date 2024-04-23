import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineContacts, AiOutlineFileText, AiOutlineCalendar, AiOutlineQuestionCircle, AiOutlineMenu } from 'react-icons/ai';

const SidebarComponent = ({setLoggedIn, userInfo}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const Item = ({ title, to, icon }) => (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      component = {<Link to={to} style={{ textDecoration: "none", color: "inherit" }}></Link>}
    >
      {title}
    </MenuItem>
  );

  return (
    <Sidebar collapsed={isCollapsed}>
      <Menu iconShape="square" className="Sidebar">
        
      <MenuItem
      onClick={() => setIsCollapsed(!isCollapsed)}
      icon={isCollapsed ? <AiOutlineMenu className="menu-icon" /> : undefined}
      className="menu-item"
    >
      {!isCollapsed && (
        <div className="TopBar">
          <div className="logo">LOGO</div>
          <AiOutlineMenu className="menu-icon" onClick={() => setIsCollapsed(!isCollapsed)} />
        </div>
      )}
    </MenuItem>

        {!isCollapsed && (
          <div className="userInfo">
            <img
              alt="profile user"
              width="100px"
              height="100px"
              src="../../assets/profile.png"
            />
            <div className="user-name">
              {userInfo.name}
            </div>
            <div className="User-title">
              {userInfo.title}
            </div>
          </div>
        )}


        <div style={{ paddingLeft: isCollapsed ? undefined : "10%" }}>
          <Item
            title="Dashboard"
            to="/dashboard"
            icon={<AiOutlineHome />}
          />
          <Item
            title="Profile"
            to="/profile"
            icon={<AiOutlineUser />}
          />
          <Item
            title="Courses"
            to="/courses"
            icon={<AiOutlineContacts />}
          />
          <Item
            title="Projects"
            to="/projects"
            icon={<AiOutlineFileText />}
          />
          <Item
            title="Calendar"
            to="/calendar"
            icon={<AiOutlineCalendar />}
          />
          <Item
            title="FAQ Page"
            to="/faq"
            icon={<AiOutlineQuestionCircle />}
          />
        </div>
        {!isCollapsed && <button className='signout-btn' onClick={() => setLoggedIn(false)}>Signout</button>}
        
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;