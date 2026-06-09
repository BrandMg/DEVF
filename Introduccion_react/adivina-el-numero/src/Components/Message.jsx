function Message({ mensaje }) {

  return (
    <div>
      {mensaje === "Correcto" ? (
        <h2 style={{ color: "green" }}>
          {mensaje}
        </h2>
      ) : (
        <h3>{mensaje}</h3>
      )}
    </div>
  );
}

export default Message;