import { Line } from "rc-progress";
import { useEffect, useState } from "react";
import './style.css';

const syllabusData = [
    {
        name: "HTML Tools, Forms, History",
        color: "#438AF6",
        percent: 80,
    },
    {
        name: "HTML Tools, Forms, History",
        color: "#FF9142",
        percent: 60,
    },
    {
        name: "HTML Tools, Forms, History",
        color: "#FB5E5E",
        percent: 24,
    },
    {
        name: "Tables & CSS Basics",
        color: "#2EC971",
        percent: 96,
    },
];

const SyllabusAnalysis = () => {
    const [percent, setPercent] = useState({
        syllabus1: 0,
        syllabus2: 0,
        syllabus3: 0,
        syllabus4: 0,
    });

    const increase = () => {
        setPercent({
            syllabus1: syllabusData[0].percent,
            syllabus2: syllabusData[1].percent,
            syllabus3: syllabusData[2].percent,
            syllabus4: syllabusData[3].percent,
        });
    };

    const restart = () => {
        setPercent({
            syllabus1: 0,
            syllabus2: 0,
            syllabus3: 0,
            syllabus4: 0,
        });
        setTimeout(increase, 400);
    };

    useEffect(() => {
        restart();
    }, []);

    return (
        <div className="syllabus-analysis section-container">
            <h2>Syllabus wise Analysis</h2>
            <ul className="all-syllabus">
                {syllabusData.map((item, index) => (
                    <li className="syllabus" key={index}>
                        <p className="syllabus-name">{item.name}</p>
                        <div className="syllabus-desc">
                            <Line
                                percent={percent[`syllabus${index + 1}`]}
                                strokeWidth={5}
                                trailColor={`${item.color}43`}
                                trailWidth={5}
                                strokeColor={item.color}
                                className="syllabus-prog"
                            />
                            <p className="syllabus-per">{percent[`syllabus${index + 1}`]}%</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SyllabusAnalysis;
