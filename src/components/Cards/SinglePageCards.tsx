import React from 'react'

export const SinglePageCards = ({children, variant = '', rounded}: {children: React.ReactNode; variant?: "" | "deepBlack" | "tags"; rounded? : boolean}) => {
  return (
    <div className={`text-white ${rounded ? "rounded-lg": ""} ${variant==="deepBlack" ? "bg-black-06 p-6": variant ==="tags" ? "p-3  rounded-lg bg-black-06 border border-black-15" : "bg-black-10 p-14"} border border-black-15 `}>
        {children}
    </div>
  )
}
