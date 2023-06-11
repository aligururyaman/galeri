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


    <header className="headerSection">
      <div className="container">
        <div className="content">
          <div className="headernadsub">
            <p  className='subhead'><Link to="/">Anasayfa</Link></p>
            <p className="head">Favorilediğin Resimler...</p>
          </div> 
          <div className="buttonlabel">
            <button className="buttonbase" onClick={temizle}>Temizle</button> 
          </div>    
        </div> 
      </div>
    </header> 
      
    {/* Resimlerin gösterildiği bölüm */}
      <div className="imagesShow">
        {favorites.length === 0 ? <VeriYokMesaji/> : 
        <div className="containerImg">
            <div className="contentImg">
                {favorites.map((favorite, index) => (
                  <div key={index}>   
                    <img className="imageApi" src={favorite.imageUrl} alt={favorite.altDescription}/>
                    <button className="favAdd" onClick={favKaldir}>
                    <span className="button__text">Kaldır</span>
                    <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                    </button> 
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
