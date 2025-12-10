import type { JSX } from "hono/jsx";

export const Button = (props: JSX.IntrinsicElements["button"]) => {
    return <button {...props}>{props.children}</button>;
};
