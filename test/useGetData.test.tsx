import { renderHook } from '@testing-library/react-hooks'
import fetchMock from 'jest-fetch-mock'
import useGetData from '../hooks/useGetData'

beforeAll(() => {
  fetchMock.enableMocks()
})

afterAll(() => {
  fetchMock.disableMocks()
})

test('should fetch data and return it', async () => {
  const mockApiResponse = {
    products: [{ id: '1', productName: 'Test Product' }],
    pagination: {
      from: 0,
      size: 1,
      sortType: 1,
      total: 1
    }
  }

  fetchMock.mockResponseOnce(JSON.stringify(mockApiResponse))

  const { result, waitForNextUpdate } = renderHook(() => useGetData(1, 0))

  // check initial state
  expect(result.current.data).toEqual([])
  expect(result.current.totalPages).toEqual(1)

  // wait for data to be fetched
  await waitForNextUpdate()

  // check fetched data
  expect(result.current.data).toEqual(mockApiResponse.products)
  expect(result.current.totalPages).toEqual(1)
})
