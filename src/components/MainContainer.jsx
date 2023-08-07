import React from 'react'

function MainContainer({children}) {
  return (
    <div
      className="container mx-auto max-w-7xl bg-white p-4 pt-20 h-full">
      {children}
    </div>
  );}

export default MainContainer