import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { FcDislike } from "react-icons/fc";
import VeriYokMesaji from "./mesaj";

function Basket() {
// Temizle Butonu 
  function temizle(){
    localStorage.clear()
    window.location.reload();
  }
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);
//  Favorileri kaldırma butonu
  function favKaldir(index){
    
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1); 

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); 
    setFavorites(updatedFavorites);  
    }
  return (
    <>
    {/* Navbar Bölümü */}
      <div>
        <nav className='navbar bg-body-tertiary'>
          <div className="container">
            <Link className="btn btn-info" to="/">Anasayfa</Link>
            <h2>Favoriler</h2>
            <button className="btn btn-danger" onClick={temizle}>Hepsini sil</button>
          </div>
        </nav>
      </div>
    {/* Resimlerin gösterildiği bölüm */}
      <div className="container">
        {favorites.length === 0 ? <VeriYokMesaji/> : 
        <div className="row align-items-start">
            <div className="col">
                {favorites.map((favorite, index) => (
                  <div key={index}>
                    
                    <img className="btnimg" src={favorite.imageUrl} alt={favorite.altDescription}/>
                    <button className="btn" onClick={favKaldir}><FcDislike/></button> 
                  </div>
                ))}   
            </div>
            
         </div>
          }
       </div>
    </>
   
  );
}

export default Basket;
