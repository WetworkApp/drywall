import { JSX, createMemo } from "solid-js";
import { useLocation } from "solid-app-router";

interface HeaderProps {
    children?: JSX.Element[] | JSX.Element;
}

export default ({ children }: HeaderProps): JSX.Element => {
    const location = useLocation();
    const trimmedPath = createMemo(() => location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2));

    return (
        <div class="rounded-md p-2 mb-2 text-xl text-center bg-light-700 text-dark-900 dark:(bg-dark-300 text-light-50)">
            <p>{trimmedPath() === "" ? "Home" : trimmedPath()}</p>
        </div>
    )
};