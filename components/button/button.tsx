import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
}

const Button = ({ children, disabled = false, ...rest }: ButtonProps) => {
  const buttonClasses = (disabled: boolean) =>
    clsx(
      'block m-6 text-white bg-gray-500 border border-gray-500 rounded px-8 py-3 text-sm uppercase font-semibold tracking-wider transition duration-400 ease-in-out hover:bg-gray-600 hover:border-gray-600 focus:outline-none',
      {
        'opacity-70 cursor-normal hover:bg-gray-500': disabled
      }
    )

  return (
    <button disabled={disabled} {...rest} className={buttonClasses(disabled)}>
      {children}
    </button>
  )
}

export default Button
