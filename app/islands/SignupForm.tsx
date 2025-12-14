"use client";

import { useState } from "hono/jsx";
import { signupSchema } from "../schema/auth";
import { Button } from "../componnents/ui/Button";
import { Input } from "../componnents/ui/Input";
import PasswordToggle from "../componnents/ui/PasswordToggle";

export default function SignupForm() {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [serverError, setServerError] = useState("");
    const [loading, setLoading] = useState(false);

    const validate = (data: any) => {
        const result = signupSchema.safeParse(data);

        if (!result.success) {
        const fieldErrors: Record<string, string> = {};
        result.error.issues.forEach((err: any) => {
            fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
        return false;
        }

        setErrors({});
        return true;
    };

    const onSubmit = async (e: Event) => {
        e.preventDefault();
        setServerError("");

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        name: formData.get("name") as string,
        };

        // バリデーション
        if (!validate(data)) return;

        setLoading(true);

        // API 呼び出し
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const json = await res.json();

        if (!res.ok) {
            // setServerError( ?? "Server error");
            setLoading(false);
        return;
        }

        // 成功時
        location.href = "/dashboard";
    };

    return (
        <form onSubmit={onSubmit} class="space-y-4">
            {/* 名前フィールド */}
            <div>
                {/* Inputコンポーネントは、name属性を持つ必要があります */}
                <Input name="name" type="text" placeholder="名前" required />
                {errors.name && <p class="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* メールアドレスフィールド */}
            <div>
                <Input name="email" type="email" placeholder="メールアドレス" required />
                {errors.email && <p class="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* パスワードフィールド */}
            <div>
                {/* PasswordToggle コンポーネントを使用して、パスワードの表示/非表示を切り替え可能にすることが推奨されます */}
                <PasswordToggle name="password"/> 
                {errors.password && <p class="text-sm text-red-500 mt-1">{errors.password}</p>}
            </div>
            
            {/* サーバー全体のエラーメッセージ */}
            {serverError && (
                <div class="p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert">
                    {serverError}
                </div>
            )}

            <Button type="submit" disabled={loading} class="w-full">
                {loading ? '登録中...' : '新規登録'}
            </Button>
        </form>
    );
}
