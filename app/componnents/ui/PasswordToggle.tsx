import { useState } from "hono/jsx";

export default function PasswordToggle(props: { name: string }) {
    const { name } = props;

    const [show, setShow] = useState(false);

    return (
        <div class="relative w-full">
            <input
                name={name}
                type={show ? "text" : "password"}
                class="w-full border px-3 py-2 rounded-md pr-10"
            />

            <button
                type="button"
                class="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600"
                onClick={() => setShow(!show)}
            >
                {show ? "🙈" : "👁️"}
            </button>
        </div>
    );
}
