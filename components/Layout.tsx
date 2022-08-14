import { css } from '@emotion/react'
import Head from 'next/head'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  title: string
}

const header = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
`
const mainNav = css`
  display: flex;
  font-size: 1.25rem;
  margin-top: 34px;
  list-style: none;
  li {
    margin-left: 36px;
  }
  a {
    color: #432;
  }
  a:hover {
    color: pink;
  }
`
const wrapper = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4%;
`
const Layout: FC<Props> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header css={[header, wrapper]}>
        <h1>EmotionとReactQuery(GraphQL)を試す</h1>
        <nav>
          <ul css={mainNav}>
            <li>
              <Link href="/dragons">React-Query-GraphQL</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main css={wrapper}>{children}</main>
    </div>
  )
}
export default Layout
