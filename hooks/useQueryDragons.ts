import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'
import { Dragon } from '../types/types'
import { GET_DRAGON } from '../queries/queries'

interface DragonsResponse {
  dragon: Dragon[]
}

export const fetchDoragons = async () => {
  const { dragon } = await request<DragonsResponse>(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string,
    GET_DRAGON
  )
  return dragon
}

export const useQueryDragons = () => {
  return useQuery<Dragon[], Error>(['dragons'], fetchDoragons)
}
