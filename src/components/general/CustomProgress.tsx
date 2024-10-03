interface CustomProgressBarProps {
  width: string;
  value: number;
  max: number;
  color: string;
}

const CustomProgressBar = ({
  width,
  value,
  max,
  color,
}: CustomProgressBarProps) => {
  const progressValue = Math.min(Math.max(value, 0), max);

  return (
    <div className={`${width} bg-gray-100 rounded-lg overflow-hidden`}>
      <div
        className="h-3 transition-all duration-300 ease-linear"
        style={{
          width: `${(progressValue / max) * 100}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default CustomProgressBar;
