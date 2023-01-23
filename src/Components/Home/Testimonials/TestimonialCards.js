import React from 'react'


function TestimonialCards({ Img, description, name, position }) {
    return (
        <div className='shadow-md w-[395px] h-[319px] flex flex-col justify-between pl-[20px] pt-[22px] pb-[24px] rounded-[13px] hover:shadow-2xl'>
            <div>
                <img className='w-[64px] h-[64px] rounded-[100%]' src={Img} alt="Profile image" />
            </div>

            <div>
                <p className='font-[600] text-[20px] w-[325px] h-fit leading-[22px] text-[#000000]'>
                    {description}
                </p>
            </div>
            <div>
                <p>{name}</p>
                <p>{position}</p>
            </div>
        </div>
    )
}

export default TestimonialCards