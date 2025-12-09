import { createRoute } from 'honox/factory'
import Layout from '../componnents/layout'

export default createRoute((c) => {
  return c.render(
    <Layout>
      <h1 class="text-3xl font-bold text-red-600">404 Not Found</h1>
      <p class="mt-2">ページが見つかりませんでした。</p>
      <h2>"404"</h2>
    </Layout> // ← ステータスコード
  )
})
