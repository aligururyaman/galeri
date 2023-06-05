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
            <div>
                <div className="column">
                    <img className="imagelistimg card" src={image.urls.small} alt={image.alt_description}/>
                    <button className="btn" onClick={favEkle}>Fav Ekle</button>
                        

                    
                </div>
            </div>
        </div>
        
        </>
     );
}

export default ImageItem;