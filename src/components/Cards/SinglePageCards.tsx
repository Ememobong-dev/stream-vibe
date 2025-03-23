import React from 'react'

export const SinglePageCards = ({children, variant = ''}: {children: React.ReactNode; variant?: "" | "deepBlack"}) => {
  return (
    <div className={`text-white ${variant==="deepBlack" ? "bg-black-06 p-6": "bg-black-10 p-14"} border border-black-15 `}>
        {children}
    </div>
  )
}
