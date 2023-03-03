import React from 'react'
import clsx from 'clsx'

interface ImageProps {
  src: string
  alt: string
}

function Image ({ src, alt }: ImageProps): JSX.Element {
  const ImageWrapperClasses = clsx('relative pt-[100%] block')

  return (
    <picture className={ImageWrapperClasses}>
      <img src={src} alt={alt} className="absolute w-full h-full inset-0 object-cover" />
    </picture>
  )
}

export default Image
