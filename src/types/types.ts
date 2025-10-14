
export interface MonthlySummary {
  totalIncome: number;
  totalExpenses: number;
  savings: number;
}

export interface Transaction {
    id: number;
    date: string;
    description: string;
    category: string;
    amount: number;
}

export interface ExpenseCategory {
    category: string;
    budget: number;
    amountSpent: number;
    amountLeft: string;
}
