import type { Context } from "hono";
import LoginForm from "../../islands/LoginForm";
import { loginSchema } from "../../schema/auth";
import { db } from "../../db";
import { users } from "../../db/schema/user";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { setCookie } from "hono/cookie";

export default function LoginPage() {
    return (
        <main class="min-h-screen flex justify-center items-center">
            <div class="p-6 rounded-xl border shadow w-full max-w-md">
                <h1 class="text-xl mb-4 font-bold">Login</h1>
                <LoginForm />
            </div>
        </main>
    );
}

export const action = async (c: Context) => {
    const form = await c.req.formData();

    const input = {
        email: form.get("email"),
        password: form.get("password"),
    };

    const parsed = loginSchema.safeParse(input);
    if (!parsed.success) return c.text("Emailかパスワードどちらかが不足しています", 400);

    const result = await db.select().from(users).where(eq(users.email, parsed.data.email));
    if (result.length === 0) return c.text("メールまたはパスワードが違います", 401);

    const user = result[0];

    const ok = await bcrypt.compare(parsed.data.password, user.password);
    if (!ok) return c.text("メールまたはパスワードが違います", 401)

    setCookie(c,"session", String(user.id), {
        httpOnly: true,
        path: "/",
    });

    return c.redirect("/dashboard")
}