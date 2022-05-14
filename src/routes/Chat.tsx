import { useParams } from "solid-app-router";

import { BaseRoute } from "../def";
import Message from "../components/Message";

export default {
    name: "Chat",
    path: "/chat/:id",
    component: () => {
        const params = useParams();
        return (
            <>
                <div class="flex flex-col">
                    <Message message={{ content: `There's no real functionality yet, because the backend isn't done. You're in the chat with id ${params.id} and here's an example message!`, author: { username: "Beef" }, timestamp: Date.now() }}/>
                </div>
            </>
        );
    },
} as BaseRoute;