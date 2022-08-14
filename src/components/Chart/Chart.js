import ChartBar from "./ChartBar";
import './ChartBar.css';

function Chart(props) {

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];
    
    for (const expense of props.dataPoint) { 
        const month = expense.date.getMonth();
        chartDataPoints[month].value += expense.amount;
    }
   
    const dataValues = chartDataPoints.map((dp) => dp.value);
    const maxValue = Math.max(...dataValues);

    return (
        <div className='chart'>
            {chartDataPoints.map((dp) => 
                <ChartBar
                    key={dp.label}
                    value={dp.value}
                    maxValue={maxValue}
                    label={dp.label}
                />
            ) }
        </div>
    );
}

export default Chart;