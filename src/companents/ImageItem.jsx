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
console.log(image)
    
    return ( 
        <>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col">
                        <div className="card">
                            <img className="imagelistimg card" src={image.urls.small} alt={image.alt_description}/>
                            <div className="card-body">
                                <h5 className="card-tittle">{image.description}</h5>
                                <button className="btn" onClick={favEkle}><FcLike/></button>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </>
     );
}

export default ImageItem;