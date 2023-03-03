import React from 'react'
import { Item } from '../../types/interfaces'
import Image from '../image'

interface ProductCardProps {
  item: Item
}

function ProductCard ({ item }: ProductCardProps): JSX.Element {
  const truncateProductName = item.productName.slice(0, 46)
  const displayProductName = item.productName.length > 46 ? `${truncateProductName}...` : truncateProductName

  return (
    <article className='flex flex-col bg-white'>
      <Image src={item.image.url} alt={item.productName} />

      <section className='bg-white p-4 flex flex-col'>
        <h2 className='text-md'>{displayProductName}</h2>
        <p className='text-red-700 text-2xl font-bold mt-2'>
          {item.price.priceIncTax} {item.price.currencyCode}
        </p>
      </section>
    </article>
  )
}
export default ProductCard
