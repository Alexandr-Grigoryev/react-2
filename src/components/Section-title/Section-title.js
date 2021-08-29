import s from "./Section-title.module.css";

function SectionTitle({ children }) {
  return (
    <div className={s.container}>
      <p>Please leave feedback</p>
      {children}
    </div>
  );
}

export default SectionTitle;
