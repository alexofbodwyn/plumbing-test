import { Item, ApiResponse } from '../types/interfaces';

const fetchData = async (sort: number, page: number) => {
  try {
    const response = await fetch('https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI', {
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
    });
    const responseData: ApiResponse = await response.json();
    const data = responseData.products;
    const totalPages = Math.ceil(responseData.pagination.total / responseData.pagination.size);
    return { data, totalPages };
  } catch (error) {
    console.error(error);
    return { data: [], totalPages: 0 };
  }
};

export default fetchData;
