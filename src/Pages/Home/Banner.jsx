import React from 'react';
// import banner from '../../assets/Image/banner.webp';
// import banner_2 from '../../assets/Image/banner2.webp';
// import banner_3 from '../../assets/Image/banner3.webp';
import banner1 from '../../assets/Image/bannernew.png'
// import banner2 from '../../assets/Image/banner2.jpg'
// import banner3 from '../../assets/Image/banner3.jpg'
// import banner4 from '../../assets/Image/banner4.jpg'
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
            <section className="hero_banner banner ">

                <Slider className='h-full ' {...settings}>
                    {
                        [banner1, banner1, banner1].map(bnr => (
                            <>
                                <div className='w-full'>
                                    <img
                                        src={bnr}
                                        alt='Banner image'
                                        className='w-full   object-fill'
                                    // lg:h-[500px] h-auto
                                    />
                                </div>
                            </>
                        ))
                    }

                </Slider>

            </section>
            {/* <section className="hero_banner">
                <div className='w-full'>
                    <img
                        src={banner1}
                        alt='Banner image'
                        className='w-full   object-fill'

                    />
                </div>
            </section> */}
        </>
    );
};

export default Banner;
