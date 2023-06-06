import ImageItem from "./ImageItem";

function ImageList({imagesPlaceholder}) {
    return ( 
        <>
        <div>
            <div className="imagelist">
                {imagesPlaceholder.map((image, index) => {
                   return <ImageItem  className="item" key={index} image={image}/>
                })}
                
            </div>
            
        </div>
        
        </>
     );
}

export default ImageList;