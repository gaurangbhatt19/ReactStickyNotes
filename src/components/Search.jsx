import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({handleSearchNote}) => {
    return (
        <div className="search_bar">
          <MdSearch classsName="search_icon" size="1.3rem"/>
          <input onChange={(event)=>{
              handleSearchNote(event.target.value);
          }} type="text" placeholder="Search Notes........"></input>
            
        </div>
    )
}

export default Search
