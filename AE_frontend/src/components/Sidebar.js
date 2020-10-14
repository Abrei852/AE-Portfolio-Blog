import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { SidebarWrapper } from "../elements/SidebarElements"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarWrapper isOpen={isOpen}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </SidebarWrapper>
  )
}

export default Sidebar
