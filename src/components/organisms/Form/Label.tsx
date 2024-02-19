import React, { FC, ReactNode } from 'react'

interface LabelProps{
    className?: string
    children?: ReactNode
    htmlFor?: string
}

const Label:FC<LabelProps> = ({
    className,
    children,
    htmlFor
}) => {
  return (
    <label htmlFor={htmlFor} className={className}>
        {children}
    </label>
  )
}

export {Label}
