// App.js

import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import DashboardPage from "./pages/Dashboard";

const App = () => {
  return (
    <div className="flex h-screen w-full flex-col bg-white">
      {/* Top Banner */}
      <Banner phoneNumber="+91 1234567890" />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - takes a fixed width */}
        <Sidebar />

        {/* Main Content - takes the remaining space and is scrollable */}
        <main className="flex-1 overflow-y-auto">
          <DashboardPage />
        </main>
      </div>
    </div>
  );
};

export default App;
