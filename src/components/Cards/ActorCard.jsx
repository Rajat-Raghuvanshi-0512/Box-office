import React from 'react'
import { Link } from 'react-router-dom'

const ActorCard = ({ name, birthday, image, gender, isDead, id }) => {
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image ? image : `https://dummyimage.com/720x400`} alt="blog" />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Name</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{name}</h1>
                    <div className="leading-relaxed mb-3">
                        <span className='font-semibold'>Birthday: </span>
                        {birthday ? birthday : "No information"}
                    </div>
                    <div className="flex items-center flex-wrap ">
                        <Link to={`/actor/${id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            {gender}
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            {isDead ? "Dead" : "Alive"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActorCard