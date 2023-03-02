import React from 'react'
import { Link } from 'react-router-dom'

const GalBack = () => {
    return(
        <>
         <div className="bg-neutral-50">
        <div className="text-3xl text-center text-blue-500 font-bold mb-20">
            Gallery
        </div>
        <Link
          to="/superadmin/gallery"
          className="w-60 mx-32 items-center text-center text-blue-500 rounded-lg hover:bg-blue-400 hover:text-white p-2 text-xl font-bold cursor-pointer tracking-wider border"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 inline-block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>{" "}
          Add Gallery
        </Link>

        <Link
          to="/superadmin/backImage"
          className="w-60 mx-32 items-center text-center text-blue-500 rounded-lg hover:bg-blue-400 hover:text-white p-2 text-xl font-bold cursor-pointer tracking-wider border"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 inline-block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>{" "}
          Add Background Image
        </Link>
        </div>
        </>
    )
}

export default GalBack