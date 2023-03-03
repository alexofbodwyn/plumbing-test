import React, { ReactNode } from 'react'
import clsx from 'clsx'

interface GridProps {
  children: ReactNode
  columns?: number
}

function Grid ({ children, columns }: GridProps) {
  const gridClasses = clsx(
    'grid grid-cols-1 sm:grid-cols-2 gap-5 m-auto w-full',
    {
      'md:grid-cols-2': columns === 2,
      'md:grid-cols-3': columns === 3,
      'md:grid-cols-4': columns === 4
    }
  )

  return <div className={gridClasses}>{children}</div>
}

export default Grid
