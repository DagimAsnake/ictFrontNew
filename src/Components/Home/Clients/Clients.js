import React, { useState } from 'react'
import Circleimg from './Circleimg'

import socialone from "./socialone.jpg"
import socialtwo from "./socialtwo.jpg"
import socialthree from "./socialthree.jpg"
import insta from "./insta.jpg"
import instagram from "./instagram.jpg"

function Clients() {
    const [data, setData] = useState({
        payload: [
            {
                id: 1,
                profile: socialone
            },
            {
                id: 2,
                profile: socialtwo
            },
            {
                id: 3,
                profile: socialthree
            },
            {
                id: 4,
                profile: insta
            },
            {
                id: 5,
                profile: instagram
            },
        ]
    })
    return (
        <div className='mb-[219px]'>
            <div>
                <p className='text-[36px] font-[300] leading-[22px] text-center underline mb-[56px] text-[#00000094]'>Clients</p>
            </div>

            <div className='grid grid-cols-5 pl-[178px] h-[198px] bg-[#d9d9d92e] items-center'>
                {
                    data.payload.map((d) => (
                        <Circleimg key={d.id} profile={d.profile} />
                    ))
                }
            </div>

        </div>
    )
}

export default Clients