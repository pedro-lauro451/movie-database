import { createContext, useState } from "react";

export const GlobalContext = createContext({
    searchParam : '',
    handleOnChange: ()=>{},
    handleSubmit: ()=>{},
    handleClick: ()=>{},
    handleClose: ()=>{},
    movieList: [],
    selectedMovie:[],
    loading: false,
    isMovieSelected: false
});

const GlobalState = ({children}) => {

    const [searchParam,setSearchParam] = useState('');
    const[movieList,setMovieList] = useState([]);
    const [selectedMovie,setSelectedMovie] = useState([]);
    const[isMovieSelected,setIsMovieSelected] = useState(false);
    const[loading,setLoading] = useState(false);

    const handleOnChange = (event) => {
        setSearchParam(event.target.value);
    }

    const handleSubmit = () => {
        setLoading(true);
        getData();
    }

    const getData = async() => {
        const response = await fetch('http://www.omdbapi.com/?s=' + searchParam + '&apikey=155ba036');
        const data = await response.json();
        if(data)
        {
            setLoading(false);
            setMovieList(data.Search);
        }
    }

    const handleClick = (title) => {
        getDataFromClickedMovie(title);
        setIsMovieSelected(true);
    }

    const getDataFromClickedMovie = async(title) => {
        const response = await fetch('http://www.omdbapi.com/?t=' + title + '&apikey=155ba036');
        const data = await response.json();
        if(data)
        {
           setSelectedMovie(data);
        }
    }

    const handleClose = () => {
        setIsMovieSelected(false);
    }

    const contextValue = {
        searchParam,
        handleOnChange,
        handleSubmit,
        handleClick,
        handleClose,
        movieList,
        selectedMovie,
        loading,
        isMovieSelected
    }

    return(
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;