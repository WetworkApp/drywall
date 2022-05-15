import { BaseRoute } from "../def";
import { NavLink } from "solid-app-router";

export default {
    name: "Home",
    path: "/",
    component: () => {
        return (
            <div class="flex flex-col justify-center items-center text-center h-[90%]">
                <h1 class="text-4xl">Welcome to Wetwork.</h1>
                <h2 class="text-2xl">There's no functionality yet. Sorry!</h2>
                <p class="text-sm">(Until it's done, try going to <NavLink class="text-green-400" href="/chat/test-channel">the test channel</NavLink> to see some examples of what this client, Drywall, will look like!)</p>
            </div>
        );
    },
} as BaseRoute;