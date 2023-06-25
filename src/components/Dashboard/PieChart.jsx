import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
// import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
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

    const data = {
        labels: ["Basic Trees", "Custom Short Plants", "Super Hoodies"],
        datasets: [
            {
                data: [55, 14, 31],
                backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
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
        rotation: 180,
    };

    return (
        <div className="lg:w-[48%] my-4 p-6 bg-white rounded-xl">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
                <h1 className="md:text-2xl font-semibold tracking-wide">
                    Top Products
                </h1>
                <p className="text-sm md:text-base flex items-center text-description cursor-pointer">
                    May-June 2021 <ChevronDownIcon className="ml-2 w-4 h-4" />
                </p>
            </div>
            <div className="mt-4 h-60">
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default PieChart;
