import { OrderItem } from "./order-item";

export interface Order {
    orderId: string;
    customerId: string; 
    orderDate: Date;
    items: OrderItem[];
    totalAmount: number;
    discountPercentage?: number; 
    finalAmount: number;  
  }
  