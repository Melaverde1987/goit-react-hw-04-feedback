import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonsContainer}>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={onLeaveFeedback}
          type="button"
          id={option}
          className="btn btn-primary"
        >
          {option}
        </button>
      ))}
    </div>
  );
};
