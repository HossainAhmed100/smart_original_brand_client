interface Variation {
    color: string;
    colorCode: string;
    colorImage: string;
    image: string;
}

export interface ProductType {
    _id: string,
    category: string,
    type: string,
    name: string,
    gender: string,
    new: boolean,
    sale: boolean,
    rate: number,
    price: number,
    originPrice: number,
    brand: string,
    sold: number,
    quantity: number,
    quantityPurchase: number,
    sizes: Array<string>,
    tag: Array<string>,
    variation: Variation[],
    thumbImage: Array<string>,
    images: Array<string>,
    description: string,
    action: string,
    slug: string
    sku: string
}