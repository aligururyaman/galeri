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
        {/* Resimlerin gösterildiği kısım */}
            <div className="container">
                <div className="row align-items-start">
                    <div className="col"> 
                        <img className="btnimg" onClick={favEkle} src={image.urls.small} alt={image.alt_description}/>   
                    </div>
                </div>    
            </div>
            
        </>
     );
}

export default ImageItem;