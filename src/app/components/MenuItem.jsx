import Link from 'next/link'
import React from 'react'

export default function MenuItem({title,address,Icon}) {
  return (
    <div className="mx-4 lg:mx-6 hover:text-amber-600">
        <Link href={address} >
            <Icon className="text-2xl sm:hidden" />
            <p className="hidden md:inline my-2 text-sm">{title}</p>
        </Link>
    </div>
  )
}
