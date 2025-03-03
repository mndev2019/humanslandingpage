import React from 'react'
// import dogprint from '../../assets/Image/foot-print.png'
import dogprint from '../../assets/Image/pets.png'
import Product from './Product'

const Trending = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full">
                                <img src={dogprint} alt='image' className='h-[50px] mx-auto' />
                                <h2 className='text-black text-center md:text-[40px] text-[25px] font-[700]'>
                                    Trending This Week
                                </h2>
                                <p className='cursive textpurple text-center md:text-[40px] text-[25px]'>
                                    For pet season
                                </p>
                            </div>
                        </div>
                    </div>
                    <Product />
                </div>
            </section>
        </>
    )
}

export default Trending
