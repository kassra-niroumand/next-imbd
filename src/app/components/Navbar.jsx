import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className="flex justify-center items-center mx-auto dark:bg-gray-600 bg-amber-100 lg:text-lg p-4" >
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top rated" param="fetchTopRated" />
    </div>
  )
}