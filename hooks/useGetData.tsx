import { useState, useEffect } from 'react'
import { Item, ApiResponse } from '../types/interfaces'

const useGetData = (sort: number, page: number) => {
  const [data, setData] = useState<Item[]>([])
  const [totalPages, setTotalPages] = useState<number>(1)

  useEffect(() => {
    fetch('https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: 'toilets',
        pageNumber: page,
        size: 30,
        additionalPages: 0,
        sort
      })
    })
      .then(async response => await response.json())
      .then((data: ApiResponse) => {
        setData(data.products)
        setTotalPages(Math.ceil(data.pagination.total / data.pagination.size))
      })
      .catch(error => console.error(error))
  }, [sort, page])

  return { data, totalPages }
}

export default useGetData
