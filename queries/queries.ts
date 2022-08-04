import { gql } from 'graphql-request'

//ドラゴン一覧を取得
export const GET_DRAGONS = gql`
  query GetDragons {
    dragons {
      id
      name
      description
    }
  }
`
