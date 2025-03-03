import React from 'react';
import banner from '../../assets/Image/banner.webp';
import banner2 from '../../assets/Image/banner2.webp';
import banner3 from '../../assets/Image/banner3.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,           // Enable autoplay
        autoplaySpeed: 3000,     // Slide change every 3 seconds
        pauseOnHover: true,      // Pause on hover
    };

    return (
        <>
            <section className="">
                <div>
                    <Slider {...settings}>
                        <div>
                            <img
                                src={banner}
                                alt='Banner image 1'
                                className='w-full lg:h-[500px] h-auto '
                            />
                        </div>
                        <div>
                            <img
                                src={banner2}
                                alt='Banner image 2'
                                className='w-full lg:h-[500px] h-auto '
                            />
                        </div>
                        <div>
                            <img
                                src={banner3}
                                alt='Banner image 3'
                                className='w-full lg:h-[500px] h-auto '
                            />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default Banner;
