import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function Basket() {
 
  function temizle(){
    localStorage.clear()
    window.location.reload();
  }
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  
  function favKaldir(index){
    
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1); 

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); 
    setFavorites(updatedFavorites); 
    
    


    
      
    }
  return (
    <div>
        <Link to="/">Anasayfa</Link>
      <h2>Favoriler</h2>
      <button className="btn" onClick={temizle}>Hepsini sil</button>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            <img src={favorite.imageUrl} alt={favorite.altDescription}/>
            <button className="btn" onClick={favKaldir}>Fav Kaldır</button>
            
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Basket;




