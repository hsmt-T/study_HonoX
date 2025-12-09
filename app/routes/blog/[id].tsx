import { createRoute } from "honox/factory";
import Layout from "../../componnents/layout";

export default createRoute((c) => {
    const id = c.req.param("id");

    // const users = ["1", "2", "3"]
    // const exists = users.includes(id)

    // if (!exists) {
    //     return c.notFound()  // ← これで 404 発生
    // }

    return c.render(
        <Layout>
            <h1>Blog page</h1>
            <p>このページは{id}のページです</p>
        </Layout>
    )
})