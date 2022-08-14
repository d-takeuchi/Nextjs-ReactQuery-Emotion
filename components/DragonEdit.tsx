import { FC, memo, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useMutationDragon } from '../hooks/useMutationDragon'
import { selectDragon, setEditedDragon } from '../slices/uiSlice'

const DragonEdit: FC = () => {
  const dispatch = useDispatch()
  const editedDragon = useSelector(selectDragon)
  const { createDragonMutation, updateDragonMutation } = useMutationDragon()

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedDragon.id === '') {
      createDragonMutation.mutate({
        name: editedDragon.name,
        description: editedDragon.decription,
      })
    } else {
      updateDragonMutation.mutate(editedDragon)
    }
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          placeholder="ドラゴンの名前"
          type="text"
          value={editedDragon.name}
          onChange={(e) =>
            dispatch(setEditedDragon({ ...editedDragon, name: e.target.value }))
          }
        />
        <input
          placeholder="ドラゴンの説明文"
          type="text"
          value={editedDragon.decription}
          onChange={(e) =>
            dispatch(
              setEditedDragon({ ...editedDragon, decription: e.target.value })
            )
          }
        />
        <button disabled={!editedDragon.name || !editedDragon.decription}>
          {editedDragon.id === '' ? '新規' : '更新'}
        </button>
      </form>
    </div>
  )
}

export const DragonEditMemo = memo(DragonEdit)
