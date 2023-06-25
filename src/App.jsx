import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/" Component={Login} />
        </Routes>
    );
}

export default App;
