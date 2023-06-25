import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/userSlice";

export default function SideBar() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginWithGoogle = useGoogleLogin({
        onSuccess: async (respose) => {
            try {
                const res = await axios.get(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: {
                            Authorization: `Bearer ${respose.access_token}`,
                        },
                    }
                );
                localStorage.setItem("user", JSON.stringify(res.data));
                dispatch(setUser(res.data));
                navigate("/dashboard", { replace: true });
            } catch (err) {
                console.log(err);
            }
        },
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes("@")) alert("Email invalid");
        else if (password.length < 8) alert("Password must be of 8 characters");

        dispatch(setUser({ email, password }));
        localStorage.setItem("user", JSON.stringify({ email, password }));
        navigate("/dashboard", { replace: true });
    };
    return (
        <>
            <div className="mx-auto p-10 lg:col-start-5 lg:col-span-3 flex flex-col justify-center text-sm md:text-base">
                <div className="my-2">
                    <h1 className="text-2xl md:text-4xl font-black text-gray-900">
                        Sign In
                    </h1>
                    <p className="mt-2 md:text-base font-semibold text-gray-900">
                        Sign in to your account
                    </p>
                </div>
                <div className="my-2">
                    <div className="flex gap-2 text-xs md:text-base">
                        <button
                            href="#"
                            className="inline-flex items-center py-2 px-4 rounded-lg shadow-sm bg-white font-medium text-gray-500 hover:bg-gray-50"
                            onClick={() => loginWithGoogle()}
                        >
                            <img
                                src="./google.png"
                                className="w-4 h-4"
                                alt=""
                            />
                            <span className="ml-4">Sign in with Google</span>
                        </button>

                        <button
                            href="#"
                            className="inline-flex items-center py-2 px-4 rounded-lg shadow-sm bg-white font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <img src="./apple.png" className="w-4 h-4" alt="" />
                            <span className="ml-4">Sign in with Apple</span>
                        </button>
                    </div>
                </div>

                <div className="my-4">
                    <div className="bg-white p-6 shadow rounded-lg">
                        <form className="" method="POST" autoComplete="off">
                            <div className="mb-2">
                                <label
                                    htmlFor="email"
                                    className="block font-semibold text-gray-700"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                        className="bg-primary1 appearance-none block w-full px-3 py-2 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>

                            <div className="my-2">
                                <label
                                    htmlFor="password"
                                    className="block font-semibold text-gray-700"
                                >
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                        className="bg-primary2 appearance-none block w-full px-3 py-2 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>

                            <div className="my-4">
                                <a
                                    href="#"
                                    className="font-semibold text-blue-600 hover:text-indigo-500"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm font-semibold text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                onClick={(e) => handleSubmit(e)}
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
                <p className="text-center text-xs md:text-base text-gray-600">
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-semibold text-blue-600 hover:text-blue-500"
                    >
                        Register here
                    </a>
                </p>
                <p className="py-2 text-center text-xs md:text-base text-red-600 flex">
                    <span>Note:</span> To access the dashboard page. Either
                    login with google or enter any email and password (atleast 8
                    characters)
                </p>
            </div>
        </>
    );
}
