import { useEffect, useState } from 'react';
import { AuthGuard } from '@/components/auth/AuthGuard';
import { Navbar } from '@/components/layout/Navbar';
import { SummaryCards } from '@/components/dashboard/SummaryCards';
import { TransactionList } from '@/components/dashboard/TransactionList';
import { TransactionForm } from '@/components/dashboard/TransactionForm';
import { FinanceCharts } from '@/components/dashboard/FinanceCharts';
import { supabase } from '@/integrations/supabase/client';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  date: string;
  description: string | null;
}

const Dashboard = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .order('date', { ascending: false });

    if (!error && data) {
      setTransactions(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = totalIncome - totalExpenses;

  return (
    <AuthGuard requireAuth>
      <div className="min-h-screen bg-muted/50">
        <Navbar />
        
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Manage your finances and track your progress</p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          ) : (
            <div className="space-y-6">
              <SummaryCards
                totalIncome={totalIncome}
                totalExpenses={totalExpenses}
                balance={balance}
              />

              <div className="grid gap-6 lg:grid-cols-2">
                <TransactionForm onSuccess={fetchTransactions} />
                <TransactionList
                  transactions={transactions.slice(0, 5)}
                  onDelete={fetchTransactions}
                />
              </div>

              <FinanceCharts transactions={transactions} />
            </div>
          )}
        </main>
      </div>
    </AuthGuard>
  );
};

export default Dashboard;