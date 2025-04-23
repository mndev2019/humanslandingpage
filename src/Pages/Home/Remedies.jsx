import React from 'react'
import Heading from '../../Component/Heading'
import remedies1 from '../../assets/Image/remedies1.png'
import remedies2 from '../../assets/Image/remedies2.png'
import remedies3 from '../../assets/Image/remedies3.png'

const Remedies = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="grid grid-cols-1">
                   <div className="col-span-1">
                    <Heading title="Remedies Solutions"/>
                   </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                   <div className="col-span-1">
                      <img src={remedies1} className='w-full'/>
                   </div>
                   <div className="col-span-1">
                      <img src={remedies2} className='w-full'/>
                   </div>
                   <div className="col-span-1">
                      <img src={remedies3} className='w-full'/>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Remedies
