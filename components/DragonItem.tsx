import { FC, memo } from 'react'
import { useDispatch } from 'react-redux'
import { useMutationDragon } from '../hooks/useMutationDragon'
import { setEditedDragon } from '../slices/uiSlice'
import type { Dragon } from '../types/types'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { css } from '@emotion/react'

interface Props {
  dragon: Dragon
}

const icon = css`
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  margin: 0 5px;
`

export const DragonItem: FC<Props> = ({ dragon }) => {
  const dispatch = useDispatch()
  const { deleteDragonMutation } = useMutationDragon()

  if (deleteDragonMutation.isLoading) {
    return <p>削除中です...</p>
  }

  return (
    <li>
      <span>{dragon.name}</span>
      <span>{dragon.description}</span>
      <PencilAltIcon
        css={icon}
        onClick={() => {
          dispatch(
            setEditedDragon({
              id: dragon.id,
              name: dragon.name,
              decription: dragon.description,
            })
          )
        }}
      />
      <TrashIcon
        css={icon}
        onClick={() => {
          deleteDragonMutation.mutate(dragon.id)
        }}
      />
    </li>
  )
}

export const DragonItemMemo = memo(DragonItem)
