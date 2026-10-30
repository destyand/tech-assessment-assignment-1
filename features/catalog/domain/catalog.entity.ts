export type CatalogType = {
    id: number | string
    name: string
    tag: string
    brand: string
    type: string
    storage: {
        capacity: number
        unit: string
    }
    price: {
        amount: number
        currency: {
            code: string
            symbol: string
        }
    }
    color: string
    image: string
}