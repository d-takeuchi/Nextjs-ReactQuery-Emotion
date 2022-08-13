import { gql } from 'graphql-request'

export const GET_DRAGON = gql`
  query GetDragon {
    dragon {
      id
      name
      description
    }
  }
`
export const CREATE_DRAGON = gql`
  mutation CreateDragon($name: String!, $description: String!) {
    insert_dragon_one(object: { name: $name, description: $decription }) {
      id
      name
      description
    }
  }
`
export const UPDATE_DRAGON = gql`
  mutation UpdateDragon($id: uuid!, $name: String!, $description: String!) {
    update_dragon_by_pk(
      pk_colmuns: { id: $id }
      _set: { name: $name, description: $description }
    ) {
      id
      name
      description
    }
  }
`
export const DELETE_DRAGON = gql`
  mutation DeleteDragon($id: uuid!) {
    delete_dragon_by_pk(pk_colmuns: { id: $id }) {
      id
      name
      description
    }
  }
`
