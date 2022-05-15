import { BaseRoute } from "../def";

import { createEffect } from "solid-js";

import Button from "../components/Button";
import { setTheme } from "../lib/themeUtils";
import { createReactiveSetting } from "../lib/settingsUtils";

export default {
    name: "Settings",
    path: "/settings",
    component: () => {
        const [darkMode, setDarkMode] = createReactiveSetting("darkMode");
        createEffect(() => setTheme(darkMode()));

        return (
            <div>
                <h1 class="text-2xl">Theme</h1>
                <Button onClick={() => { setDarkMode(!darkMode()) }}>Switch to {!darkMode() ? "Light" : "Dark"} mode</Button>
            </div>
        );
    },
} as BaseRoute;