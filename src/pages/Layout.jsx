import React from "react";
import { Outlet } from "react-router-dom";
import AppLogic from "./AppLogic";
import HomePage from "./HomePage";

export default function Layout({toggle, toggleNav, avengers, setTopAvengerFromSearch}) {
    return (
        <div>
            <AppLogic toggle={toggle} toggleNav={toggleNav} avengers={avengers} setTopAvengerFromSearch={setTopAvengerFromSearch} />
            <Outlet />
        </div>
    )
}