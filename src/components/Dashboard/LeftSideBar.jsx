import {
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    TagIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const LeftSideBar = () => {
    const navigation = [
        {
            name: "Dashboard",
            to: "#",
            icon: ChartPieIcon,
            current: true,
        },
        {
            name: "Transactions",
            to: "#",
            icon: TagIcon,
            current: false,
        },
        {
            name: "Schedules",
            to: "#",
            icon: CalendarIcon,
            current: false,
        },
        {
            name: "Users",
            to: "#",
            icon: UserCircleIcon,
            current: false,
        },
        {
            name: "Settings",
            to: "#",
            icon: Cog6ToothIcon,
            current: false,
        },
    ];
    return (
        <aside className="hidden sticky left-0 top-0 w-1/3 lg:w-1/5 p-8 h-full md:flex flex-col justify-between bg-black border-2 rounded-2xl">
            <div className="">
                <h1
                    className="text-2xl md:text-4xl mb-8 font-black text-neutral-50"
                    style={{ fontweight: 700, fontsize: "36px" }}
                >
                    Board.
                </h1>

                {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.to}
                        className={classNames(
                            item.current ? "font-bold" : "font-medium",
                            "group flex items-center mb-6 tracking-wide text-sm lg:text-md text-white rounded-md"
                        )}
                    >
                        <item.icon className="mr-3 h-6 w-6 " />
                        {item.name}
                    </a>
                ))}
            </div>
            <div className="flex flex-col text-sm lg:text-md">
                <a
                    href="#"
                    className="tracking-wide mb-2 text-white font-thin rounded-md"
                >
                    Help
                </a>
                <a
                    href="#"
                    className="tracking-wide mb-2 text-white font-thin rounded-md"
                >
                    Contact Us
                </a>
            </div>
        </aside>
    );
};

export default LeftSideBar;
