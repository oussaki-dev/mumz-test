
interface MinimumPrice {
  regularPrice: Price,
  finalPrice: Price;
  discount: Discount;
}

interface Discount{
  amountOff: number;
  percentOff: number;
  roundedDiscount: number;
}

interface Price {
  currency: string;
  value: number;
  formatted: string;
}

interface SmallImage {
  url: string;
}

interface ProductLabel {
  activeFrom: string;
  activeTo: string;
  backgroundColor: string;
  labelText: string;
  textColor: string;
}

class ProductModel {
  id: number;
  name: string;
  price: MinimumPrice;
  smallImage: SmallImage;
  stockStatus: string;
  isYalla: boolean;
  productLabel:ProductLabel;

  constructor(
    id: number,
    name: string,
    price: MinimumPrice,
    smallImage: SmallImage,
    stockStatus: string,
    isYalla: boolean,
    productLabel:ProductLabel
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.smallImage = smallImage;
    this.stockStatus = stockStatus;
    this.isYalla = isYalla;
    this.productLabel = productLabel;
  }
}

export default ProductModel;
