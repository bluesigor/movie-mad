const { TranslatedMovie } = require('./TranslatedMovie');

class Translate {
    constructor(translate) {
        this.iso_3166_1 = translate.iso_3166_1;
        this.iso_639_1 = translate.iso_639_1;
        this.name = translate.name;
        this.english_name = translate.english_name;
        this.data = new TranslatedMovie(translate.data);
    }
}

module.exports = { Translate };