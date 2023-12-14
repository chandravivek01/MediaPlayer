import React from 'react'
import { createRandomMovie } from '../data';
import { useDispatch, useSelector } from 'react-redux'
import { addMovie, removeMovie } from '../store/slices/moviesSlice'; 

const MoviePlaylist = () => {

    const dispatch = useDispatch();
    const moviePlaylist = useSelector(state => state.movies);

    const handleMovieAdd = ( movie ) => {
        dispatch(addMovie(movie));
    }

    const handleMovieRemove = ( movie ) => {
        dispatch(removeMovie(movie));
    }

    const renderedMovies = moviePlaylist.map( (movie) => {
        return (
            <li key={movie}>
                {movie}
                <button onClick={() => handleMovieRemove(movie)}>X</button>
            </li>
        );
    });

    return (
        <div className='content'>
            <div className="table-header">
                <h3 className="subtitle is-3">Movie Playlist</h3>
                <div className="buttons">
                    <button
                        onClick={() => handleMovieAdd(createRandomMovie())}
                        className='button is-link'
                    >
                        + Add movie to playlist
                    </button>
                </div>
            </div>
            <ul>{ renderedMovies }</ul>
        </div>
    )
}

export default MoviePlaylist