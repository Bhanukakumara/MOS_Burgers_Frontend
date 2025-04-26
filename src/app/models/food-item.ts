export interface FoodItem {
    id: string;
    name: string;
    category: string;
    price: number;
    quantityOnHand: number;
    expiryDate?: Date;
  }
  