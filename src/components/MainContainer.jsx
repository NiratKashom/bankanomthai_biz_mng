import React from 'react'

function MainContainer({children}) {
  return (
    <div
      className="container mx-auto max-w-60 bg-white p-4 h-5/6"
    >
      {children}
    </div>
  );}

export default MainContainer