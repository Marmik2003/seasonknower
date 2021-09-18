import React from 'react'
import './SeasonDisplay.css'

const seasonConfig = {
    summer: {
        text: 'Summer',
        iconName: 'sun'
    },
    winter: {
        text: 'Winter',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = ({lat}) => {
    console.log({lat}.lat);
    const season = getSeason({lat}.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon ${iconName} massive icon-left`}></i>
            <h1>{text}</h1>
            <i className={`icon ${iconName} massive icon-right`}></i>
        </div>
    )
}

export default SeasonDisplay
