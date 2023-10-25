import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
)


const xLabel = ['0%', '20%', '40%', '60%', '80%', '100%']


const ComparisonGraph = () => {
    const data = {
        labels: xLabel,
        datasets: [
            {
                data: [1, 17, 17, 24, 5, 0],
                backgroundColor: '#438AF6',
                borderColor: '#438bf643',
                fill: true,
                tension: 0.4
            }
        ]
    }

    const options = {

        scales: {
            x: {
                ticks: {
                    display: true,
                },
                grid: {
                },
            },
            y: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false
                }
            }

        },
        tooltips: {
            backgroundColor: "#1E272E",
            titleFontColor: "#FFFFFF",
            titleFontSize: "18px",
            titleFontStyle: "bold",
            bodyFontColor: "#FFFFFFB2",
            bodyFontSize: "14px",
            bodyFontStyle: "normal"
        }
    }
    return (
        <div className="comparison-graph section-container" >
            <div className="comparison-header">
                <div className="comparison-text">
                    <h2>Comparison Graph</h2>
                    <p><span>You scored 37% percentile</span> <span>which is lower than the <br />  average percentile 72% of all the engineers who took this assessment</span></p>
                </div>
                <div className="graph-img">
                    <p>📈</p>
                </div>
            </div>
            <div className="graph">
                <Line
                    data={data}
                    options={options} />
            </div>
        </div >
    )
}

export default ComparisonGraph