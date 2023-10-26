import { useContext } from "react";
import RenderStat from "./RenderStat";
import { GlobalInfo } from "../../App";
import './style.css';

const QuickStats = () => {
    const { data } = useContext(GlobalInfo);

    return (
        <div className="quick-statistics section-container">
            <h2>Quick Statistics</h2>
            <div className="stats-container">
                {RenderStat("🏆", data.rank.toLocaleString('en-US'), "YOUR RANK")}
                {RenderStat("📋", data.percentile + "%", "PERCENTILE")}
                {RenderStat("✅", (data.correct < 10) ? "0" + data.correct + " / 15" : data.correct + " / 15", "CORRECT ANSWERS")}
            </div>
        </div>
    )
}

export default QuickStats
