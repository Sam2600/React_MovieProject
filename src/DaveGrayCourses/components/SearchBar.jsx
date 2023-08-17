import React from 'react'

const SearchBar = ({change}) => {
  return (
    <div className='my-10'>
        <input type="search" onChange={change} className='p-1 px-2 w-52 border shadow-md' placeholder='search profiles' />
    </div>
  )
}

export default SearchBar