import React,{useState} from 'react'
import { MdSearch } from 'react-icons/md'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import {atomDate} from '../recoiljs/atoms'
import {selectorDate} from "../recoiljs/selectAtoms"

const Search = ({handleSearchNote}) => {
    const setDateValue=useSetRecoilState(atomDate)
    const [dateHTML,setHTMLDateValue]=useState("dd-mm-yyyy")
    var date=useRecoilValue(selectorDate)
    return (
        <div className="search">
        <div className="search_bar">
          <MdSearch classsName="search_icon" size="1.3rem"/>
          <input onChange={(event)=>{
              handleSearchNote(event.target.value);
          }} type="text" placeholder="Search Notes........"></input>
          
        </div>
        <input type="date" className="search_by_date" value={dateHTML} onChange={(e)=>{
            setHTMLDateValue(e.target.value)
            console.log(dateHTML)
            if(e.target.value!==""){
                const [year,month,day]=e.target.value.toString().split("-")
            const dateValue=new Date(year,parseInt(month)-1,day)
            setDateValue(dateValue.toString().split(" ").splice(0,4).join(" "));
            console.log(date, typeof date)
            }else{
                setDateValue("dd-mm-yyyy")
                console.log(date, typeof date)
            }
            
        }}/>
        </div>
    )
}

export default Search
