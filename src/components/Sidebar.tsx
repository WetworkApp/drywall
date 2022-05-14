import { JSX } from "solid-js";
import { BaseRoute } from "../def";

interface SidebarProps {
    children?: JSX.Element[] | JSX.Element;
    routes: BaseRoute[];
}

export default ({ children, routes }: SidebarProps): JSX.Element => {
    return (
        <div class="flex flex-col h-[98%] mr-2 w-20 rounded-tr-md rounded-br-md my-auto p-2 text-center bg-light-700">
            <p>N/A</p>
        </div>
    )
};