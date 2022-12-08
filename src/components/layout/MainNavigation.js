import React from "react";
import { NavLink } from "react-router-dom";
import cls from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={cls.header}>
      <div className={cls.logo}>Create Quotes</div>
      <nav className={cls.nav}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? cls.active : null)}
              to="/quotes"
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? cls.active : null)}
              to="/new-quotes"
            >
              Add new Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
