const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((item) => (
      <button
        key={`${item}`}
        name={`${item}`}
        type="button"
        onClick={onLeaveFeedback}
      >
        {`${item}`}
      </button>
    ))}
  </div>
);
export default FeedbackOptions;
