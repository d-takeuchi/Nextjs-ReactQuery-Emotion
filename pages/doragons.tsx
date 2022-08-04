import { FC } from 'react'
import Layout from '../components/Layout'
import { useQueryDoragons } from '../hooks/useQueryDoragons'

const Doragons: FC = () => {
  const { status, data } = useQueryDoragons()

  if (status === 'loading')
    <Layout title="ローディング中">Now Loading...</Layout>
  if (status === 'error') <Layout title="エラー">エラー発生</Layout>

  return (
    <Layout title="ドラゴン一覧">
      <h1>ドラゴン一覧</h1>

      <ul>
        {data?.map((doragon) => (
          <>
            <li>{doragon.id}</li>
            <li>{doragon.name}</li>
            <li>{doragon.description}</li>
          </>
        ))}
      </ul>
    </Layout>
  )
}

export default Doragons
