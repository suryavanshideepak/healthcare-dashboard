import React from "react";
import './Sidebar.css'
import '../../styles/typography.css'
import { generalNavLinks, otherLinks, toolsNavLinks } from "../../data/navigationLinks";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav className="sidebar_nav">
                <h1 className="app_title text-xl"><span>Health</span>care.</h1>
                <div className="general_navlinks">
                    <h2 className="sidebar_heading text-xs">General</h2>
                    {
                        generalNavLinks.map((navItem, index) => {
                            const Icon = navItem.icon
                            return (
                                <a key={index} className={`sidebar_link text-sm ${index !== 0 ? 'disabled_link' : 'active_link'}`} href="#"><Icon className="nav_icon"/>{navItem.label}</a>
                            )
                        })
                    }
                </div>
                <div className="tools_navlinks">
                    <h2 className="sidebar_heading text-xs">Tools</h2>
                    {
                        toolsNavLinks.map((navItem, index) => {
                            const Icon = navItem.icon
                            return (
                                <a key={index} className={`sidebar_link text-sm disabled_link`} href="#"><Icon className="nav_icon"/>{navItem.label}</a>
                            )
                        })
                    }
                </div>
                <div className="setting_navlink">
                    {
                        otherLinks.map((navLinks, index) => {
                            const Icon = navLinks.icon
                            return (
                                <a href="#" key={index} className={`sidebar_link text-sm disabled_link`}><Icon className="nav_icon"/>{navLinks.label}</a>
                            )
                        })
                    }
                </div>
            </nav>
        </aside>
    )
}
export default Sidebar