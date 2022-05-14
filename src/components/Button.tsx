import { JSX } from "solid-js";

interface ButtonProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    onClick: () => void;
}

export default ({ children, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} class="w-auto p-2 rounded-md bg-light-800 dark:(bg-dark-400) hover:(bg-opacity-50)">
            {children}
        </button>
    );
};