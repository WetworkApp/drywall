import { defineConfig } from "windicss/helpers";

export default defineConfig({
    darkMode: "class",
    theme: {
        extend: {
            transitionProperty: {
                "filter": "filter"
            },
        },
        fontFamily: {
            body: ["Inter"],
            mono: ["IBM Plex Mono", "monospace"],
        },
    },
})