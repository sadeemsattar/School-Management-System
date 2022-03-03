import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";

import Header from "../component/Header/Header.js";
import { CssBaseline, makeStyles } from "@material-ui/core";

import FindInPageIcon from "@material-ui/icons/FindInPage";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PrintIcon from "@material-ui/icons/Print";
import { Outlet } from "react-router-dom";

const useStyles = makeStyles({
  appHeader: {
    paddingLeft: "320px",
    width: "100%",
  },
});
export default function AdminDashBoard() {
  const classes = useStyles();

  const menuItems = [
    {
      text: "Add Student",
      path: "student-add",
      icon: <PersonAddIcon color="#69F0AE" />,
    },

    {
      text: "View / Update Student",
      path: "student-view-update",
      icon: <FindInPageIcon color="#69F0AE" />,
    },
    {
      text: "Add Fee Detail",
      path: "fees-detail",
      icon: <AddCircleIcon color="#69F0AE" />,
    },
    {
      text: "Manage Fees",
      path: "fees-manage",
      icon: <AddCircleIcon color="#69F0AE" />,
    },
    {
      text: "Print Challan",
      path: "PrintChallan",
      icon: <PrintIcon color="#69F0AE" />,
    },
  ];

  return (
    <>
      <Sidebar menuItems={menuItems} />
      <div className={classes.appHeader}>
        <Header />

        <Outlet />
      </div>

      <CssBaseline />
    </>
  );
}
