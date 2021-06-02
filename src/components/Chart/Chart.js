import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataValues = props.data.map((dataValue) => dataValue.value);
  const maximumValue = Math.max(...dataValues);
  
  return (
    <div className="chart">
      {props.data.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={ maximumValue}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
