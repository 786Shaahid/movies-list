
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([]);
   

    useEffect(() => {
      const fetchData = async () => {
            try {
                const response = await axios.get('/api/movies/getFavorite');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
          
    }, []);

    return (
        <div className="container mt-5">
            <h1>Favorites Page</h1>
            <div>
             {
                 favorites.map(movie=>(
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

export default FavoritesPage;
