import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
} from 'chart.js';
import annotationPlugin from "chartjs-plugin-annotation";
import { useContext } from "react";
import { GlobalInfo } from "../../App";
import { faker } from '@faker-js/faker';
import './style.css';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    annotationPlugin,
    Tooltip
)

const r = parseInt(Math.random() * 100);

const xLabel = Array(101).fill(1).map((n, i) => n + i)
const yLabel = xLabel.map(() => faker.number.int({ min: 0, max: 100 }))
const chartData = {
    labels: xLabel,
    datasets: [
        {
            data: yLabel,
            backgroundColor: '#438AF6',
            borderColor: '#438bf643',
            borderWidth: 1,
            tension: 0.4,
            pointRadius: 0,
        },
    ],
};
let options = {
    scales: {
        x: {
            ticks: {
                callback: (tick) => ((Number(tick) % 20 === 0) ? tick + '%' : null)

            },
            grid: {
                display: true,
            },

        },
        y: {
            ticks: {
                display: false,
            },
            grid: {
                display: false,
            }
        }

    },

}


const ComparisonGraph = () => {
    const { data } = useContext(GlobalInfo);
    yLabel[data.percentile] = r



    const plugins = {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
            backgroundColor: "#1E272E",
            displayColors: false,
            padding: 15,
            intersect: false,
            callbacks: {
                label: function (context) {
                    if (context.label === String(data.percentile + 1)) {
                        return "Your score";
                    } else {
                        return "Other's score";
                    }

                },
                title: function (context) {
                    return context[0].label - 1 + " Percentile";
                }
            }

        },
        hover: { mode: null },
        annotation: {
            annotations: {
                line1: {
                    type: "line",
                    borderDash: [4],
                    xMin: data.percentile,
                    xMax: data.percentile,
                    borderColor: "#438AF6",
                    borderWidth: 1,


                },
                line2: {
                    type: "line",
                    borderDash: [4],
                    xMin: 84,
                    xMax: 84,
                    borderColor: "#FF9142",
                    borderWidth: 1,
                },
                box1: {
                    type: "box",
                    xMin: parseInt((data.percentile) / 10) * 10 - 10,
                    xMax: parseInt((data.percentile) / 10) * 10 + 10,
                    backgroundColor: '#438AF611',
                    borderColor: '#438AF611',

                },
                point1: {
                    type: 'point',
                    xValue: data.percentile,
                    yValue: r,
                    backgroundColor: '#438AF6',
                    borderWidth: 0,
                    radius: 4,
                },
                point2: {
                    type: 'point',
                    xValue: 84,
                    yValue: r,
                    backgroundColor: '#FF9142',
                    borderWidth: 0,
                    radius: 4,
                }
            },
        },
    };


    options = { ...options, plugins: plugins }
    return (
        <div className="comparison-graph section-container" >
            <div className="comparison-header">
                <div className="comparison-text">
                    <h2>Comparison Graph</h2>
                    <p><span>You scored {data.percentile}% percentile</span> <span>which is lower than the <br />  average percentile 72% of all the engineers who took this assessment</span></p>
                </div>
                <div className="graph-img">
                    <p>📈</p>
                </div>
            </div>
            <div className="graph">
                <Line
                    data={chartData}
                    options={options} />
            </div>
        </div >
    )
}

export default ComparisonGraph