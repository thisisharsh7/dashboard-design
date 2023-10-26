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
import { faker } from '@faker-js/faker';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    annotationPlugin,
    Tooltip
)

const r = parseInt(Math.random() * 16);

const xLabel = Array(101).fill(1).map((n, i) => n + i)
const yLabel = xLabel.map(() => faker.number.int({ min: 0, max: 15 }))
const chartData = {
    labels: xLabel,
    datasets: [
        {
            data: yLabel,
            borderColor: '#438bf680',
            borderWidth: 1.5,
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

const Graph = ({ val }) => {
    yLabel[val] = r

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
                    if (context.label === String(val + 1)) {
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
                    xMin: val,
                    xMax: val,
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
                    xMin: parseInt((val) / 10) * 10 - 10,
                    xMax: parseInt((val) / 10) * 10 + 10,
                    backgroundColor: '#438AF625',
                    borderColor: '#438AF625',

                },
                point1: {
                    type: 'point',
                    xValue: val,
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
        <Line
            data={chartData}
            options={options} />
    )
}

export default Graph