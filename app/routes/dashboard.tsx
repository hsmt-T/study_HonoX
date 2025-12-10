import { createRoute } from "honox/factory";

export default createRoute( async (c) => {
    return c.render (
        <h1>ダッシュボード</h1>
    )
})