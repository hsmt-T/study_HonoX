import type { JSX } from "hono/jsx";

export const Input = (props: JSX.IntrinsicElements["input"]) => {
    return <input {...props} class="bg-amber-200"/>;
};
