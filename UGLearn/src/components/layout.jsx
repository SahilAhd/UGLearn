import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../styles/layout.css";
import axios from "axios";
import { toast } from "react-toastify";
import { FaBell } from "react-icons/fa";
import logo from "/assets/logo.png";

const Layout = () => {
  const redirect = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    (async () => {
      await axios
        .get("/api/dashboard/")
        .then((res) => {
          setUsername(res.data.username);
          setRole(res.data.role);
        })
        .catch((err) => {
          toast.error(err.response.data);
          redirect("/signin", { replace: true });
        });
    })();
  }, []);

  const handleSignout = async () => {
    await axios
      .get("/api/signout")
      .then((res) => {
        toast.success(res.data);
        redirect("/", { replace: true });
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  return (
    <div className="layout">
      <header>
        <div id="start">
          <div className="hamburger" onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link to="/dashboard">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "2.5rem", paddingTop: "6px" }}
            />
          </Link>
        </div>
        <div id="end">
          <Link to="/notifications" style={{ paddingTop: "6px" }}>
            <FaBell className="notify" />
          </Link>
          <div className="profile-dropdown" onClick={toggleDropdown}>
            <span>{username}</span>
            <div className={`profile-menu ${dropdown ? "expand" : ""}`}>
              <Link to="/dashboard/profile" className="profile-option">
                View Profile
              </Link>
              <Link to="/dashboard/profile" className="profile-option">
                Edit Profile
              </Link>
              <Link to="/dashboard/profile" className="profile-option">
                Change Password
              </Link>
              <button className="profile-option" onClick={handleSignout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li className="underline-animation">
                <Link to="/dashboard" className="dash-links">
                  Dashboard
                </Link>
              </li>
              <li className="underline-animation">
                <Link to="/analytics" className="dash-links">
                  My Analytics
                </Link>
              </li>
              <li className="underline-animation">
                <Link to="/courses" className="dash-links">
                  Check courses
                </Link>
              </li>
              <li className="underline-animation">
                <Link to="/doubt" className="dash-links">
                  Doubt Solving
                </Link>
              </li>
              <li className="underline-animation">
                <Link to="/test" className="dash-links">
                  Test & Results
                </Link>
              </li>
              <li className="underline-animation">
                <Link to="/timetable" className="dash-links">
                  Time-Table
                </Link>
              </li>
              <li className="underline-animation">
                <Link to="/classes" className="dash-links">
                  Live classes
                </Link>
              </li>
              <li className="underline-animation">
                <Link to="/support" className="dash-links">
                  Support
                </Link>
              </li>
              <li className="underline-animation">
                <Link to="/contact" className="dash-links">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
