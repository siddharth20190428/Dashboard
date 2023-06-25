import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { removeUser } from "../../redux/userSlice";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const user = useSelector((state) => state.user.value);
    console.log(user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
        if (user.email_verified) googleLogout();
        localStorage.removeItem("user");
        dispatch(removeUser());
        navigate("/", { replace: true });
    };
    return (
        <nav className="flex justify-between items-center">
            <h1 className="text-2xl lg:text-4xl font-semibold tracking-normal">
                Dashboard
            </h1>
            <div className="flex items-center w-2/3 lg:w-2/5 justify-end md:justify-around gap-2">
                <div className="relative hidden md:block rounded-md shadow-sm">
                    <input
                        type="search"
                        name="search"
                        id="search"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-3 py-2 text-sm border-gray-100 rounded-lg"
                        placeholder="Search..."
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </div>
                </div>
                <BellIcon
                    className="h-6 w-6 hidden md:block"
                    aria-hidden="true"
                />

                {user ? (
                    <>
                        <img
                            className="h-8 w-8 rounded-full hidden md:block"
                            src={
                                user && user.picture
                                    ? user.picture
                                    : "./profile.svg"
                            }
                            alt=""
                        />
                        <button
                            className="border-2 py-2 px-2 rounded-lg bg-white"
                            onClick={() => handleLogOut()}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <button
                        className="border-2 py-2 px-2 rounded-lg bg-white"
                        onClick={() => navigate("/", { replace: true })}
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
