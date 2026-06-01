import { useEffect, useState } from "react";

import Layout from "../components/layout/Layout";

import StatsCard from "../components/dashboard/StatsCard";

import { getDashboardStats } from "../services/dashboardService";
import StatusPieChart from "../components/dashboard/StatusPieChart";
import PriorityBarChart from "../components/dashboard/PriorityBarChart";

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
const statusData = [
  {
    name: "To Do",
    value: stats?.todo || 0,
  },
  {
    name: "In Progress",
    value:
      stats?.inProgress || 0,
  },
  {
    name: "Done",
    value: stats?.done || 0,
  },
  {
    name: "Overdue",
    value: stats?.overdue || 0,
  },
];

const priorityData = [
  {
    name: "Low",
    value:
      stats?.lowPriority || 0,
  },
  {
    name: "Medium",
    value:
      stats?.mediumPriority ||
      0,
  },
  {
    name: "High",
    value:
      stats?.highPriority || 0,
  },
];
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
      <div className="grid gap-6 lg:grid-cols-2 mt-8">
  <StatusPieChart
    data={statusData}
  />

  <PriorityBarChart
    data={priorityData}
  />
</div>
    </Layout>
  );
};

export default Dashboard;