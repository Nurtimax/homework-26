import React, { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import cls from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={cls.main}>{children}</main>
    </Fragment>
  );
};

export default Layout;
