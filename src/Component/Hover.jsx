import React from "react";
import "./Hover.css";
function Hover() {
  return (
    <>
      <div className="container">
        {/* off canvas start*/}
        <button
          id="tog"
          className="btn btn-black ms-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        >
          <button type="button" className="btn-close " aria-label="Close" />
        </button>

        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex={-1}
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
              Colored with scrolling
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <div
              id="i"
              className="asi col-sm-6 col-md-5 d-flex     justify-content-center"
            >
              <aside className="nav-asi  pt-5 pb-5 h-100 position-fixed sidebar-bg ">
                <div className="obj">
                  <div className="test m-auto">
                    <img
                      className="img rounded-circle  mb-5"
                      src="..\..\Assets\Images\Fel.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h1 className="fw-bold">Felix C</h1>
                    <br />
                    <p className="fs-7">PYTHON FULLSTACK DEVELOPER</p>
                  </div>
                  <div className=" ">
                    <nav
                      id="colorlib-main-menu"
                      classname="navbar "
                      role="navigation"
                    >
                      <div id="navbar">
                        <ul classname="navbar-nav text-center ml-3 justify-content-center">
                          <li classname="nav-item ">
                            <p
                              classname="active hvr-underline-from-center ml-5 fs-4 "
                              href
                            >
                              Home
                            </p>
                          </li>
                          <li classname="nav-item ">
                            <p
                              classname="active hvr-underline-from-center ml-5 fs-4 "
                              href
                            >
                              About
                            </p>
                          </li>
                          <li classname="nav-item ">
                            <p
                              classname="active hvr-underline-from-center fs-4 ml-5"
                              href
                            >
                              Skills
                            </p>
                          </li>
                          <li classname="nav-item ">
                            <p
                              classname="active hvr-underline-from-center fs-4 ml-5"
                              href="colorlib-education"
                            >
                              Education
                            </p>
                          </li>
                          <li classname="nav-item ">
                            <p
                              classname="active hvr-underline-from-center fs-4 ml-5"
                              href
                            >
                              Contact
                            </p>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* off  */}
        <div className="row ">
          <div
            id="i"
            className="asi col-sm-6 col-md-5 d-flex     justify-content-center"
          >
            <aside className="  pt-5 pb-5 h-100 position-fixed sidebar-bg as">
              <div className="obj">
                <div className="test m-auto">
                  <img
                    className="img rounded-circle  mb-5"
                    src="..\..\Assets\Images\Fel.jpg"
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h1 className="fw-bold">Felix C</h1>
                  <br />
                  <p className="fs-7">PYTHON FULLSTACK DEVELOPER</p>
                </div>
                <div className=" ">
                  <nav
                    id="colorlib-main-menu"
                    classname="navbar "
                    role="navigation"
                  >
                    <div id="navbar">
                      <ul classname="navbar-nav text-center ml-3">
                        <li classname="nav-item fs-4">
                          <p
                            classname="active hvr-underline-from-center ml-5 fs-4 "
                            href
                          >
                            Home
                          </p>
                        </li>
                        <li classname="nav-item ">
                          <p
                            classname="active hvr-underline-from-center ml-5 fs-4 "
                            href
                          >
                            About
                          </p>
                        </li>
                        <li classname="nav-item ">
                          <p
                            classname="active hvr-underline-from-center fs-4 ml-5"
                            href
                          >
                            Skills
                          </p>
                        </li>
                        <li classname="nav-item ">
                          <p
                            classname="active hvr-underline-from-center fs-4 ml-5"
                            href="colorlib-education"
                          >
                            Education
                          </p>
                        </li>
                        <li classname="nav-item ">
                          <p
                            classname="active hvr-underline-from-center fs-4 ml-5"
                            href
                          >
                            Contact
                          </p>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </aside>
          </div>
          <div className=" col-sm-6 col-md-7 text-start ">
            <div className="row   ">
              <div className="text-star col-5 mt-5">
                <h1 className="mt-5  fw-bolder text-nowrap hi">
                  Hi!
                  <br /> I am
                  <br /> Felix
                </h1>
              </div>
              <div className="col-7">
                <img
                  className="img-fluid "
                  src="..\..\Assets\Images\F.png"
                  alt=""
                />
              </div>
            </div>
            <br />
            <br />
            <div className="row ">
              <div className="col ">
                <span className="color: #999999;" style={{ color: "#999999" }}>
                  About Me
                </span>
                <br />
                <br />
                <h3 className="">WHO AM I?</h3>
                <br />
                <br />

                <p className="ptags text-start lh-lg fs-4">
                  <strong>Hi I'm Felix </strong>I am coming from kallakurichi
                  currently staying in babusapalya Bangalore.I am a B.Sc
                  graduate specialized in computer science at Thiruvalluvar
                  University in Don Bosco College of arts and
                  science.Additionally i have done a Python Full Stack course in
                  Bosco Soft technologies at yelagir. Along with my course I
                  have done a project named Supermarket Online Shopping.My
                  skills are Python, React Js, Django, Html CSS,
                  JavaScript,Bootstrap, RestApi
                </p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="">
                <span className="color: #999999;" style={{ color: "#999999" }}>
                  My Speciality
                </span>
                <br />
                <br />
                <h3 className="">MY SKILLS</h3>
                <br />
                <br />
                <br />
              </div>
              <div className="col-3 im  a">
                {/* <ion-icon name="logo-python"></ion-icon> */}
                <img
                  className="img-fluid "
                  src="..\..\Assets\Images\Python.png"
                  alt=""
                />
              </div>
              <div className="a col-3 im  ">
                {/* <ion-icon name="logo-react"></ion-icon> */}
                <img
                  className="img-fluid "
                  src="..\..\Assets\Images\React.png"
                  alt=""
                />
              </div>
              <div className="col-3 im  a">
                {/* <ion-icon className="h-25 w-25" name="logo-html5"></ion-icon> */}
                <img
                  className="img-fluid "
                  src="..\..\Assets\Images\django.png"
                  alt=""
                />
              </div>
              <div className="col-3 im  a">
                {/* <ion-icon name="logo-css3"></ion-icon> */}
                <img
                  className="img-fluid "
                  src="..\..\Assets\Images\HTML.png"
                  alt=""
                />
              </div>
              <div className="col-3 im  a">
                {/* <ion-icon name="logo-javascript"></ion-icon> */}
                <img
                  className="img-fluid "
                  src="..\..\Assets\Images\C.png"
                  alt=""
                />
              </div>
              <div className="col-3 im  a">
                {/* <ion-icon name="logo-javascript"></ion-icon> */}
                <img
                  className="img-fluid"
                  src="..\..\Assets\Images\J.png"
                  alt=""
                />
              </div>
              <div className="col-3 im a">
                {/* <ion-icon name="logo-javascript"></ion-icon> */}
                <img
                  className="img-fluid "
                  src="..\..\Assets\Images\B.png"
                  alt=""
                />
              </div>
              <div className="col-3 im  a">
                {/* <ion-icon name="logo-javascript"></ion-icon> */}
                <img
                  className="img-fluid "
                  src="..\..\Assets\Images\api.webp"
                  alt=""
                />
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="row">
              <div className="">
                <span className="" style={{ color: "#999999" }}>
                  Education
                </span>
                <br />
                <br />
                <h3 className="">Education </h3>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hover;
