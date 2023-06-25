import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <GoogleOAuthProvider clientId="45251218369-66q79v27fu86it0gs0jmttmlp60t6cgb.apps.googleusercontent.com">
                    <App />
                </GoogleOAuthProvider>
            </Router>
        </Provider>
    </React.StrictMode>
);
