import "./app.css";
import React, { useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return <About/>;
      case "portfolio":
        return <Portfolio/>;
      case "contact":
        return <Contact/>;
      default: 
        return null;

    }
  };

  return (
    <div>
      <div className="header">
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      </div>
      <div>
        <main>{renderTab()}</main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App;
