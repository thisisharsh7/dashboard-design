import './style.css';
import { useContext } from "react";
import { GlobalInfo } from "../../App";
import Graph from './Graph';



const ComparisonGraph = () => {
    const { data } = useContext(GlobalInfo);

    const { percentile } = data;





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
                <Graph val={percentile} />
            </div>
        </div >
    )
}

export default ComparisonGraph