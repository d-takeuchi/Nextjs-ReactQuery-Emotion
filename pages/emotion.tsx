import { css } from '@emotion/react'
import { FC } from 'react'
const Title = css`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = css`
  padding: 4em;
  background: papayawhip;
`

const Emotion: FC = () => {
  return (
    <div css={Title}>
      <h1 css={Wrapper}>Hello World!</h1>
    </div>
  )
}

export default Emotion
