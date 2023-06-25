import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Agenda = ({ color, title, time, location }) => {
    return (
        <div className="flex my-4">
            <div className={`w-2 mr-4 h-18 ${color}`}></div>
            <div className="">
                <p className="text-heading font-semibold">{title}</p>
                <p className="text-description font-medium">{time}</p>
                <p className="text-description font-medium">{location}</p>
            </div>
        </div>
    );
};

const Schedule = () => {
    return (
        <div className="my-4 bg-white lg:w-[48%] p-6 rounded-xl flex flex-col justify-between">
            <div className="flex flex-row justify-between">
                <div className="md:text-xl font-extrabold  ">
                    Today's schedule
                </div>
                <span className="flex items-center text-description cursor-pointer">
                    See all <ChevronRightIcon className="ml-1 w-4 h-4" />
                </span>
            </div>
            <div className="my-4">
                <Agenda
                    color="bg-[#9BDD7C]"
                    title="Meetings with suppliers from Kuta Bali"
                    time="14:00 - 15:00"
                    location="at Sunset Road,Kuta,Bali"
                />
                <Agenda
                    color="bg-[#6972C3]"
                    title="Check Operations at Giga Factory 1"
                    time="18:00 - 20:00"
                    location="at Central Jakarta"
                />
            </div>
        </div>
    );
};

export default Schedule;
