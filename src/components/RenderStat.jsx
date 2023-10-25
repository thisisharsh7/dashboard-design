

const RenderStat = (icon, value, description) => {
    return (
        <div className="stats">
            <div className="stats-img">
                <p>{icon}</p>
            </div>
            <div className="stats-desc">
                <p id="rank">{value}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default RenderStat