export interface MonthlyReport {
    month: string;         
    totalSales: number;
    topSellingItems: { itemName: string; quantitySold: number; }[];
  }
  