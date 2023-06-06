import { FcLike } from "react-icons/fc";

function ImageItem({image}) {

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
            <div className="container">
                <div className="row text-center">
                    <div className="col m-4 .d-lg-flex"> 
                        
                        <div className="overly">
                            <img className="btnimg" onClick={favEkle} src={image.urls.small} alt={image.alt_description}/>
                            <div className="text"><FcLike/></div>
                        </div>     
                        </div>
                    </div>    
                </div>
            
        </>
     );
}

export default ImageItem;