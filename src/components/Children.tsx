import React from 'react'

interface ChildrenProps{
    children:React.ReactNode;
}

const Children: React.FC<ChildrenProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export {Children}