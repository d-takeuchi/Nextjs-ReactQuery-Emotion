import { FC } from 'react'
import Layout from '../components/Layout'
import { useQueryDragons } from '../hooks/useQueryDragons'
import Link from 'next/link'
import { css } from '@emotion/react'

const dragonName = css`
  font-weight: bold;
  color: blue;
`
const Dragons: FC = () => {
  const { status, data } = useQueryDragons()
  if (status === 'loading')
    <Layout title="ローディング中">Now Loading...</Layout>
  if (status === 'error') <Layout title="エラー">エラー発生</Layout>

  return (
    <Layout title="ドラゴン一覧">
      <h1>ドラゴン一覧</h1>

      <ul>
        {data?.map((dragon) => (
          <>
            <li css={dragonName}>{dragon.name}</li>
            <li>{dragon.description}</li>
            <br />
          </>
        ))}
      </ul>
      <Link href="/">ホームへ戻る</Link>
    </Layout>
  )
}

export default Dragons
