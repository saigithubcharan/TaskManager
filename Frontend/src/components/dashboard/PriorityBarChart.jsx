import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const PriorityBarChart = ({
  data,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow h-96">
      <h2 className="text-xl font-semibold mb-4">
        Priority Distribution
      </h2>

      <ResponsiveContainer
        width="100%"
        height="94%"
      >
        <BarChart data={data}>
          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#3b82f6"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriorityBarChart;