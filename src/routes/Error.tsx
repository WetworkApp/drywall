import { BaseRoute } from "../def";

export default {
    name: "Error",
    path: "/*all",
    component: () => {
        return (
            <div class="text-center mt-[22%]">
                <h1 class="text-4xl">Whoops...</h1>
                <h2 class="text-2xl">Either you hit an invalid route, or something went wrong!</h2>
            </div>
        );
    },
} as BaseRoute;