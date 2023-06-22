const { IMAGE_BASE_PATH } = require('../../../config/index');

class Movie {
    constructor(movie) {
        this.movie = movie;
        this.id = movie.id;
        this.title = movie.title;
        this.releaseDate = movie.release_date;
        this.adult = movie.adult;
        this.overview = movie.overview;
        this.voteAverage = movie.vote_average;
        this.video = movie.video;
        this.voteCount = movie.vote_count;
        this.popularity = movie.popularity;
        this.backdropPath = IMAGE_BASE_PATH + movie.backdrop_path;
        this.originalLanguage = movie.original_language;
        this.originalTitle = movie.original_title;
        this.posterPath = IMAGE_BASE_PATH + movie.poster_path;
    }
}

module.exports = { Movie };