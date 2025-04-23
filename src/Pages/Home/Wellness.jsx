import React from 'react'
import Heading from '../../Component/Heading'
import raw from '../../assets/Image/raw.svg'
import wellness from '../../assets/Image/wellness.svg'
import energy from '../../assets/Image/energy.svg'
import tru from '../../assets/Image/true.svg'
import easy from '../../assets/Image/easy.svg'
import only from '../../assets/Image/only.svg'



const Wellness = () => {
    const arr = [
        {
            image: raw,
            title: "Raw & Real",
            para: "Nature - Powered Solutions"
        },
        {
            image: wellness,
            title: "Customised Wellness",
            para: "Tailored Solutions bringing harmony and well-being"
        },
        {
            image: energy,
            title: "Energy Infused Solutions",
            para: "Aligns with the Energy of your Pet"
        },
        {
            image: tru,
            title: "True Balance",
            para: "Bring Harmony in Mind, Body and Spirit"
        },
        {
            image: easy,
            title: "Easy to Use",
            para: "Gentle can be Consumed or Applied on Skin"
        },
        {
            image: only,
            title: "Only the Best",
            para: "Ingredients Sourced from Across the World"
        },
    ]
    return (
        <>
            <section className='pb-5'>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <Heading title="Redefining Pet Wellness" subtitle="Offering one of a kind holistic well-being that nurtures your pets in all areas" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:gap-10 gap-5 mt-5">
                        {
                            arr.map((itm) => (
                                <>
                                    <div className="col-span-1 text-center ">
                                        <div className="group border border-[#B57EC1] rounded-[20px] md:p-6 p-4 text-center h-full hover:bg-[#502E7B] transition-all duration-300">
                                            <img src={itm.image} alt='image' className='mx-auto md:h-auto h-[70px] transform transition-transform duration-300 group-hover:scale-125' />
                                            {/* <div className="bgpurple rounded-[25px] p-4 w-[100px] h-[100px] mx-auto flex items-center justify-center rotate-[15deg]">
                                    <img src={raw} alt="image" className="-rotate-[15deg] w-[40px] h-[40px]" />
                                </div> */}
                                            <h2 className="text-[#502E7B] font-[700] lg:text-[28px] md:text-[20px] text-[16px] mt-4 group-hover:text-white transition-all">{itm.title}</h2>
                                            <p className="text-black font-[500] lg:text-[20px] md:text-[18px] text-[14px] mt-1 group-hover:text-[#FAEBEB] transition-all">{itm.para}</p>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wellness
