export interface Item {
  id: string
  cultureCode: string
  slug: string
  sku: string
  productName: string
  brand: {
    externalId: string
    slug: string
    name: string
    brandImage: {
      url: string
      priority: number
    }
  }
  defaultCategory: {
    externalId: string
    slug: string
    name: string
    isDefault: boolean
    ancestors: any[]
  }
  image: {
    externalId: string
    url: string
    priority: number
    isDefault: boolean
    attributes: any
  }
  isDefaultVariant: boolean
  price: {
    currencyCode: string
    priceIncTax: number
    priceExcTax: number
    isOnPromotion: boolean
  }
  questionsCount: number
  reviewsCount: number
  score: number
  stockStatus: {
    status: string
  }
  isApproved: boolean
  isShownOnTv: boolean
  isBestSeller: boolean
  isFreeWaste: boolean
  isPremium: boolean
}

export interface ApiResponse {
  products: Item[]
  pagination: {
    from: number
    size: number
    sortType: number
    total: number
  }
}
