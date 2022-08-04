import { css } from '@emotion/react'
import Head from 'next/head'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  title: string
}

const hello = css`
  color: pink;
`
const Layout: FC<Props> = ({ children, title }) => {
  return (
    <div css={hello}>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/doragons">ドラゴン一覧</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
export default Layout
