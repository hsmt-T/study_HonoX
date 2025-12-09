import { createRoute } from "honox/factory";
import { UserSchema } from "../../schema/user";

export default createRoute((c) => {
    const user = {
        id:1,
        name: "12345",
        message: "hono API"
    }

    return c.json(UserSchema.parse(user))
})