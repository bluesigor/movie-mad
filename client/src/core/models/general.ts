export declare namespace General {
  interface Movie {
    id: number
    title: string
    posterPath: string
    releaseDate: string
    genre?: Genre[]
  }
  interface Genre {
    id: number
    name: string
  }

  interface Language {
    lang: string
  }

  interface Translation {
    id: number
    translations: TranslationDetails[]
  }

  interface TranslationDetails {
    iso_3166_1: string
    iso_639_1: string
    name: string
    english_name: string
    data: TranslatedMovie
  }

  interface TranslatedMovie {
    title: string
    overview: string
    homepage: string
  }
}
