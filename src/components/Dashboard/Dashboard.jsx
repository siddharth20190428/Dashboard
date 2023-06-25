import React, { useEffect } from "react";
import LeftSideBar from "./LeftSideBar";
import LineChart from "./LineChart";
import Navbar from "./Navbar";
import Card from "./Card";
import PieChart from "./PieChart";
import Schedule from "./Schedule";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const user = useSelector((state) => state.user.value);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) navigate("/", { replace: true });
    }, []);
    return (
        <div className="h-screen">
            <h1 className="sticky top-0 left-0 w-full p-4 bg-black text-center text-white text-4xl font-extrabold md:hidden md:text-6xl">
                Board.
            </h1>
            <div className="h-[85%] md:h-full p-4 lg:p-8 flex justify-between ">
                <LeftSideBar />

                <section className="lg:px-16 px-4 flex-1 overflow-y-auto overflow-x-hidden">
                    <Navbar />
                    <Card />
                    <LineChart />
                    <div className="lg:flex lg:justify-between">
                        <PieChart />
                        <Schedule />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
