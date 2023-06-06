import ImageItem from "./ImageItem";

function ImageList({imagesPlaceholder}) {
    return ( 
        <>
          <div className="container">
                <div className="row align-items-start">
                    <div className="col"> 
                        
                            {imagesPlaceholder.map((image, index) => {
                                
                                    return <ImageItem  className="ali" key={index} image={image}/>
                                
                            })}
                            
                        
                </div>
                </div>    
            </div>
        
        </>
     );
}

export default ImageList;