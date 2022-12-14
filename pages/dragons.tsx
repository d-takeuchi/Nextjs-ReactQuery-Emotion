import Link from 'next/link'
import { FC } from 'react'
import { DragonListMemo } from '../components/DragonList'
import Layout from '../components/Layout'
import { css } from '@emotion/react'
import { DragonEditMemo } from '../components/DragonEdit'

const dragonName = css`
  font-weight: bold;
  color: blue;
`
const Dragons: FC = () => {
  return (
    <Layout title="ドラゴン一覧">
      <h1>ドラゴン一覧</h1>

      <DragonEditMemo />
      <DragonListMemo />
      <Link href="/">ホームへ戻る</Link>
    </Layout>
  )
}

export default Dragons
