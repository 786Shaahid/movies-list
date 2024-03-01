// SearchPage.js
import React, { useDebugValue, useState } from 'react';
import axios from 'axios';


const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [movieData,setmovieData]=useState({});

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=2778ba1e&s=${query}`);
             setResults (response.data.results);
        } catch (error) {
            console.log(error);
        }
     
    };

    const handleclick= async (movie)=>{
          try {
            const requestSent= await axios.post("/api/movies/add",movie);

          } catch (error) {
            console.log(error);
          }
    }

   
    return (
        <div className="container mt-5">
            <h1>Search Page</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for movies/TV shows"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
            </div>
            <div>
             {
                 results.map(movie=>(
                    <div className='containers'>
                       <div>movie.title</div>
                       <div>movie.year</div>
                       <img src=`${movie.url}` alt="Image" />
                       <button onClick={(movie)=>{
                        handleclick(movie);
                        }}>Add To Favorite</button>
                    </div>
                    
                     
                 ))

             }
             </div>
        </div>
    );
};

export default SearchPage;
