import React from 'react'

const FixedHeader = ({children}) => {
  return (
    <>
    <div className="fixed_header">
    {children}
    </div>
    </>
  )
}

export default FixedHeader