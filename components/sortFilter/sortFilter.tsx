import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

interface SortFilterProps {
  sort: number
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

function SortFilter ({ sort, handleSortChange }: SortFilterProps) {
  return (
    <div className='border border-stone-300 relative mb-2 inline-flex w-[250px]'>
      <label className='absolute top-2 left-4 text-xs text-stone-500' htmlFor="sort-filter">Sort by:</label>
      <select id="sort-filter" className='text-sm w-full px-4 pt-7 pb-2' value={sort} onChange={handleSortChange}>
        <option value="1">Recommended</option>
        <option value="2">Price high to low</option>
        <option value="3">Price low to high</option>
        <option value="4">Largest discount</option>
      </select>
      <FaAngleDown className='absolute top-1/2 transform -translate-y-1/2 right-4' />
    </div>
  )
}

export default SortFilter
