import { FC, memo } from 'react'
import { useDispatch } from 'react-redux'
import { useMutationDragon } from '../hooks/useMutationDragon'
import { setEditedDragon } from '../slices/uiSlice'
import type { Dragon } from '../types/types'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'

interface Props {
  dragon: Dragon
}

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
        onClick={() => {
          deleteDragonMutation.mutate(dragon.id)
        }}
      />
    </li>
  )
}

export const DragonItemMemo = memo(DragonItem)
