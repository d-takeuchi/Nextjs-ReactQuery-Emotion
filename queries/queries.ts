import { gql } from 'graphql-request'

//ドラゴン一覧を取得
export const GET_DORAGONS = gql`
  query GetDoragons {
    dragons {
      id
      name
      description
    }
  }
`
