import { useEffect, useState } from "react";

import Layout from "../components/layout/Layout";

import StatsCard from "../components/dashboard/StatsCard";

import { getDashboardStats } from "../services/dashboardService";

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const response =
        await getDashboardStats();

      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-500">
          Overview of your tasks
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        <StatsCard
          title="Total"
          value={stats?.totalTasks || 0}
          color="text-blue-600"
        />

        <StatsCard
          title="To Do"
          value={stats?.todo || 0}
          color="text-orange-500"
        />

        <StatsCard
          title="In Progress"
          value={stats?.inProgress || 0}
          color="text-purple-600"
        />

        <StatsCard
          title="Done"
          value={stats?.done || 0}
          color="text-green-600"
        />

        <StatsCard
          title="Overdue"
          value={stats?.overdue || 0}
          color="text-red-600"
        />
      </div>
    </Layout>
  );
};

export default Dashboard;