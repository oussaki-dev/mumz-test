
interface MinimumPrice {
  regularPrice: Price,
  finalPrice: Price;
  discount: Discount;
}

interface Discount{
  amountOff: number;
  percentOff: number;
}

interface Price {
  currency: string;
  value: number;
  formatted: string;
}

interface SmallImage {
  url: string;
}

class ProductModel {
  id: number;
  name: string;
  price: MinimumPrice;
  smallImage: SmallImage;
  stockStatus: string;
  isYalla: boolean;

  constructor(
    id: number,
    name: string,
    price: MinimumPrice,
    smallImage: SmallImage,
    stockStatus: string,
    isYalla: boolean
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.smallImage = smallImage;
    this.stockStatus = stockStatus;
    this.isYalla = isYalla;
  }
}

export default ProductModel;
