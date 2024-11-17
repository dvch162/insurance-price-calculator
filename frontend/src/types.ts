export interface FormData {
  name: string;
  birthdate: string;
  city: string;
  vehiclePower: number;
  voucher?: number;
  priceMatch?: number;
}

export interface Discount {
  name: string;
  percentage: number;
  isSelected: boolean;
}

export interface Coverage {
  name: string;
  price: number;
  isSelected: boolean;
}
