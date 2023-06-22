const { Translate } = require('./Translation');

class LocalizationGeneral {
    constructor(localization) {
        this.id = localization.id;
        this.translations = localization.translations.map((local) => new Translate(local));
    }
}

module.exports = { LocalizationGeneral };