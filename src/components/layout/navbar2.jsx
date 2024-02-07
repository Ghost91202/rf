// FancyNavigation.js
import React, { useEffect } from 'react';
import './Navbar.css'; // Create a separate CSS file for styling

const FancyNavigation = () => {
  // Path constants
  const PATH = {
    closeToggler: ".toggler-close",
    expandableNav: ".main-nav__expandable",
    navItem: ".main-nav__item",
    openToggler: ".toggler-open"
  };

  // Helper function to edit data attribute
  const editDataAttr = (elem, dataAttr, newVal) => {
    elem.dataset[dataAttr] = newVal;
  };

  // Helper function to set data attributes to navigation elements
  const setDataAtrsToNavElems = () => {
    const navElems = Array.from(document.querySelectorAll(PATH.navItem));

    navElems.forEach((elem, index) => {
      editDataAttr(elem, "addText", `0${index + 1}`);
    });
  };

  useEffect(() => {
    setDataAtrsToNavElems();

    // Event listener for opening and closing navigation
    const handleClick = (e) => {
      const target = e.target;

      if (target.closest(PATH.openToggler)) {
        const nav = document.querySelector(PATH.expandableNav);
        nav.classList.add("js-open");
      }

      if (target.closest(PATH.closeToggler)) {
        const nav = document.querySelector(PATH.expandableNav);
        nav.classList.remove("js-open");
      }
    };

    document.body.addEventListener("click", handleClick);

    // Cleanup event listener on component unmount
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav className="main-nav">
      <div className="container">
        <div className="main-nav__inner">
          {/* Logo block */}
          <a className="logo" href="#" title="Our Nice Logo">
            L
          </a>
          {/* Nav open button */}
          <button className="main-nav__toggler toggler-open" type="button" title="Open Menu">
            <div className="toggler-open__bar"></div>
            <div className="toggler-open__bar"></div>
            <div className="toggler-open__bar"></div>
          </button>
          {/* Nav expandable area */}
          <div className="main-nav__expandable">
            <div className="main-nav__expandable-inner">
              <div className="container">
                <div className="main-nav__expandable-content">
                  {/* Nav close btn */}
                  <button className="main-nav__toggler toggler-close" type="button" title="Close Menu"></button>
                  {/* Nav links list */}
                  <ul className="main-nav__list">
                    <li className="main-nav__item" data-add-text="data-add-text">
                      <a className="main-nav__link" href="#" title="Home">
                        <span className="main-nav__link-title">Home</span>
                        <span className="main-nav__link-descr">Return to a Home Page</span>
                      </a>
                    </li>
                    {/* Add more list items as needed */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FancyNavigation;
