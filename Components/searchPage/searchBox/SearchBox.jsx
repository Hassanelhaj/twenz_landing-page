import React from 'react'
import SearchInput from './SearchInput'
import SearchResult from './SearchResult'

const SearchBox = () => {
  return (
    <main className='container mx-auto  flex flex-col justify-center items-center gap-4 mt-4 p-4'>
        <section><SearchInput/></section>
        <section><SearchResult/></section>
    </main>
  )
}

export default SearchBox