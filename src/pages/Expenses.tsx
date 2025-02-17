
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

const expenses = [
  {
    id: 1,
    description: "Grocery Shopping",
    amount: 125.50,
    category: "Food",
    date: "2024-03-15",
    paymentMethod: "Credit Card",
  },
  {
    id: 2,
    description: "Netflix Subscription",
    amount: 15.99,
    category: "Entertainment",
    date: "2024-03-14",
    paymentMethod: "Debit Card",
  },
  {
    id: 3,
    description: "Gas",
    amount: 45.00,
    category: "Transportation",
    date: "2024-03-13",
    paymentMethod: "Credit Card",
  },
  {
    id: 4,
    description: "Electricity Bill",
    amount: 89.99,
    category: "Utilities",
    date: "2024-03-12",
    paymentMethod: "Bank Transfer",
  },
  {
    id: 5,
    description: "Restaurant Dinner",
    amount: 65.30,
    category: "Food",
    date: "2024-03-11",
    paymentMethod: "Credit Card",
  },
];

const Expenses = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Expenses</h1>
            <p className="text-muted-foreground">
              Manage and track your expenses
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Expense
          </Button>
        </div>

        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="flex items-center space-x-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="transportation">Transportation</SelectItem>
                <SelectItem value="utilities">Utilities</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="march">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="march">March 2024</SelectItem>
                <SelectItem value="february">February 2024</SelectItem>
                <SelectItem value="january">January 2024</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Expenses</CardTitle>
            <CardDescription>A detailed list of all your expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expenses.map((expense) => (
                <div
                  key={expense.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="space-y-1">
                    <p className="font-medium">{expense.description}</p>
                    <p className="text-sm text-muted-foreground">
                      {expense.category} • {expense.date} • {expense.paymentMethod}
                    </p>
                  </div>
                  <div className="font-medium">
                    ${expense.amount.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Expenses;
