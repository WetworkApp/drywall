/* @refresh reload */
import { render } from "solid-js/web";
import { Router, useRoutes } from "solid-app-router";
import "virtual:windi.css";
import "virtual:windi-devtools";

import routesArray from "./routes";
import Sidebar from "./components/Sidebar";

function App() {
    const Routes = useRoutes(routesArray);

    return (
        <div class="font-body w-screen h-screen flex flex-row bg-light-50 dark:(bg-dark-50)">
            <Sidebar routes={routesArray}/>
            <div class="h-[98%] w-full my-auto rounded-tl-md rounded-bl-md p-2 bg-light-400 dark:(bg-dark-100)">
                <Routes/>
            </div>
        </div>
    );
};

render(() => <Router><App/></Router>, document.getElementById("root") as HTMLElement);