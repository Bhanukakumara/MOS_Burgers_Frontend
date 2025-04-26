export interface AnnualReport {
    year: number;
    totalAnnualSales: number;
    monthlySales: { month: string; sales: number; }[];
  }
  