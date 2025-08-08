import {
  Download,
  Filter,
  CalendarDays,
  Folder,
  Users,
  DollarSign,
  Target,
} from "lucide-react";
import Card from "../components/Card";
import CaseAnalyticsChart from "../components/CaseAnalyticsChart";
import CaseDistributionChart from "../components/CaseDistributionChart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Schedule from "../components/Schedule";

const ActionButton = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="rounded-lg bg-gradient-to-b from-green-400 to-yellow-400 p-0.5">
    <button className="flex items-center gap-2 rounded-md bg-black px-4 py-2 font-semibold text-white">
      {icon} {text}
    </button>
  </div>
);

export default function DashboardPage() {
  return (
    <div className="w-full bg-black">
      <Navbar />
      <div className="p-8">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-7xl italic text-white">Dashboard</h1>
            <p className="mt-2 text-lg text-gray-300">
              Welcome back! Here's what's happening today.
            </p>
          </div>
          <div className="flex shrink-0 gap-4 mt-auto mb-3.5">
            <ActionButton icon={<Download size={20} />} text="Export Data" />
            <ActionButton icon={<Filter size={20} />} text="Filter View" />
            <ActionButton
              icon={<CalendarDays size={20} />}
              text="Schedule Meeting"
            />
          </div>
        </header>

        <main>
          {/* Stats Cards */}
          <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Card
              title="Active Cases"
              value={138}
              percentage={25}
              periodText="this month"
              variant="blue"
              icon={<Folder className="h-8 w-8 text-white" />}
            />
            <Card
              title="Total Clients"
              value={267}
              percentage={12}
              periodText="this month"
              variant="yellow"
              icon={<Users className="h-8 w-8 text-white" />}
            />
            <Card
              title="Recovered"
              value="$ 3.2M"
              percentage={8}
              periodText="vs last year"
              variant="blue"
              icon={<DollarSign className="h-8 w-8 text-white" />}
            />
            <Card
              title="Success Rate"
              value="94%"
              percentage={2}
              periodText="improvement"
              variant="yellow"
              icon={<Target className="h-8 w-8 text-white" />}
            />
          </section>

          {/* Charts and Schedule Grid */}
          <section className="mt-6 flex flex-col gap-6">
            <div className="lg:col-span-2">
              <CaseAnalyticsChart />
            </div>
            <div className="flex gap-6 w-full">
              <CaseDistributionChart className="flex-1" />
              <Schedule className="flex-1" />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
