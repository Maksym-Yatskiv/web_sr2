import React from "react";

export default function Sidebar({ menu }) {
    return (
        <aside className="sidebar">
            <div className="title">Меню</div>
            <div className="menu-contents">
                <nav className="nav">
                {menu.map((m, i) => (
                    <a key={i} href={m.slug}>
                    {m.label}
                    </a>
                ))}
                </nav>
            </div>
        </aside>
    );
}
