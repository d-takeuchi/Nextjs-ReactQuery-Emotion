import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'

import { Dragon } from '../types/types'
import { GET_DRAGONS } from '../queries/queries'

interface DragonsResponse {
  dragons: Dragon[]
}

export const fetchDoragons = async () => {
  const { dragons: data } = await request<DragonsResponse>(
    `https://api.spacex.land/graphql`,
    GET_DRAGONS
  )
  return data
}

export const useQueryDragons = () => {
  return useQuery<Dragon[], Error>(['dragons'], fetchDoragons)
}
