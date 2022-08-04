import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'

import { Doragon } from '../types/types'
import { GET_DORAGONS } from '../queries/queries'

interface DoragonsResponse {
  doragons: Doragon[]
}

export const fetchDoragons = async () => {
  const { doragons: data } = await request<DoragonsResponse>(
    `https://api.spacex.land/graphql`,
    GET_DORAGONS
  )

  return data
}

export const useQueryDoragons = () => {
  return useQuery<Doragon[], Error>({
    queryKey: ['doragons'],
    queryFn: fetchDoragons,
    staleTime: 10000,
    refetchInterval: 10000,
  })
}
