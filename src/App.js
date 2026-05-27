import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
      <h1>React Counter App</h1>

      <h2>Counter: {count}</h2>

      <button onClick={increase} style={{ margin: "5px" }}>
        Increase
      </button>

      <button onClick={decrease} style={{ margin: "5px" }}>
        Decrease
      </button>

      <button onClick={reset} style={{ margin: "5px" }}>
        Reset
      </button>

      {count >= 5 && (
        <h3 style={{ color: "green" }}>Goal Reached!</h3>
      )}

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            padding: "8px",
            width: "250px",
          }}
        />

        <h3>Message: {message}</h3>
      </div>
    </div>
  );
}

export default App;