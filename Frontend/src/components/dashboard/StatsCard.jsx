const StatsCard = ({
  title,
  value,
  color,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-slate-500 text-sm">
        {title}
      </h3>

      <p
        className={`text-3xl font-bold mt-2 ${color}`}
      >
        {value}
      </p>
    </div>
  );
};

export default StatsCard;