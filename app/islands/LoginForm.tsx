import { useState } from "hono/jsx";
import { loginSchema } from "../schema/auth";
import type { ZodError } from "zod";
import { Button } from "../componnents/ui/Button";
import PasswordToggle from "../componnents/ui/PasswordToggle";

export default function LoginForm() {
    const [errors, setErrors] = useState<Record<string, string>>(
        {} as Record<string, string>
    );

    const [loading, setLoading] =useState(false);

    const validate = (e: Event) => {
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const data = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };

        const result  = loginSchema.safeParse(data);

        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            result.error.issues.forEach((err: any) => {
                fieldErrors[err.path[0]] = err.message;
            });
            setErrors(fieldErrors);
            e.preventDefault(); // 赤エラーがある場合は送信しない
            return false;
        }

        setErrors({});
        setLoading(true);
        return true;
    };

    return (
        <form method="post" onSubmit={validate} class="space-y-4 w-full max-w-sm">
        <div>
            <label class="text-sm">Email</label>
            <input
            name="email"
            type="email"
            class="w-full border px-3 py-2 rounded-md"
            />
            {errors.email && <p class="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
            <label class="text-sm">Password</label>
            <PasswordToggle name="password" />
            {errors.password && (
            <p class="text-red-500 text-sm">{errors.password}</p>
            )}
        </div>

        <Button disabled={loading}>
            {loading ? "Logging in..." : "Login"}
        </Button>
        </form>
    )
}