import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, PieChart } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-10"></div>
        <div className="container relative mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Secure & Trusted</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-6xl">
              Take Control of Your
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Financial Future</span>
            </h1>
            
            <p className="mb-8 text-xl text-muted-foreground">
              Track income, manage expenses, and visualize your financial health with our powerful finance management platform.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/register')}
                className="gap-2 text-lg"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/login')}
                className="text-lg"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Everything You Need to Manage Your Finances</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Track Income & Expenses</h3>
              <p className="text-muted-foreground">
                Easily record and categorize all your financial transactions in one place. Stay organized and informed.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-lg bg-secondary/10 p-3">
                <PieChart className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Visual Analytics</h3>
              <p className="text-muted-foreground">
                Understand your spending patterns with beautiful charts and graphs. Make data-driven financial decisions.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your financial data is encrypted and protected. Only you have access to your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-2xl border bg-gradient-to-br from-primary/10 to-secondary/10 p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Financial Journey?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join thousands of users who are taking control of their finances today.
            </p>
            <Button size="lg" onClick={() => navigate('/register')} className="gap-2">
              Create Free Account
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;