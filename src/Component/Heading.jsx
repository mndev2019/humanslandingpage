import React from 'react'

const Heading = (props) => {
    return (
        <>
            <h2 className='textpurple font-[700] lg:text-[30px] md:text-[25px] text-[18px] '>
                {props.title}
            </h2>
            <p className='font-[500] lg:text-[20px] md:text-[18px] text-[14px] text-black'>
                {props.subtitle}
            </p>
        </>
    )
}

export default Heading
