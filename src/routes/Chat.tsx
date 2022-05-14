import { BaseRoute } from "../def";

export default {
    name: "Chat",
    path: "/",
    component: () => {
        return (
            <>
                <div>
                    <h1 class="text-4xl">Chat</h1>
                    <h2 class="text-2xl">There will be a chat UI here soon.</h2>
                </div>
            </>
        );
    },
} as BaseRoute;