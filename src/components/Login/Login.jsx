import RightSideBar from "./RightSideBar";

const Login = () => {
    return (
        <div className="lg:grid lg:grid-cols-8 h-screen">
            <div className="bg-black lg:col-span-3 lg:h-screen flex justify-center items-center">
                <h1 className="p-4 text-white text-4xl font-extrabold md:text-6xl">
                    Board.
                </h1>
            </div>
            <RightSideBar />
        </div>
    );
};

export default Login;
