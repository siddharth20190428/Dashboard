import {
    ArrowDownOnSquareIcon,
    TagIcon,
    HandThumbUpIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const Card = (props) => {
    return (
        <div
            className={`w-[48%] md:w-[21%] lg:w-[24%] h-20 md:h-24 ${props.color} border-2 mt-6 rounded-2xl py-2 px-4 md:px-2 lg:px-4 flex flex-row-reverse md:flex-col justify-between items-center md:items-start`}
        >
            <props.icon className="w-6 h-8 font-black md:self-end" />
            <div>
                <h6 className="text-xs lg:text-sm">{props.title}</h6>
                <h1 className="font-bold text-sm lg:font-extrabold tracking-wider lg:text-xl">
                    {props.value}
                </h1>
            </div>
        </div>
    );
};
const Cards = () => {
    // fetch("./")
    // const [data, setData] = useState([]);
    // useEffect(async () => {
    //     const data = await fetch("./data.json").then((res) => res.json());
    //     console.log(data);
    //     // setData(data);
    // }, []);
    return (
        <div className="flex flex-row flex-wrap pb-4 justify-between lg:h-40 w-full ">
            <Card
                icon={ArrowDownOnSquareIcon}
                title="Total Revenues"
                value="$2,129,430"
                color="bg-revenue"
            />
            <Card
                icon={TagIcon}
                title="Total Transactions"
                value="1,520"
                color="bg-transactions"
            />
            <Card
                icon={HandThumbUpIcon}
                title="Total Likes"
                value="9721"
                color="bg-likes"
            />
            <Card
                icon={UsersIcon}
                title="Total Users"
                value="892"
                color="bg-users"
            />
        </div>
    );
};

export default Cards;
