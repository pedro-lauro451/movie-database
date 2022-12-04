import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import './css/movieList.css';

const MovieList = () => {
    const {movieList,
           loading,
           handleClick,
           selectedMovie,
           handleClose,
           isMovieSelected} = useContext(GlobalContext);
   
    return(
        <div className="container">
         {loading && <p>Loading...</p>}
         {
            selectedMovie && selectedMovie.length !== 0 && isMovieSelected === true ?
            <div className="card">
                <h3 className="title">{selectedMovie.Title}</h3>
                    <div className="cardItem">

                        <div className='info'>
                            <img className="clickedPoster" 
                                 src={selectedMovie.Poster}
                                 alt="Movie Poster">
                            </img>
                            <div className="poster-info">
                                <span>{selectedMovie.Year}</span>
                                <span>&nbsp;-&nbsp;</span>
                                <span>{selectedMovie.Runtime}</span>
                            </div>
                        </div>
                        
                        <div className='info'>
                            <p className="info-start">{selectedMovie.Plot}</p> 
                            <p className='info-mid'><strong>Genre:</strong> {selectedMovie.Genre}</p>
                            <p className='info-mid'><strong>Directors:</strong> {selectedMovie.Director}</p>
                            <p className='info-mid'><strong>Writers:</strong> {selectedMovie.Writer}</p>
                            <p className='info-mid'><strong>Actors:</strong> {selectedMovie.Actors}</p>
                            <p className="info-end"><strong>Metascore:</strong> {selectedMovie.Metascore}</p>
                        </div>

                    </div>
                     
                <button onClick={()=>{handleClose()}} className="closeBtn">Close</button>  
            </div> 
            : null
         }
         {
            movieList && movieList.length > 0 && isMovieSelected === false ? 
            movieList.map((item => (
                <div className="item" key={item.imdbID}>
                    <img className="poster" src={item.Poster} 
                         alt="Movie Poster"
                         onClick={()=>{handleClick(item.Title)}}/>
                </div>
            ))) 
            : <div></div>
         }
        </div>
    )
}

export default MovieList;