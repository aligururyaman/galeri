
import ImageItem from "./ImageItem";

function ImageList({imagesPlaceholder}) {
    return ( 
        <>
            <section className="imagesShow">
                <div className="containerImg">
                    <div className="contentImg">    
                        {imagesPlaceholder.map((image, index) => {    
                             return <ImageItem  className="imagesOne" key={index} image={image}/>    
                        })}
                    </div>
                </div>
            </section>
        </>
     );
}

export default ImageList;