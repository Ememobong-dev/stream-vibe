import React from 'react'

export const Tags = ({text}: {text: string}) => {
  return (
    <div className="flex justify-center items-center p-3 rounded-lg bg-black-06 border border-black-15">
    {text}
  </div>
  )
}
