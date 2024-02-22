import "./styles.css";

export default function SliderInput({ value, setValue }) {
  return (
    <div className="slider-main">
      <input
        type="range"
        min="0"
        max="9999999999"
        value={parseInt(value, 10)}
        onChange={setValue}
      />
    </div>
  );
}
