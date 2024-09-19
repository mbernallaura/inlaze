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