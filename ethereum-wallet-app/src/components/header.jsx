import React from 'react';


export default function Header(){
    <header className="header">
        <a href="/">
            <img
            alt="yieldfiLogo"
            loading="lazy"
            width={97}
            height={28}
            decoding="async"
            className="header-logo"
            src="https://cdn.yield.fi/yfi/yieldfiLogo.svg"
            />
        </a>
        <div className="header-actions">
            <a className="header-link" href="/faucet">
            <li className="header-item">
                <img
                alt="faucetIcon"
                loading="lazy"
                width={18}
                height={18}
                decoding="async"
                className="icon"
                src="https://cdn.yield.fi/yfi/faucetIcon.svg"
                />
                <span>Faucet</span>
            </li>
            </a>
            <div aria-label="Toggle Sidebar" className="menu-toggle">
            <img
                alt="hamburgerMenu"
                loading="lazy"
                width={24}
                height={24}
                decoding="async"
                className="icon"
                src="https://cdn.yield.fi/yfi/hamburgerMenu.png"
            />
            </div>
        </div>
    </header>
}