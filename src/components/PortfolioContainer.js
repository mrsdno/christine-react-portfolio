import React, { useState } from "react";
import Nav from "./Nav/Nav";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Footer/Footer";
import Resume from "./Pages/Resume/Resume";

function PortforlioContainer() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }

    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }

    if (currentPage === "Contact") {
      return <Contact />;
    }

    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="page-wrapper">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default PortforlioContainer;
