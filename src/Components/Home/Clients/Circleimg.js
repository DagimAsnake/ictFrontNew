import React from 'react'

function Circleimg({ profile }) {
    return (
        <div>
            <img className='w-[110px] h-[110px] rounded-[55px]' src={profile} />
        </div>
    )
}

export default Circleimg