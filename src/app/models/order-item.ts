export interface OrderItem {
    itemId: string;    
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;  
    discountPercentage?: number; 
  }
  