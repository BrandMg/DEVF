function InputNumber({ value, onChange }) {
  return (
    <input
      type="number"
      min="1"
      max="100"
      value={value}
      placeholder="Escribe un numero"
      onChange={(e) =>
        onChange(e.target.value)
      }
    />
  );
}

export default InputNumber;