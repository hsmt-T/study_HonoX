import type { JSX } from "hono/jsx";

export const Label = (props: JSX.IntrinsicElements["label"]) => {
    return <label {...props}>{props.children}</label>;
};
