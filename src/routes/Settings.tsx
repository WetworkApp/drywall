import { BaseRoute } from "../def";

import { createSignal } from "solid-js";

import Button from "../components/Button";
import { setTheme } from "../lib/themeUtils";
import { getSetting, setSetting } from "../lib/settingsStore";

export default {
    name: "Settings",
    path: "/settings",
    component: () => {
        const [darkMode, setDarkMode] = createSignal(getSetting("darkMode"));

        return (
            <div>
                <h1 class="text-2xl">Theme</h1>
                <Button onClick={() => { setDarkMode(!darkMode()); setSetting("darkMode", darkMode()); setTheme(getSetting("darkMode")) }}>Switch to {darkMode() ? "Light" : "Dark"} mode</Button>
            </div>
        );
    },
} as BaseRoute;