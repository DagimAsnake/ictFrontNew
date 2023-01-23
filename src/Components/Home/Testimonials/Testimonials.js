import React, { useState } from 'react'
import TestimonialCards from './TestimonialCards'
import profile from "./profile.jpg"

function Testimonials() {
    const [data, setData] = useState({
        payload: [
            {
                id: 1,
                profile: profile,
                description: "“Excellent support for a tricky issue related to our customization of the tempelate”",
                name: "Mr. Kebede",
                position: "Redfox CEO"
            },
            {
                id: 2,
                profile: profile,
                description: "“Excellent support for a tricky issue related to our customization of the tempelate”",
                name: "Mr. Kebede",
                position: "Redfox CEO"
            },
            {
                id: 3,
                profile: profile,
                description: "“Excellent support for a tricky issue related to our customization of the tempelate”",
                name: "Mr. Kebede",
                position: "Redfox CEO"
            }
        ]
    })
    return (
        <div className="mt-[83px] flex flex-col mb-[171px]">
            <div>
                <p className='font-[300] text-[36px] leading-[22px] underline mb-[16px] text-center text-[#00000094]'>Testimonials</p>
                <p className='font-[300] text-[40px] text-[#4879F5] text-center'>Client Feedback</p>
                <p className='font-[300] text-[20px] text-[#4879F5] text-center mb-[56px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut consequuntur magni dolores.</p>
            </div>

            <div className='grid grid-cols-3 pl-[99px]'>
                {
                    data.payload.map((d) => (
                        <TestimonialCards key={d.id} Img={d.profile} description={d.description} name={d.name} position={d.name} />
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials