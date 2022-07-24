import React from 'react'

const Header = ({handleDarkMode}) => {
    return (
        <div className="header">
            <h1 className="heading">Write Your Notes ....</h1>
            {/* <button className="save toggle" onClick={()=>{
                document.getElementById("add_note").scrollIntoView({ behavior: "smooth" });
            }}>
            Add Note      
            </button> */}
            {/* <h3>Grid Layout Change</h3>
            <input type="range" onChange={(e)=>{
                console.log(e.target.value);
            }}/> */}
            <button className="save toggle" onClick={()=>
            handleDarkMode((previousDarkMode)=>!previousDarkMode)}>
            
            Toggle
                    
            </button>
        </div>
    )
}

export default Header
