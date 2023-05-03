import React from "react";
import { Title, Button, Statistic, Btn, Stat } from "./Feedback.styled";

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFb = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  neutralFb = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badFb = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage(good, neutral, bad) {
    const total = good + neutral + bad;
    return ( good / total ? ((good / total) * 100).toFixed(0) : 0);
  }

  render() {
    const { good, neutral, bad } = this.state;
    // let total = 0;
    return (
      <div>
        <Title>Please leave feedback</Title>
        <Btn>
          <Button type="button" onClick={this.goodFb}>
            Good
          </Button>
          <Button type="button" onClick={this.neutralFb}>
            Neutral
          </Button>
          <Button type="button" onClick={this.badFb}>
            Bad
          </Button>
        </Btn>

        <Statistic>Statistics</Statistic>
        <Stat>Good: {good}</Stat>
        <Stat>Neutral: {neutral}</Stat>
        <Stat>Bad: {bad}</Stat>
        <Stat>Total: {this.countTotalFeedback(good, neutral, bad)}</Stat>
        <Stat>
          Positive feedback: {this.countPositiveFeedbackPercentage(good, neutral, bad)}%
        </Stat>
      </div>
    );
  }
}
