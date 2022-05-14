import { JSX } from "solid-js";
import { BaseRoute } from "../def";
import SidebarButton from "./SidebarButton";

import HomeIcon from "@material-design-icons/svg/round/home.svg";
import SettingsIcon from "@material-design-icons/svg/round/settings.svg";

interface SidebarProps {
    children?: JSX.Element[] | JSX.Element;
    routes: BaseRoute[];
}

export default ({ children, routes }: SidebarProps): JSX.Element => {
    return (
        <div class="flex flex-col h-[98%] mr-2 w-20 rounded-tr-md rounded-br-md my-auto p-2 text-center shadow bg-light-600 shadow-light-600 text-dark-900 dark:(bg-dark-400 shadow-dark-400 text-light-50)">
            <p>N/A</p>
            <div class="mt-auto flex flex-col">
                <SidebarButton icon={HomeIcon} href="/"/>
                <SidebarButton icon={SettingsIcon} href="/settings"/>
            </div>
        </div>
    )
};