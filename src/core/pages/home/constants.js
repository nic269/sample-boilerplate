import createActionType from '../../utils/create-action-type/create-action-type'

export const REDUX_KEY = 'home'

// Action types
export const LOAD_TOP_POPULAR = createActionType('LOAD_TOP_POPULAR', REDUX_KEY)
export const LOAD_TOP_RATED = createActionType('LOAD_TOP_RATED', REDUX_KEY)
export const LOAD_UPCOMMING = createActionType('LOAD_UPCOMMING', REDUX_KEY)
export const LOAD_NOW_PLAYING = createActionType('LOAD_NOW_PLAYING', REDUX_KEY)
export const LOAD_MOVIE_GENRES = createActionType('LOAD_MOVIE_GENRES', REDUX_KEY)
export const LOAD_MORE_MOVIES = createActionType('LOAD_MORE_MOVIES', REDUX_KEY)

// Other
export const IMG_END_POINT = 'https://image.tmdb.org/t/p'
export const MORE_MOVIE_POPULAR_KEY = 'popular'
export const MORE_MOVIE_RATED_KEY = 'rated'
export const MORE_MOVIE_UPCOMMING_KEY = 'upComming'

// Api
export const END_POINT = 'https://api.themoviedb.org/3'
export const API_KEY = 'a299ace1eb4823061cff863e7aa5fe8d'
