import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import { useHistory } from "react-router-dom";

const SideNav = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const history = useHistory();

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  
  const handleHome = () => {
    history.push("/")
  }
  const handleTransportation = () => {
    history.push("/transportation")
  }
  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/login")
  }

  return (
    <>
      <div id="Sidenav">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="d-flex p-3 justify-content-between">
              <p>{menuCollapse ? "Admin" : "Admin"}</p>
              <div className="closemenu" onClick={menuIconClick}>
                {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FiHome />} onClick={handleHome}>Home</MenuItem>
              <MenuItem icon={<FaList />} onClick={handleTransportation}>Transportation</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Teacher's section</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Parent's section</MenuItem>
              <MenuItem icon={<BiCog />}>Student's section</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideNav;
