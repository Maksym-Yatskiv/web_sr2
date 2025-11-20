import React from "react";

export default function Header({ siteTitle, menu }) {
    return (
        <header id="home" className="header">
            <div className="container header-inner">
                <div className="site-title">{siteTitle}</div>
            </div>
        </header>
    );
}
