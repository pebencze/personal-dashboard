export const transactions = [
  {
    "id": 1,
    "date": "2025-10-09",
    "description": "Weekly groceries",
    "category": "Groceries",
    "amount": -125.50
  },
  {
    "id": 2,
    "date": "2025-10-08",
    "description": "Dinner with friends",
    "category": "Entertainment",
    "amount": -55.00
  },
  {
    "id": 3,
    "date": "2025-10-07",
    "description": "Salary",
    "category": "Income",
    "amount": 2000.00
  },
  {
    "id": 4,
    "date": "2025-10-06",
    "description": "Urban Sports Club",
    "category": "Health & Fitness",
    "amount": -15.20
  },
  {
    "id": 5,
    "date": "2025-10-05",
    "description": "BVG ticket",
    "category": "Transportation",
    "amount": -55.75
  },
  {
    "id": 6,
    "date": "2025-10-04",
    "description": "Monthly rent",
    "category": "Rent",
    "amount": -500.00
  },
  {
    "id": 7,
    "date": "2025-10-12",
    "description": "Sneakers",
    "category": "Shopping",
    "amount": -100.00
  },
  {
    "id": 8,
    "date": "2025-10-11",
    "description": "Lunch",
    "category": "Food & Drinks",
    "amount": -12.00
  }
  ,
  {
    "id": 9,
    "date": "2025-10-11",
    "description": "Lunch",
    "category": "Food & Drinks",
    "amount": -12.00
  },
  {
    "id": 10,
    "date": "2025-10-11",
    "description": "Movies",
    "category": "Entertainment",
    "amount": -15.00
  },
  {
    "id": 11,
    "date": "2025-10-09",
    "description": "Bouldering session",
    "category": "Health & Fitness",
    "amount": -10.00
  },
  {
    "id": 12,
    "date": "2025-10-08",
    "description": "Dance workshop",
    "category": "Entertainment",
    "amount": -25.00
  },
  {
    "id": 13,
    "date": "2025-10-07",
    "description": "Theatre tickets",
    "category": "Entertainment",
    "amount": -80.00
  },
  {
    "id": 14,
    "date": "2025-10-06",
    "description": "New jacket",
    "category": "Shopping",
    "amount": -75.00
  },
  {
    "id": 15,
    "date": "2025-10-05",
    "description": "Freelancing",
    "category": "Income",
    "amount": 150.00
  },
  {
    "id": 16,
    "date": "2025-10-04",
    "description": "Coffee and pastry",
    "category": "Food & Drinks",
    "amount": -6.50
  },
  {
    "id": 17,
    "date": "2025-10-03",
    "description": "Gasoline",
    "category": "Transportation",
    "amount": -40.00
  },
  {
    "id": 18,
    "date": "2025-10-02",
    "description": "Flight to Lisbon",
    "category": "Travel",
    "amount": -250.00
  },
  {
    "id": 19,
    "date": "2025-10-01",
    "description": "Yoga class",
    "category": "Health & Fitness",
    "amount": -18.00
  },
  {
    "id": 20,
    "date": "2025-10-30",
    "description": "Uber ride",
    "category": "Transportation",
    "amount": -15.50
  },
  {
    "id": 21,
    "date": "2025-10-29",
    "description": "Gym membership",
    "category": "Health & Fitness",
    "amount": -30.00
  },
  {
    "id": 22,
    "date": "2025-10-28",
    "description": "Birthday gift",
    "category": "Other",
    "amount": -50.00
  },
  {
    "id": 23,
    "date": "2025-10-27",
    "description": "Books",
    "category": "Shopping",
    "amount": -25.00
  },
  {
    "id": 24,
    "date": "2025-10-26",
    "description": "Concert tickets",
    "category": "Entertainment",
    "amount": -65.00
  },
  {
    "id": 25,
    "date": "2025-10-25",
    "description": "Restaurant bill",
    "category": "Food & Drinks",
    "amount": -40.50
  },
  {
    "id": 26,
    "date": "2025-10-10",
    "description": "Train ticket to Hamburg",
    "category": "Transportation",
    "amount": -45.90
  },
]

export const monthlyBudget: Record<string, number> = {
    "Groceries": 300,
    "Entertainment": 100,
    "Health & Fitness": 50,
    "Shopping": 50, 
    "Food & Drinks": 100,
    "Transportation": 60,
    "Rent": 500,
    "Other": 0,
}

export const expenseCategories: Array<string> = [
    "Groceries",
    "Entertainment",
    "Health & Fitness",
    "Shopping",
    "Food & Drinks",
    "Transportation",
    "Rent",
    "Other"
]

// const categories = [
//   {
//     "category": "Groceries",
//     "budget": 300,
//     "amountSpent": 125.50,
//     "amountLeft": "174.50"
//   },
//   {
//     "category": "Entertainment",
//     "budget": 200,
//     "amountSpent": 240,
//     "amountLeft": "-40.00"
//   },
//   {
//     "category": "Health & Fitness",
//     "budget": 100,
//     "amountSpent": 73.20,
//     "amountLeft": "26.80"
//   },
//   {
//     "category": "Transportation",
//     "budget": 100,
//     "amountSpent": 117.15,
//     "amountLeft": "-17.15"
//   },
//   {
//     "category": "Rent",
//     "budget": 600,
//     "amountSpent": 500.00,
//     "amountLeft": "100.00"
//   },
//   {
//     "category": "Shopping",
//     "budget": 150,
//     "amountSpent": 200.00,
//     "amountLeft": "-50.00"
//   },
//   {
//     "category": "Food & Drinks",
//     "budget": 120,
//     "amountSpent": 71.00,
//     "amountLeft": "49.00"
//   },
//   {
//     "category": "Travel",
//     "budget": 300,
//     "amountSpent": 250.00,
//     "amountLeft": "50.00"
//   },
//   {
//     "category": "Other",
//     "budget": 75,
//     "amountSpent": 50.00,
//     "amountLeft": "25.00"
//   }
// ]