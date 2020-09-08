import React from "react";

const items = [
  { label: "צור טבלה", link: "#chart" },
  { label: "ניהול משתמש", link: "#Manage" },
  { label: "סטטיסטיקה", link: "#Statistics" },
];

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
      <a className="navbar-brand justify-content-md-center" href="#">
        מתפ״ש
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              דף הבית<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              הגדרות
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              סטטיסטיקה
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ניהול משתמשים
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              צור טבלה
            </a>
          </li>
        </ul>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
}

export default NavBar;
