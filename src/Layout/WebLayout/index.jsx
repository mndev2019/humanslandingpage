import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const WebLayout = () => {
    return (
        <>
            <div>
                <Header />
                <main>
                    {<Outlet />}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default WebLayout
