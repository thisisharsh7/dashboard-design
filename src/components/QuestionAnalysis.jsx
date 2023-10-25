import { Circle } from "rc-progress"
import { useContext, useEffect, useState } from "react";
import { GlobalInfo } from "../App";


const QuestionAnalysis = () => {
    const [percent, setPercent] = useState(0);
    const { data } = useContext(GlobalInfo);
    const urPercent = (data.correct * 100) / 15;
    const increase = () => {
        setPercent(urPercent);
    };

    const restart = () => {
        setPercent(0);
        setTimeout(increase, 400);
    };

    useEffect(() => {
        restart();
    }, [urPercent]);

    return (
        <div className="question-analysis section-container">
            <div className="quest-det">
                <h2>Question Analysis</h2>
                <p>{(data.correct < 10) ? "0" + data.correct + " / 15" : data.correct + " / 15"}</p>
            </div>
            <div className="quest-desc-progress">
                <p className="quest-desc">
                    <span>You scored {data.correct} question correct out of 15. </span><span>However it
                        still needs some improvements</span>
                </p>
                <div className="quest-progress">
                    <Circle percent={percent}

                        strokeLinecap="butt" strokeWidth={10} trailColor="#438bf643" trailWidth={10} strokeColor="#438AF6" className="circle-prog"
                    />
                    <p className="progress-emoji">🎯</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionAnalysis