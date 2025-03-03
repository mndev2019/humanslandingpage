import React from 'react'
import usp1 from '../../assets/Image/usp1.webp'
import usp2 from '../../assets/Image/usp2.webp'
import usp3 from '../../assets/Image/usp3.webp'
import img1 from '../../assets/Image/img1.webp'
import img2 from '../../assets/Image/img2.webp'
import img3 from '../../assets/Image/img3.webp'
import img4 from '../../assets/Image/img4.webp'

const USP = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 pb-3">
                        <div className="col-span-1">
                            <div className="w-full">
                                <h2 className='text-black text-center md:text-[40px] text-[25px] font-[700]'>
                                    USP
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                        <div className="col-span-1">
                            <div className="w-full bg-[#ffe5d6] p-[30px] rounded-[20px]">
                                <div className="flex justify-between items-center">
                                    <div className="text">
                                        <p className='text-black text-[20px] font-[900]'>
                                            Save 35%
                                        </p>
                                        <p className='text-[#666] text-[18px] font-[500]'>
                                            On you first repeat delivery order
                                        </p>
                                    </div>
                                    <div className="icon">
                                        <img src={usp1} className='' alt='image' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full bg-[#f2e0ff] p-[30px] rounded-[20px]">
                                <div className="flex justify-between items-center">
                                    <div className="text">
                                        <p className='text-black text-[20px] font-[900]'>
                                            Latest Deals
                                        </p>
                                        <p className='text-[#666] text-[18px] font-[500]'>
                                            Save up to $399/year
                                        </p>
                                    </div>
                                    <div className="icon">
                                        <img src={usp2} className='' alt='image' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full bg-[#dff5fa] p-[30px] rounded-[20px]">
                                <div className="flex justify-between items-center">
                                    <div className="text">
                                        <p className='text-black text-[20px] font-[900]'>
                                            Top Rate Products
                                        </p>
                                        <p className='text-[#666] text-[18px] font-[500]'>
                                            Recommended pet favourites
                                        </p>
                                    </div>
                                    <div className="icon">
                                        <img src={usp3} className='' alt='image' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-10 gap-4">
                        <div className="col-span-1">
                            <div className="w-full">
                                <img src={img1} alt='image' className='w-full'/>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <img src={img2} alt='image' className='w-full'/>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <img src={img3} alt='image' className='w-full'/>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <img src={img4} alt='image' className='w-full'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default USP
