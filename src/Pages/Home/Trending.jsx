import React, { useRef } from 'react'
import Heading from '../../Component/Heading'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import evil from '../../assets/Image/evil.svg'
// import anxiety from '../../assets/Image/anxiety.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5'
import axios from 'axios'
import { APP_URL, BASE_URL } from '../../Apis'

const Trending = () => {
    const [products, setProducts] = React.useState([]);
    const getproducts = async () => {
        const resp = await axios.get(BASE_URL + "products");
        setProducts(resp.data.data.data);
    }
    const viewDetails = (url) => {
        window.location.href = APP_URL + "products/" + url;
    }
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1094, // tablets
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768, // mobile landscape
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480, // mobile portrait
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    const addtoCart = async (e, id) => {
        e.preventDefault();
        // e.stopPropagation();
        const resp = await axios.post(BASE_URL + "add_to_cart", { id: id, table: "products" });
        console.log(resp);
    }
    // const trend = [
    //     {
    //         image: evil,
    //         title: "Evil Eye Spray",
    //         quantity: "200ML",
    //         price: "14,000"
    //     },
    //     {
    //         image: anxiety,
    //         title: "Anti Anxiety Remedy",
    //         quantity: "30ML",
    //         price: "14,000"
    //     },
    //     {
    //         image: evil,
    //         title: "Evil Eye Spray",
    //         quantity: "200ML",
    //         price: "14,000"
    //     },
    //     {
    //         image: anxiety,
    //         title: "Anti Anxiety Remedy",
    //         quantity: "30ML",
    //         price: "14,000"
    //     },
    // ];
    React.useEffect(() => {
        getproducts();
    }, []);
    return (
        <>
            <section className='pb-5'>
                <div className="container ">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 flex justify-between items-center">
                            <div className="">
                                <Heading title="Trending this Week" />
                            </div>
                            <div>
                                <a href='https://www.humansofanimalland.com/shop' className='text-[#B57EC1] text-[18px] font-[600] flex items-center gap-1'>
                                    View all <FaArrowRight />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 relative">
                        <Slider
                            ref={slider => {
                                sliderRef = slider;
                            }}
                            {...settings}
                        >
                            {products.map((itm, index) => (
                                <div onClick={() => viewDetails(itm.url)} key={index} className="px-2 cursor-pointer ">
                                    <div className="w-full h-full overflow-hidden  border border-[#B57EC1] rounded-[8px] p-4 flex flex-col items-center text-center ">
                                        <img
                                            src={APP_URL + "public/assets/images/" + itm.images[0].image}
                                            alt={itm.title}
                                            className="max-w-full object-contain mb-4 scale-110"
                                        />

                                        <h2 className="font-[700] md:text-[18px]   text-[16px] textpurple mb-1 title">
                                            {itm.title}
                                        </h2>

                                        <ul className="textpurple md:text-[14px] text-[12px] leading-[1.4] mb-1">
                                            <li>

                                            </li>
                                        </ul>

                                        <p className="textpurple font-[700] md:text-[14px] text-[12px] mt-1 mb-2">
                                            100ml
                                        </p>

                                        <div className="flex items-center justify-center textpurple mb-2">
                                            <span className="flex textpurple text-[18px] mr-1">
                                                {'★★★★★'}
                                            </span>
                                            <span className="text-[14px] text-[#B57EC1]">(25 Reviews)</span>
                                        </div>

                                        <p className="text-black font-semibold lg:text-[20px] md:text-[18px] text-[16px] mb-4">
                                            {itm.currency} {itm.price}
                                        </p>

                                        <button onClick={(e) => addtoCart(e, itm.id)} className="bgpurple cursor-pointer text-white w-[80%] px-8 py-2 rounded-full text-[16px] font-semibold hover:bg-[#72349e] transition-all">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <div style={{ textAlign: "center" }} className='flex'>
                            <button className="button bgpurple h-[30px] w-[30px] rounded-full justify-center items-center flex absolute top-[50%] left-[-28px]" onClick={previous}>
                                <IoArrowBackOutline className='text-white text-lg' />
                            </button>
                            <button className="button  bgpurple h-[30px] w-[30px] rounded-full justify-center items-center flex absolute top-[50%] right-[-28px]" onClick={next}>
                                <IoArrowForwardOutline className='text-white text-lg' />
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Trending
