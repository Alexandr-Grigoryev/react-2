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

    // this.setState((prevState) => ({ [name]: prevState[name] + 1 }));

    this.setState({ [name]: this.state[name] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () =>
    Math.round((100 * this.state.good) / this.countTotalFeedback());

  render() {
    const arrOptions = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <SectionTitle>
        <FeedbackOptions
          options={arrOptions}
          onLeaveFeedback={this.handleCounter}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </SectionTitle>
    );
  }
}
