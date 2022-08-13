import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'graphql-request'
import { useDispatch } from 'react-redux'
import { CREATE_DRAGON, UPDATE_DRAGON, DELETE_DRAGON } from '../queries/queries'
import { resetEditedDragon } from '../slices/uiSlice'
import { Dragon, EditDragon } from '../types/types'

interface InputDragon {
  name: string
  description: string
}

export const useMutationDragon = () => {
  const queryClient = useQueryClient()
  const dispatch = useDispatch()

  const createDragonMutation = useMutation(
    ({ name, description }: InputDragon) =>
      request(process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string, CREATE_DRAGON),
    {
      onSuccess: (res) => {
        const previousDragons = queryClient.getQueryData<Dragon[]>(['dragons'])
        if (previousDragons) {
          queryClient.setQueryData(
            ['dragons'],
            [...previousDragons, res.insert_dragon_one]
          )
        }
        dispatch(resetEditedDragon())
      },
    }
  )
  const updateDragonMutation = useMutation(
    (dragon: EditDragon) =>
      request(process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string, UPDATE_DRAGON),
    {
      onSuccess: (res, variables) => {
        const previousDragons = queryClient.getQueryData<Dragon[]>(['dragons'])
        if (previousDragons) {
          queryClient.setQueryData<Dragon[]>(
            ['dragons'],
            previousDragons.map((dragon) =>
              dragon.id === variables.id ? res.update_dragon_by_pk : dragon
            )
          )
        }
        dispatch(resetEditedDragon())
      },
    }
  )

  const deleteDragonMutation = useMutation(
    (id: string) =>
      request(process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string, DELETE_DRAGON),
    {
      onSuccess: (res, variables) => {
        const previousDragons = queryClient.getQueryData<Dragon[]>(['dragons'])

        if (previousDragons) {
          queryClient.setQueryData<Dragon[]>(
            ['dragons'],
            previousDragons.filter((dragon) => dragon.id !== variables)
          )
        }
        dispatch(resetEditedDragon())
      },
    }
  )

  return {
    createDragonMutation,
    updateDragonMutation,
    deleteDragonMutation,
  }
}
