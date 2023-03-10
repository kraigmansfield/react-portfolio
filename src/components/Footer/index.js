import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="row">
                <div className="column">
                <a
                    href="https://github.com/kraigmansfield"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img  
                        src={require("../../assets/images/github-logo.png")}
                        alt="Github"
                        className="logo"
                    ></img>
                </a>
                </div>
            </div>
            <div className="row">
                <div className="column">
                <a
                    href="https://www.linkedin.com/in/kraig-mansfield/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img  
                        src={require("../../assets/images/linkedin-logo.png")}
                        alt="LinkedIn"
                        className="logo"
                    ></img>
                </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;