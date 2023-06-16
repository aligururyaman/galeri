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

        alert("Favorilere Eklendi")
        setTimeout(function() {
            var alertBox = document.querySelector(".alert");
            alertBox.style.display = "none";
        
        }, 1000);
        };





    return ( 
        <>
            <div className="imagesOne">
                <img className="images"  src={image.urls.small} alt={image.alt_description}/>
                <div className="textandsocial">
                    <div className="nameandDesc">
                        <p className="name">{image.alt_description}</p>
                        <p className="supportingText">{image.description}</p>
                        <div className="favAdd" onClick={favEkle}>
                    <FcLike/>
                    
                    </div>  
                    </div>
                   
                </div>                    
            </div>      
        </>
     );
}

export default ImageItem;