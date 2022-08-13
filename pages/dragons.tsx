import Link from 'next/link'
import { FC } from 'react'
import { DragonListMemo } from '../components/DragonList'
import Layout from '../components/Layout'
import { css } from '@emotion/react'

const dragonName = css`
  font-weight: bold;
  color: blue;
`
const Dragons: FC = () => {
  return (
    <Layout title="ドラゴン一覧">
      <h1>ドラゴン一覧</h1>

      <DragonListMemo />
      <Link href="/">ホームへ戻る</Link>
    </Layout>
  )
}

export default Dragons
