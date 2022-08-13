import { FC, memo } from 'react'
import { useQueryDragons } from '../hooks/useQueryDragons'
import { DragonItemMemo } from './DragonItem'

export const DragonList: FC = () => {
  const { status, data } = useQueryDragons()
  if (status === 'loading') return <div>ロード中...</div>
  if (status === 'error') return <div>エラーです！</div>

  return (
    <div>
      {data?.map((dragon) => (
        <div key={dragon.id}>
          <ul>
            <DragonItemMemo dragon={dragon} />
          </ul>
        </div>
      ))}
    </div>
  )
}

export const DragonListMemo = memo(DragonList)
