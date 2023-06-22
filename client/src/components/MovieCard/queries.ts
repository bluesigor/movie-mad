import { gql } from '@apollo/client'

export const TRANSLATE = gql`
  query Translate($id: Int) {
    translateMovie(id: $id) {
      id
      translations {
        iso_3166_1
        iso_639_1
        name
        english_name
        data {
          title
          overview
          homepage
        }
      }
    }
  }
`
