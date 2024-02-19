import React, { FC, ReactNode } from 'react'

interface ErrorMessageProps{
    className?: string
    children?: ReactNode
}

const ErrorMessage: FC<ErrorMessageProps> = ({
    className,
    children
}) => {
  return (
    <p className={`text-red-500 ${className}`}>
        {children}
    </p>
  )
}

export {ErrorMessage}
