import React from 'react';
import DashboardMenu from "../components/dashboard/dashboardMenu";
import DashboardHeader from "../components/dashboard/dashboardHeader";
import {Outlet} from "react-router-dom";

const Dashboard = () => {
    let account = JSON.parse(localStorage.getItem('account'));
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <div className="main-wrapper">
                <DashboardMenu></DashboardMenu>
                <main className="main-content-wrapper">
                    <Outlet></Outlet>
                </main>
            </div>
            
        </div>
    );
};

export default Dashboard;