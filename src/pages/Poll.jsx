import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import voteService from '../voteService'

const Poll = () => {
    const params = useParams()
    const [pollData, setPollData] = useState({})
    const [selected, setSelected] = useState(null)
    const [voted, setVoted] = useState(false)
    useEffect(async () => {
        setPollData(await voteService.getPollDataById(params.id))
        const alreadyVoted = localStorage.getItem('vote-'+params.id)
        if(alreadyVoted){
        setVoted(true)
        }
    }, [params.id])

    function select(id) {
        if(!voted){
            setSelected(id);
        }
    }
    function deselect() {
        if(!voted){
        setSelected(null);
        }
    }
    async function castVote() {
        let data = {
            userId: 123,
            pollId: params.id,
            optionId: selected
        }
        const resp =  await voteService.castVote(data);
        if(resp){
            setVoted(1);
            localStorage.setItem('vote-'+params.id, true)
        }
    }

    return (
        <div className='p-24'>
            {pollData ? <div className="flex">
                <div className="w-7/12">
                    <h1 className='text-3xl font-bold text-dark-blue'>{pollData.title}</h1>
                    <p className='text-slate-400 py-5'>
                        {pollData.description}
                    </p>
                    {false ? <div className='text-yellow font-bold'>Result Declared</div> :
                        <div className='text-dark-blue font-bold'>Result Declaration : <span className='text-yellow'>{pollData.result_date}</span></div>}
                </div>
                <div className="w-5/12 flex flex-col">
                    {pollData && pollData.pollOption && pollData.pollOption.map((opt, i) => {
                        return (
                            selected == opt.id ?
                                <div className=' px-5 py-3 mt-3 border-2 border-blue-700 bg-blue-100 font-bold  rounded-lg shadow text-blue-700' onClick={deselect}  >
                                    <span className='pr-4' >{i + 1}.</span>
                                    <span>{opt.title}</span>
                                </div>
                                :
                                <div className=' px-5 py-3 mt-3 border-2 border-slate-200  rounded-lg shadow text-slate-400' onClick={() => select(opt.id)}  >
                                    <span className='pr-4' >{i + 1}.</span>
                                    <span>{opt.title}</span>
                                </div>
                        )
                    })}

                    <div className="text-center">
                    {!voted ?  <button className='bg-dark-blue py-2 px-12 rounded text-white mx-auto font-medium mt-12 disabled:opacity-75 ' disabled={!selected} onClick={castVote} >CAST VOTE</button>
                        :<button className='bg-dark-blue py-2 px-12 rounded text-white mx-auto font-medium mt-12 disabled:opacity-75 ' disabled={true} onClick={castVote} >ALREADY VOTED</button>
                }
                    </div>


                </div>
            </div>
                :
                <div className="flex justify-center">
                    <div>
                        <h1 className='text-3xl font-bold text-slate-300'>OOPS! NO POLL FOUND</h1>
                        <div className="text-center">
                            <button className='bg-dark-blue py-2 px-12 rounded text-white mx-auto font-medium mt-12 '  >RETURN TO HOME</button>
                        </div>
                    </div>

                </div>}
        </div>
    )
}

export default Poll