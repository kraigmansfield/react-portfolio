import React from "react";
import Navigation from "../Navigation/";
import "./header.css"

function Header(props) {
    const {currentTab, setCurrentTab} = props;

    return (
        <header>
            <div className="title-header">
                <h2>Kraig's React Portfolio</h2>
            </div>
            <div>
                <Navigation
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                ></Navigation>
            </div>
        </header>
    );
}

export default Header;