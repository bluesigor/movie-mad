import { gql } from '@apollo/client'

export const MOVIES = gql`
  query Movies($page: Int) {
    movies(page: $page) {
      totalPages
      totalResults
      page
      results {
        id
        title
        releaseDate
        posterPath
      }
    }
  }
`
