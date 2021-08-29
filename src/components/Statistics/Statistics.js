function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <section>
      <p>Statistics</p>

      {total ? (
        <div>
          <span className="counter__value">good:{good}</span>
          <span className="counter__value">neutral:{neutral}</span>
          <span className="counter__value">bad:{bad}</span>
          <span className="counter__value">Total:{total}</span>
          <span className="counter__value">
            Positive feedback:{positivePercentage}%
          </span>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </section>
  );
}
export default Statistics;
