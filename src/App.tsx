/* @refresh reload */
import { render } from "solid-js/web";
import { Router, useRoutes } from "solid-app-router";
import "virtual:windi.css";
import "virtual:windi-devtools";

import routesArray from "./routes";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import { getSetting, setupSettingsStore } from "./lib/settingsStore";
import { setTheme } from "./lib/themeUtils";

function App() {
    const Routes = useRoutes(routesArray);

    setupSettingsStore();
    setTheme(getSetting("darkMode"));

    return (
        <div class="font-body w-screen h-screen flex flex-row bg-light-50 dark:(bg-dark-100)">
            <Sidebar routes={routesArray}/>
            <div class="h-[98%] w-full my-auto rounded-tl-md rounded-bl-md p-2 shadow bg-light-400 shadow-light-400 text-dark-900 dark:(bg-dark-700 shadow-dark-700 text-light-50)">
                <Header/>
                <Routes/>
            </div>
        </div>
    );
};

render(() => <Router><App/></Router>, document.getElementById("root") as HTMLElement);