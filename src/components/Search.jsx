import React,{useState} from 'react'
import { MdSearch } from 'react-icons/md'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import {atomDate} from '../recoiljs/atoms'


const Search = ({handleSearchNote}) => {
    const setDateValue=useSetRecoilState(atomDate)
    const [dateHTML,setHTMLDateValue]=useState("")
    // var date=useRecoilValue(selectorDate)


    return (
        <div className="search">
        <div className="search_bar">
          <MdSearch className="search_icon" size="1.3rem"/>
          <input onChange={(event)=>{
              handleSearchNote(event.target.value);
          }} type="text" placeholder="Search Notes........"></input>
          
        </div>
        <input type="date" className="search_by_date" value={dateHTML} onChange={(e)=>{
            setHTMLDateValue(e.target.value)
            if(e.target.value!==""){
                const [year,month,day]=e.target.value.toString().split("-")
            const dateValue=new Date(year,parseInt(month)-1,day)
            setDateValue(dateValue.toString().split(" ").splice(0,4).join(" "));
            }else{
                setDateValue("")
            }
            
        }}/>

        </div>
    )
}

export default Search
