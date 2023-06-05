import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { FcDislike } from "react-icons/fc";

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
    <>

      <div>
        <nav className='navbar bg-body-tertiary'>
          <div className="container">
        <Link className="btn btn-info" to="/">Anasayfa</Link>
        <h2>Favoriler</h2>
        
        <button className="btn btn-danger" onClick={temizle}>Hepsini sil</button>
      
        </div>
        </nav>
        </div>
      
      
      
      <div className="container">
                <div className="row align-items-start">
                    <div className="col">
                        <div className="card">
                              
                                {favorites.map((favorite, index) => (
                                  <div key={index}>
                                    <img className="imagelistimg card" src={favorite.imageUrl} alt={favorite.altDescription}/>
                                    <button className="btn" onClick={favKaldir}><FcDislike/></button>
                                    
                                    </div>
                                  
                                ))}
                              
                                              
                        </div>
                    </div>    
                </div>
            </div>
    
    </>
   
  );
}

export default Basket;




