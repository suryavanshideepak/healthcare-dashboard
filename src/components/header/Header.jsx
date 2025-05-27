import React from "react";
import './Header.css'
import Avatar from "../avatar/Avatar";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header_content">
                    <div className="search-bar">
                        <div className="search-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-input"
                        />
                        <div className="bell-icon">
                            🔔
                        </div>
                    </div>
                    <div className="header-avt">
                        <div className="logo-header">
                            <h1 className="app_title text-xl"><span>Health</span>care.</h1>
                        </div>
                        <div className="header-avatar">
                            <Avatar/>
                            <button className="add-button">+</button> 
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;