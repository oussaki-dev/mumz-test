interface Price {
  regularPrice: {
    amount: {
      currency: string;
      value: number;
      formatted: string;
    };
  };
}

interface SmallImage {
  url: string;
}

class ProductModel {
  id: number;
  name: string;
  price: Price;
  smallImage: SmallImage;
  stockStatus: string;

  constructor(
    id: number,
    name: string,
    price: Price,
    smallImage: SmallImage,
    stockStatus: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.smallImage = smallImage;
    this.stockStatus = stockStatus;
  }
}

export default ProductModel;
