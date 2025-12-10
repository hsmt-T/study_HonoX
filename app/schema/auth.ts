import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("正しいメール形式を入力してください"),
    password: z.string().min(6,"パスワードは6文字以上必要です"),
});

export const signupSchema = z.object({
    email: z.string().email("正しいメール形式を入力してください"),
    password: z.string().min(6, "パスワードは6文字以上必要です"),
    name: z.string().min(1, "名前は必須です"),
})