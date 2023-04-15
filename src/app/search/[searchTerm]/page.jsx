import Results from '@/components/Results'
import React from 'react'

export default async function Search({params}) {
    const searchTerm = params.searchTerm
    const uri =
     `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&include_adult=false&query=${searchTerm}`
    
     const res = await fetch(uri)

     if (!res.ok) {
        throw new Error("error fetching data")
     }

     const data = await res.json()

     const results = data.results
     console.log(results);
    

     return (
        <div>
        { results && results.length === 0 && (<h1 className='text-center pt-6'>no results found</h1>)  }
        { results && <Results results={results} /> }
        </div>
  )
}
 