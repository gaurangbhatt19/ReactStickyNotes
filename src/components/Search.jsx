import React from 'react'
import { MdSearch } from 'react-icons/md'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import {atomDate} from '../recoiljs/atoms'
import {selectorDate} from "../recoiljs/selectAtoms"

const Search = ({handleSearchNote}) => {
    const setDateValue=useSetRecoilState(atomDate)
    var date=useRecoilValue(selectorDate)
    return (
        <div className="search">
        <div className="search_bar">
          <MdSearch classsName="search_icon" size="1.3rem"/>
          <input onChange={(event)=>{
              handleSearchNote(event.target.value);
          }} type="text" placeholder="Search Notes........"></input>
          
        </div>
        <input type="date" className="search_by_date" onChange={(e)=>{
            setDateValue(e.target.value);
            console.log(date, typeof date)
        }}/>
        </div>
    )
}

export default Search
