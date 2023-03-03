import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Pagination from '../components/pagination'
import '@testing-library/jest-dom/extend-expect'

const mockPrevPage = jest.fn()
const mockNextPage = jest.fn()

let prevButton, nextButton

beforeEach(() => {
  const { getByText } = render(
    <Pagination
      page={1}
      totalPages={10}
      handlePrevPage={mockPrevPage}
      handleNextPage={mockNextPage}
    />
  )
  prevButton = getByText('Previous Page')
  nextButton = getByText('Next Page')
})

test('test the prevButton is diabled on page load if page count is 1', () => {
  expect(prevButton).toBeDisabled()
})

test('test that prevButton is not disabled after clicking nextButton', () => {
  fireEvent.click(nextButton)
  expect(prevButton).toHaveAttribute('disabled', '')
})
