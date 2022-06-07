import React, { useState } from 'react'

import { useHistory, useLocation } from 'react-router';
const Landing = () => {
    const route = useHistory();
    const location= useLocation();
    const [pollID, setPollID] = useState('')
    function routeToPoll(){
        route.push('/poll/'+pollID)
    }
  return (
    <div className='flex p-24'>
    <div className='flex-1'>
        <p className='text-6xl font-medium text-gray-400 tracking-wide'>
            A  Platform<br /> where <br /> <span className='text-7xl font-bold  text-yellow'>OPINION</span> <br />matters
        </p>
        <div>
            <input type="text" className='px-4 py-2 placeholder-slate-300 text-slate-600 bg-white  border-2 border-r-0 mt-20  outline-none focus:outline-none focus:ring w-4/12 rounded-l'value={pollID} onChange={(e)=>setPollID(e.target.value)} placeholder='abc-pqrs-xyz' />
            <button className='bg-dark-blue py-2 px-4 rounded-r text-white border-2 font-medium disabled:opacity-75' style={{ borderColor: '#2A4F96' }} disabled={!pollID} onClick={routeToPoll} >Start Vote</button>
        </div>
    </div>
    <div className='flex-1 pt-24'>
        <img src="/home-banner.jpg" alt="Photo" />
    </div>
</div>
  )
}

export default Landing