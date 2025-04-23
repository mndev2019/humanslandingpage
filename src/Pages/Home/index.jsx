import React from 'react'
import Banner from './Banner'

import Trending from './Trending'
import ReviewInsta from '../../Component/ReviewInsta'
import Remedies from './Remedies'
import Wellness from './Wellness'

const Home = () => {
    return (
        <>
           <Banner/>
           <Remedies/>
           <Wellness/>
           
           <Trending/>
           <ReviewInsta/>
        </>
    )
}

export default Home
