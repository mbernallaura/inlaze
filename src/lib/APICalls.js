import axiosBD from './conexionTMBD';

export const getPopularMovies = async () => {
    try {
        const { data } = await axiosBD.get('/movie/popular');
        return data.results; // 'results' contiene las películas populares
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        throw error;
    }
};

export const getMovieSelectId = async (movieId) => {
    try {
        const response = await axiosBD.get(`/movie/${movieId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
};

export const getRecommedations = async (movieId) => {
    try {
        const { data } = await axiosBD.get(`/movie/${movieId}/recommendations`);
        return data.results;
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        throw error;
    }
};