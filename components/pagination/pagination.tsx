import React from 'react'
import Button from '../button/button'

interface PaginationProps {
  page: number
  totalPages: number
  handlePrevPage: () => void
  handleNextPage: () => void
}

function Pagination ({ page, totalPages, handlePrevPage, handleNextPage }: PaginationProps) {
  return (
    <nav aria-label="Pagination">
      <ul className="flex flex-col sm:flex-row justify-center items-center pt-4">
        <li>
          <Button
            onClick={handlePrevPage}
            disabled={page === 1}
            aria-label="Go to previous page"
          >
            Previous Page
          </Button>
        </li>
        <li>
          <Button
            onClick={handleNextPage}
            disabled={page === totalPages - 1}
            aria-label="Go to next page"
          >
            Next Page
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
