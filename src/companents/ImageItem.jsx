import { FcLike } from "react-icons/fc";

function ImageItem({image}) {
    // Favorilere ekleyen fonksiyon
    function favEkle() {
  
        var imageUrl = image.urls.small;
        var altDescription = image.alt_description;
        var imageId = image.id;

        var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        var newFavorite = {
            imageUrl: imageUrl,
            altDescription: altDescription,
            imageId: imageId
        };
        favorites.push(newFavorite);
        localStorage.setItem('favorites', JSON.stringify(favorites));
}

    return ( 
        <>
            
            <div className="imageLabel">
                <img className="imageApi"  src={image.urls.small} alt={image.alt_description}/>
                <div className="btnLabel">
                  <button className="favAdd" onClick={favEkle}>
                <span class="button__text">Favorilere Ekle</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                </button>   
                </div>
                            
            </div> 
            
                       
                        
                
        </>
     );
}

export default ImageItem;