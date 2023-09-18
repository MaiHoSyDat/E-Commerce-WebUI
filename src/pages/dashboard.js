import React from 'react';
import DashboardMenu from "../components/dashboard/dashboardMenu";
import DashboardHeader from "../components/dashboard/dashboardHeader";
import {Outlet} from "react-router-dom";

import DashboardMenuEmployee from "../components/dashboard/dashboardMenuEmployee";

const Dashboard = () => {
    let account = JSON.parse(localStorage.getItem('account'));
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <div className="main-wrapper">
                {account && account.role.name === "ROLE_ADMIN" && <DashboardMenu></DashboardMenu>}
                {account && account.role.name === "ROLE_EMPLOYEE" && <DashboardMenuEmployee></DashboardMenuEmployee>}
                <main className="main-content-wrapper">
                    <Outlet></Outlet>
                </main>
            </div>
            
        </div>
    );
};

export default Dashboard;