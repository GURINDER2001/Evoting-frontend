import React from 'react'
import BlockchainBanner from '../components/home/blockchainBanner'
import Landing from '../components/home/Landing'

const Home = () => {
    return (
        <div>
            <Landing />
            <BlockchainBanner />
            <div className="flex px-24 py-32 justify-center text-center">
                <div className="flex-1 ">
                    <div className='rounded-full h-80 w-80 p-12 border-sky-800 border-4  mx-auto border-dashed center'>
                        <img src="/2.png" width={'90%'} className='self-center mx-auto ' alt="Photo" />
                    </div>
                    <h1 class="text-2xl font-bold text-dark-blue mt-4">
                        ACCURATE
                    </h1>
                </div>
                <div className="flex-1 ">
                    <div className='rounded-full h-80 w-80 py-12 border-sky-800 border-4  mx-auto border-dashed'>
                        <img src="/1.png" className='self-center' style={{ minWidth: '100%' }} alt="Photo" />
                    </div>
                    <h1 class="text-2xl font-bold text-dark-blue  mt-4">
                        EFFIECIENT
                    </h1>
                </div>
                <div className="flex-1 ">
                    <div className='rounded-full h-80 w-80 p-12 border-sky-800 border-4  mx-auto border-dashed'>
                        <img src="/4.png" width={'90%'} className='self-center  mx-auto' alt="Photo" />
                    </div>
                    <h1 class="text-2xl font-bold text-dark-blue  mt-4">
                        SECURE
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Home