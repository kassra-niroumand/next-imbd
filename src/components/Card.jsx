import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PropTypes from 'prop-types'
import {FiThumbsUp} from "react-icons/fi"


export default function Card({result}) {
  return (
    <div 
      className='group cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border-slate-400 sm:m-2 transition-shadow duration'>
        <Link href={`/movie/${result.id}`}>
          <Image src={"/image22.jpg"} width={500} height={300}
          placeholder='blur'
          blurDataURL='/spinner.svg'
          className='group-hover:opacity-80 transition-opacity duration-200 rounded-t-lg'
          alt="image not found"
          style={
            {
              maxWidth:"100%",
              height:"auto"
            }
          }
          />
          <div className="p-2">
            <p className='line-clamp-2 text-md'>
              {result.overview}
            </p>
            <h2 className='truncate text-lg font-bold'>{result.title || result.name}</h2>
            <p className='flex space-x-5 items-center'>
              {result.release_date || result.first_air_date}
              <FiThumbsUp className='h-5 mr-1 ml-3' /> {result.vote_count}
            </p>
          </div>
        </Link>
    </div>
  )
}

Card.propTypes = {
  result: PropTypes.shape({
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    adult: PropTypes.bool,
    vote_count: PropTypes.number
  }),
}
