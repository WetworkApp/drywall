import { NavLink } from "solid-app-router";
import { JSX } from "solid-js";

interface SidebarButtonProps {
    children?: JSX.Element[] | JSX.Element;
    icon: string;
    href: string;
}

export default ({ children, href, icon }: SidebarButtonProps) => {
    return (
        <NavLink href={href}>
            <img src={icon} class="dark:(filter invert) w-[75%] h-[75%] container mx-auto"/>
        </NavLink>
    );
};