import { Component } from "react";
import SectionTitle from "./components/Section-title/Section-title";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCounter = (e) => {
    const { name } = e.currentTarget;

    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round(
      (100 * this.state.good) /
        (this.state.good + this.state.neutral + this.state.bad)
    );

  render() {
    return (
      <SectionTitle>
        <FeedbackOptions onLeaveFeedback={this.handleCounter} />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </SectionTitle>
    );
  }
}
