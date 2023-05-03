import React from "react";
import { Title, Stat } from "./Statistic.styled";


export function Statistic({good, neutral, bad}) {
    return (
<>
        <Title>Statistics</Title>
        <Stat>Good: {good}</Stat>
        <Stat>Neutral: {neutral}</Stat>
        <Stat>Bad: {bad}</Stat>
        <Stat>Total: {this.countTotalFeedback(good, neutral, bad)}</Stat>
        <Stat>
          Positive feedback: {this.countPositiveFeedbackPercentage(good, neutral, bad)}%
        </Stat>
</>
    )

}

// Statistic.propTypes = {
//         good: PropTypes.number,
//         neutral: PropTypes.number,
//         bad: PropTypes.number,
// };