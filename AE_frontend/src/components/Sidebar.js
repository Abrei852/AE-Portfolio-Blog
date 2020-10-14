import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { SidebarWrapper } from "../elements/SidebarElements"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarWrapper isOpen={isOpen} toggleSidebar={toggleSidebar}>
      <button onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div>
        <Links toggleSidebar={toggleSidebar} />
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </SidebarWrapper>
  )
}

export default Sidebar
