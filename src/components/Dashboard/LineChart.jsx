import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
} from "chart.js";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

const LineChart = () => {
    const [fontOptions, setFontOptions] = useState({
        family: "Montserrat",
        size: 14,
        weight: 500,
    });

    useEffect(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
            setFontOptions((prevOptions) => ({
                ...prevOptions,
                size: 12,
            }));
        }
    }, []);

    const state = {
        labels: [0, "Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Guest",
                lineTension: 0.5,
                backgroundColor: "#E9A0A0",
                borderColor: "#E9A0A0",
                pointRadius: 0,
                data: [200, 375, 210, 300, 225],
            },
            {
                label: "User",
                lineTension: 0.5,
                pointRadius: 0,
                backgroundColor: "#9BDD7C",
                borderColor: "#9BDD7C",
                data: [100, 400, 150, 450, 180],
            },
        ],
    };
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                align: "end",
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    color: "#000",
                    font: {
                        ...fontOptions,
                    },
                },
            },
        },
        scales: {
            x: {
                grid: { display: false },
            },
            y: {
                beginAtZero: true,
                min: 0,
                max: 500,
                suggestedMin: 200,
                ticks: { stepSize: 100 },
            },
        },
    };
    return (
        <div className="my-4 p-4 md:p-8 rounded-xl bg-white flex flex-col h-3/5 lg:h-3/4">
            <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
                Activities
            </h1>
            <p className="text-sm md:text-base flex items-center text-description cursor-pointer">
                May-June 2021 <ChevronDownIcon className="ml-2 w-4 h-4" />
            </p>
            <div className="h-full">
                <Line data={state} options={options} />
            </div>
        </div>
    );
};
export default LineChart;
