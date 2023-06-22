const { getPopular, getDetails, getTranslation } = require('../modules/movies/index');
const { Movie } = require('../modules/movies/entities/Movie');

async function movies(parent, args) {
    const data = await getPopular(args.page);

    return data;

}

async function moviesById(parent, { ids }) {
    const requests = ids.map((id) => getDetails(id));

    const response = await Promise.all(requests);

    const movie = response.map(movie => new Movie(movie.data));

    return movie;
}

async function translateMovie(parent, { id }) {

    const data = await getTranslation(id);

    return data;
}


module.exports = { movies, moviesById, translateMovie };