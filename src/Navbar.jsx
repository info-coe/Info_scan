import React, { useState } from "react";
import InfoLogo from "./Images/company-logo.png";
import SideNavbar from "./SideNavbar";

const Navbar = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [dropdownState, setDropdownState] = useState({
    aboutus: false,
    industries: false,
    services: false,
    cloud: false,
    solutions: false,
    careers: false,
  });

  const handleHover = () => {
    setIsRotated(!isRotated);
  };

  const handleDropdownMouseEnter = (dropdown) => {
    setDropdownState((prevState) => ({ ...prevState, [dropdown]: true }));
  };

  const handleDropdownMouseLeave = (dropdown) => {
    setDropdownState((prevState) => ({ ...prevState, [dropdown]: false }));
  };

  const handleaClick = () => {
    setDropdownState({
      aboutus: false,
      industries: false,
      services: false,
      cloud: false,
      solutions: false,
      careers: false,
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light sticky-top scrolled">
        <div className="container-fluid">
          <div className="d-flex align-items-center gap-4 ps-lg-5 ms-lg-5 ps-2">
            <span
              className="toggle"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i className="bi bi-text-left"></i>
            </span>
            <div className="d-none d-lg-block">
              {/* <InfoLogo logosrc={data.logo} /> */}
              <img
                src={InfoLogo}
                alt="Logo"
                width="120"
                height="55"
                className="bg-white"
              />
            </div>
          </div>
          <div
            className="collapse navbar-collapse d-flex justify-content-center d-none d-lg-block"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav d-flex gap-2">
              <li className="nav-item">
                <span>
                <a className="nav-link " href="https://infomericainc.com/" id="homelink">
                  HOME
                </a>
                </span>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownMouseEnter("aboutus")}
                onMouseLeave={() => handleDropdownMouseLeave("aboutus")}
              >
                <span>
                <a
                //   className="nav-link"
                 className={`nav-link  ${dropdownState.aboutus ? "text-red" : ""}`}
                  href="https://infomericainc.com/About-Infomerica"
                  id="aboutusDropdown"
                  role="button"
                  aria-expanded="false"
                  onClick={handleaClick}
                >
                  ABOUT US
                </a>
                </span>
                <ul
                  className={`dropdown-menu ${dropdownState.aboutus ? "show" : ""}`}
                  aria-labelledby="aboutusDropdown"
                >
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Infomerica-Vision"
                      onClick={handleaClick}
                    >
                      Vision
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Infomerica-Mission"
                      onClick={handleaClick}
                    >
                      Mission
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownMouseEnter("industries")}
                onMouseLeave={() => handleDropdownMouseLeave("industries")}
              >
                <span id="industriesDropdown" className={`nav-link  ${dropdownState.industries ? "text-red" : ""}`}>INDUSTRIES</span>
                <ul
                  className={`dropdown-menu  ${
                    dropdownState.industries ? "show" : ""
                  }`}
                  aria-labelledby="industriesDropdown"
                >
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Manufacturing-Automotive"
                      onClick={handleaClick}
                    >
                      Manufacturing & Automotive
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Energy-Utilities"
                      onClick={handleaClick}
                    >
                      Energy & Utilities
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Banking-Insurance-Services"
                      onClick={handleaClick}
                    >
                      Banking & Insurance Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Healthcare-LifeSciences"
                      onClick={handleaClick}
                    >
                      Healthcare & Life Sciences
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Media-Telecom"
                      onClick={handleaClick}
                    >
                      Media & Telecom
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Airline-Travel-Logistics"
                      onClick={handleaClick}
                    >
                      Airline / Travel / Logistics
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Consumer-Retail"
                      onClick={handleaClick}
                    >
                      Consumer & Retail
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownMouseEnter("services")}
                onMouseLeave={() => handleDropdownMouseLeave("services")}
              >
                <a
                   className={`nav-link  ${dropdownState.services ? "text-red" : ""}`}
                  href="https://infomericainc.com/Services"
                  id="servicesDropdown"
                  role="button"
                  aria-expanded="false"
                  onClick={handleaClick}
                >
                  SERVICES
                </a>
                <ul
                  className={`dropdown-menu ${
                    dropdownState.services ? "show" : ""
                  }`}
                  aria-labelledby="servicesDropdown"
                >
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/CRM"
                      onClick={handleaClick}
                    >
                      Customer Relationship Management (CRM)
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Digital-Transformation-Services"
                      onClick={handleaClick}
                    >
                      Digital Transformation Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Security-Architecture"
                      onClick={handleaClick}
                    >
                      Security Architecture
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Application-Services"
                      onClick={handleaClick}
                    >
                      Application Services
                    </a>
                  </li>
                  <li
                    className="nav-item dropdown"
                    onMouseEnter={() => handleDropdownMouseEnter("cloud")}
                    onMouseLeave={() => handleDropdownMouseLeave("cloud")}
                  >
                    <div
                      className="dropdown-item lineAnimation"
                      id="cloudDropdown"
                    >
                      <span className="d-flex justify-content-between">
                        <span>Cloud</span>
                        <span>
                          <i className="bi bi-chevron-compact-right"></i>
                        </span>
                      </span>
                    </div>
                    <ul
                      className={`dropdown-menu ${
                        dropdownState.cloud ? "show" : ""
                      }`}
                      aria-labelledby="cloudDropdown"
                    >
                      <li>
                        <a
                          className="dropdown-item lineAnimation"
                          href="https://infomericainc.com/Cloud-Services"
                          onClick={handleaClick}
                        >
                          Cloud Services
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item lineAnimation"
                          href="https://infomericainc.com/AWS-Services"
                          onClick={handleaClick}
                        >
                          AWS Services
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item lineAnimation"
                          href="https://infomericainc.com/Microsoft-Cloud-Services"
                          onClick={handleaClick}
                        >
                          Microsoft Cloud Services
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item lineAnimation"
                          href="https://infomericainc.com/Microsoft365"
                          onClick={handleaClick}
                        >
                          Microsoft 365
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Data-Services"
                      onClick={handleaClick}
                    >
                      Data Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Internet-Of-Things"
                      onClick={handleaClick}
                    >
                      Internet Of Things
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Testing-QA-Services"
                      onClick={handleaClick}
                    >
                      Business Assurance & Testing
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Enterprise-Portal"
                      onClick={handleaClick}
                    >
                      Enterprise Portal
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Service-Oriented-Architecture"
                      onClick={handleaClick}
                    >
                      Service Oriented Architecture
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Free-POC-POT"
                      onClick={handleaClick}
                    >
                      Free Poc & Pot
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Software-Sales"
                      onClick={handleaClick}
                    >
                      Software Sales
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownMouseEnter("solutions")}
                onMouseLeave={() => handleDropdownMouseLeave("solutions")}
              >
                <span id="solutionsDropdown"   className={`nav-link  ${dropdownState.solutions ? "text-red" : ""}`}>SOLUTIONS</span>
                <ul
                  className={`dropdown-menu ${
                    dropdownState.solutions ? "show" : ""
                  }`}
                  aria-labelledby="solutionsDropdown"
                >
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Robotic-Automation-Process"
                      onClick={handleaClick}
                    >
                      Robotic Automation Process
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Oracle-Cloud"
                      onClick={handleaClick}
                    >
                      Oracle Cloud
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/SAP"
                      onClick={handleaClick}
                    >
                      SAP
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/CRM"
                      onClick={handleaClick}
                    >
                      CRM
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Mobility"
                      onClick={handleaClick}
                    >
                      Mobility
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Business-Process-Services"
                      onClick={handleaClick}
                    >
                      Business Process Management
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/DevOps"
                      onClick={handleaClick}
                    >
                      DevOps
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Service-Oriented-Architecture"
                      onClick={handleaClick}
                    >
                      Service Oriented Architecture
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://infomericainc.com/Contact"
                  id="contactlink"
                  onClick={handleaClick}
                >
                  CONTACT US
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://infomericainc.com/CSR"
                  id="csrlink"
                  onClick={handleaClick}
                >
                  CSR
                </a>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownMouseEnter("careers")}
                onMouseLeave={() => handleDropdownMouseLeave("careers")}
              >
                <a
                  className={`nav-link  ${dropdownState.careers ? "text-red" : ""}`}
                  href="https://infomericainc.com/Careers"
                  id="careersDropdown"
                  role="button"
                  aria-expanded="false"
                  onClick={handleaClick}
                >
                  CAREERS
                </a>
                <ul
                  className={`dropdown-menu ${
                    dropdownState.careers ? "show" : ""
                  }`}
                  aria-labelledby="careersDropdown"
                >
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Careers-Hyd"
                      onClick={handleaClick}
                    >
                      Hyderabad
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item lineAnimation"
                      href="https://infomericainc.com/Careers-Banglore"
                      onClick={handleaClick}
                    >
                      Bangalore
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Offcanvas start */}
      <div
        className="offcanvas slide offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header d-flex justify-content-between">
          {/* <InfoLogo logosrc={data.logo} /> */}
          <img
            src={InfoLogo}
            alt="Logo"
            width="120"
            height="60"
            className="bg-white"
          />
          <i
            className={`bi bi-x-circle-fill fs-3 btnClose ${
              isRotated ? "rotate" : ""
            }`}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ cursor: "pointer" }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          ></i>
        </div>
        <div className="offcanvas-body">
          <SideNavbar />
        </div>
      </div>
      {/* Offcanvas end */}
    </>
  );
};

export default Navbar;
