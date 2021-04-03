
export interface IOrder {
  products: Array<IOrederProduct>;
  orderTotalPrice: number;
  clientInfo: IClientInfo
}

export interface IOrederProduct {
  product_id: number;
  product_itemCount: number;
  unit_price: number;
}

export interface IClientInfo {
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
}
