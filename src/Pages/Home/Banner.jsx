import React from 'react';
// import banner from '../../assets/Image/banner.webp';
// import banner_2 from '../../assets/Image/banner2.webp';
// import banner_3 from '../../assets/Image/banner3.webp';
import banner1 from '../../assets/Image/banner1.jpg'
import banner2 from '../../assets/Image/banner2.jpg'
import banner3 from '../../assets/Image/banner3.jpg'
import banner4 from '../../assets/Image/banner4.jpg'
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
            <section className="hero_banner">

                <Slider className='h-full overflow-hidden' {...settings}>
                    {
                        [banner1, banner2, banner3, banner4].map(bnr => (
                            <>
                                <div className='w-full'>
                                    <img
                                        src={bnr}
                                        alt='Banner image'
                                        className='w-full  h-[500px] object-fill'
                                    />
                                </div>
                            </>
                        ))
                    }

                </Slider>

            </section>
        </>
    );
};

export default Banner;
