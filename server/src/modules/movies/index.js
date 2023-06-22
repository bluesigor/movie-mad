const axios = require('axios');
const { LocalizationGeneral } = require('./entities/LocalizationGeneral');
const { Movies } = require('./entities/Movies');
const { API_KEY, API_BASE } = require('../../config/index');


const getPopular = async(page) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);

    return new Movies(response.data);

};

const getDetails = (id) => {
    return axios.get(`${API_BASE}movie/${id}?api_key=${API_KEY}&language=en-US`);
};

const getTranslation = async(id) => {
    const response = await axios.get(`${API_BASE}movie/${id}/translations?api_key=${API_KEY}`);

    return new LocalizationGeneral(response.data);
};


module.exports = { getPopular, getDetails, getTranslation };