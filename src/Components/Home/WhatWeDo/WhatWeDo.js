import constImage from "./constImage.svg"
import ictImage from "./ictImage.svg"
import invImage from "./invImage.svg"
import securityImg from "./securityImg.svg"
import Services from "./Services"
import { useState } from "react"


function WhatWeDo() {
    const [data, setData] = useState({
        seed: [
            {
                id: 1,
                title: "Mentenance Service",
                description: "Et harum quidem as rerum facilis us est et distinctio nam libero temp soluta nobis",
                img: ictImage
            },
            {
                id: 2,
                title: "Construction Service",
                description: "Et harum quidem as rerum facilis us est et distinctio nam libero temp soluta nobis",
                img: constImage
            },
            {
                id: 3,
                title: "Investor Followup Service",
                description: "Et harum quidem as rerum facilis us est et distinctio nam libero temp soluta nobis",
                img: invImage
            },
            {
                id: 4,
                title: "Security Service",
                description: "Et harum quidem as rerum facilis us est et distinctio nam libero temp soluta nobis",
                img: securityImg
            },

        ]
    })
    return (

        <div className="">
            <div className="flex flex-col items-center mt-[225px]">
                <h1 className="font-[300] text-[36px] leading-[22px] text-[#00000094] underline mb-[30.5px]">What We Do ?</h1>
                <p className="font-[300] text-[40px] leading-[42px] text-[#4879F5] mb-[81px] w-[865px] text-center">The things that motivates us is common form of motivation</p>
            </div>

            <div className="grid grid-cols-4 pl-[52px]">
                {data.seed.map((d) => (
                    < Services key={d.id} img={d.img} title={d.title} description={d.description} />
                ))}
            </div>

        </div>
    )
}

export default WhatWeDo;