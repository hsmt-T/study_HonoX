import { FC } from "hono/jsx";
import Layout from "../componnents/layout";
import { createRoute } from "honox/factory";
import { UserSchema } from "../schema/user";


export default createRoute(async (c) => {
    const res = await fetch('http://localhost:5173/api/user')
    const user = UserSchema.parse(await res.json())

    return c.render(
        <Layout>
            <h1>user API page</h1>
            <h2>name: {user.name}</h2>
            <h2>message: {user.message}</h2>
        </Layout>
    )
})