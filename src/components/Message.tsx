import { JSX } from "solid-js";
import { Message, User } from "../def";

interface MessageProps {
    children?: JSX.Element[] | JSX.Element;
    message: Message
}

export default ({ children, message }: MessageProps): JSX.Element => {
    return (
        <div class="w-[99%] mx-auto rounded-md p-1 bg-light-700 dark:(bg-dark-300)">
            <div>
                <span class="font-bold mr-2">{message.author.username}</span>
                <span class="text-sm inline-block align-baseline">{new Date(message.timestamp).toLocaleString()}</span>
            </div>
            <div>
                <span>{message.content}</span>
            </div>
        </div>
    )
};