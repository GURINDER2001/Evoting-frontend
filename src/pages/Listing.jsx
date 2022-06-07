import React from 'react'
import { Link } from 'react-router-dom'

const Listing = () => {
    return (
        <div className='p-24'>
            <div className="flex">
                <div className="border-2 w-3/12 m-5 p-5 border-slate-100 rounded-lg shadow-lg">
                    <h1 class="text-2xl font-bold text-dark-blue">
                        How many hours a day do you spend online?
                    </h1>

                    <small className='text-slate-400 mt-5'>For youth on the high end of the scale, spending this much time with media—online and offline—robs them of real-world experiences and may result in lower grades, increase their risk for depression, cut into the time needed for sleep, and more...</small>
                    <div className='text-yellow text-sm mt-5 flex justify-between'>
                        <span className='self-center'>10+ people voted</span>
                        <button className='bg-dark-blue py-2 px-4 rounded text-white border-2 font-medium' style={{ borderColor: '#2A4F96' }} ><Link to={'/poll/'+12}>Join vote</Link></button>

                    </div>
                </div>
                <div className="border-2 w-3/12 m-5 p-5 border-slate-100 rounded-lg shadow-lg">
                    <h1 class="text-2xl font-bold text-dark-blue">
                        Who will be CR for CSE-1 (BATCH 2019- 2023)?
                    </h1>

                    <small className='text-slate-400 mt-5'>Class representative or CR is a person in a batch who serves as a bridge between the professor and the students. The position in a batch who serves as a bridge between the professor and the studentsof CR has its own importance in university or college...</small>
                    <div className='text-yellow text-sm mt-5 flex justify-between'>
                        <span className='self-center'>10+ people voted</span>
                        <button className='bg-dark-blue py-2 px-4 rounded text-white border-2 font-medium' style={{ borderColor: '#2A4F96' }} >Join vote</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listing