import React, { FC, FormEvent, ReactNode } from 'react'

interface InputFromProps{
    className?: string;
    children: ReactNode
    onSubmit: (e:FormEvent<HTMLFormElement | HTMLFormElement>) => void
}

const InputForm: FC<InputFromProps> = ({
    className,
    children,
    onSubmit
}) => {
  return (
    <form action="" className={`${className}`} onSubmit={onSubmit}>
        {children}
    </form>
  )
}

export {InputForm}
