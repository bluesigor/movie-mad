class TranslatedMovie {
    constructor(movie) {
        this.title = movie.title;
        this.overview = movie.overview;
        this.homepage = movie.homepage;
    }
}

module.exports = { TranslatedMovie };