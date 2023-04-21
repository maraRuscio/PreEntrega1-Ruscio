import React from 'react'
import img1 from '../../img/img-1.jpg'
import img2 from '../../img/img-2.jpg'
import img3 from '../../img/img-3.jpg'
import img4 from '../../img/img-4.jpg'

function CarouselComponent() {
    return(
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="Imagen de fabrica 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="Imagen de fabrica 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="Imagen de fabrica 3" />
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100" alt="Imagen de fabrica 4" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarouselComponent;