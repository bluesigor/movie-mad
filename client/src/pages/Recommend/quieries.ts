import { gql } from '@apollo/client'

export const RECOMMEND = gql`
  query MoviesByIds($ids: [Int]) {
    moviesById(ids: $ids) {
      id
      title
      releaseDate
      posterPath
    }
  }
`
