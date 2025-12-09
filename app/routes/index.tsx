import { createRoute } from 'honox/factory'
import { Layout } from '../componnents/layout'

export default createRoute((c) => {
  return c.render(
    <Layout>
      <h1>Index page</h1>
      <p>SSRレンダリング</p>
    </Layout>
  )
})
