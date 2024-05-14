import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import "./carousel.css"
function CarouselFlipkart(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className='carousel-style'
            >
                <img className='carousel-img' src="https://res.cloudinary.com/dzmwbkdtr/image/upload/v1715718544/carousel1_djtdog.jpg" alt="Image 1" />
                <img className='carousel-img' src="https://res.cloudinary.com/dzmwbkdtr/image/upload/v1715718546/carousel2_mueqjw.jpg" alt="Image 1" />
              
                <img className='carousel-img' src="https://res.cloudinary.com/dzmwbkdtr/image/upload/v1715718548/carousle3_vgseuz.jpg" alt="Image 1" />
                <img className='carousel-img' src="https://res.cloudinary.com/dzmwbkdtr/image/upload/v1715718546/carousel4_ruipcg.jpg" alt="Image 1" />
                <img className='carousel-img' src="https://res.cloudinary.com/dzmwbkdtr/image/upload/v1715718547/carousel5_seb8cj.jpg" alt="Image 1" />
                <img className='carousel-img' src="https://res.cloudinary.com/dzmwbkdtr/image/upload/v1715718548/carousel6_jwvzek.jpg" alt="Image 1" />
                
            </Carousel>
            
        </div>
    );
}

export default CarouselFlipkart;
