import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <header className="d-flex justify-content-between">
      <section className="d-flex align-items-center text-white gap-2">
        <img src="../images.png" alt="" className="logo"/>
        <h2>Client Dashboard</h2>
      </section>
      <section className="navigation">
        <nav className="navbar navbar-expand">
          <section className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
                      {/* <!-- Home --> */}
              <li className="nav-item">
                  <a className="nav-link" href="./client-dashboard.html">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <span className="icon"></span> Home
                  </a>
                  </li>
                      {/* <!-- Search Blood --> */}
                      <li className="nav-item">
                        <a className="nav-link" href="./client-dashboard.html">
                          <i className="fa fa-search" aria-hidden="true"></i>
                          <span className="icon"></span> Search Blood
                        </a>
                      </li>
                      {/* <!-- Logout --> */}
                      <li className="nav-item">
                        <a className="nav-link" href="./client-dashboard.html">
                          <i className="fa fa-sign-out" aria-hidden="true"></i>
                          <span className="icon"></span> Logout
                        </a>
                      </li>
                      {/* <!--Dropdown Menu--> */}
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-bars" aria-hidden="true"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                          <li>
                            <a className="dropdown-item" href="../Tracking/Tracking.html">
                            <i className="fa fa-truck" aria-hidden="true"></i>
                            <span className="icon"></span>Track Request</a></li>
                          <li>
                            <a className="dropdown-item" href="../Receipt/Receipt.html">
                            <i className="fa fa-sticky-note" aria-hidden="true"></i>
                            <span className="icon"></span>View Bills</a></li>
                          <li>
                            <a className="dropdown-item" href="../Feedback Form/Feedback.html">
                            <i className="fa fa-comments" aria-hidden="true"></i>
                            <span className="icon"></span>Feedback/Complaint Box</a></li>
                          <li>
                            <a className="dropdown-item" href="../Feedback Form/Feedback.html">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span className="icon"></span>Contact Us</a></li>
                          <li>
                            <a className="dropdown-item" href="../About Us/About Us.html">
                            <i className="fa fa-users" aria-hidden="true"></i>
                            <span className="icon"></span>About Us</a></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li>
                            <a className="dropdown-item" href="#">
                            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                            <span className="icon"></span>Become Vendor</a></li>
                          <li>
                            <a className="dropdown-item" href="#">
                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                            <span className="icon"></span>Admin</a></li>
                        </ul>
                      </li>
                    </ul>
                  </section>
              </nav>
            </section>
    </header>
  </>
  )
}

export default Header