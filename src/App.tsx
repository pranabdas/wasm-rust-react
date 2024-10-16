import { useState } from "react";

function App() {
  const [isBusy, setIsBusy] = useState(false);
  const [jsResult, setJsResult] = useState<number | null>(null);
  const [rsResult, setRsResult] = useState<number | null>(null);
  const [jsTimeTaken, setJsTimeTaken] = useState(0);
  const [rsTimeTaken, setRsTimeTaken] = useState(0);
  const [num, setNum] = useState(44);

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNum(parseInt(value));
    setJsResult(null);
    setRsResult(null);
  };

  const handleClickJs = async () => {
    const jsWorker = new Worker(new URL("./jsworker.js", import.meta.url), {
      type: "module",
    });
    jsWorker.postMessage(num);
    jsWorker.onmessage = (e) => {
      // console.log("Result =", e.data[0], "(time taken =", e.data[1], "ms)");
      setJsResult(e.data[0]);
      setJsTimeTaken(e.data[1]);
      jsWorker.terminate();
      setIsBusy(false);
    };
  };

  const handleClickRs = async () => {
    const rsWorker = new Worker(new URL("./rsworker.js", import.meta.url), {
      type: "module",
    });
    rsWorker.postMessage(num);
    rsWorker.onmessage = (e) => {
      // console.log("Result =", e.data[0], "(time taken =", e.data[1], "ms)");
      rsWorker.terminate();
      setRsResult(e.data[0]);
      setRsTimeTaken(e.data[1]);
      setIsBusy(false);
    };
  };

  return (
    <>
      <h1>Fibonacci Calculator</h1>
      <p>
        Input = &nbsp;
        <input
          type="number"
          id="input"
          name="input"
          value={num || ""}
          onChange={HandleChange}
        />
      </p>


      <button
        onClick={() => {
          setIsBusy(true);
          setJsResult(null);
          handleClickJs();
        }}
      >
        Calculate using Javascript
      </button>

      <button
        onClick={() => {
          setIsBusy(true);
          setRsResult(null);
          handleClickRs();
        }}
      >
        Calculate using Rust (WASM)
      </button>

      {isBusy && <p style={{ color: "red" }}>Please wait. Calculating...</p>}

      {jsResult && <p>
        Javascript: Fib({num}) = {jsResult} (Time taken: {jsTimeTaken} ms)
      </p>}

      {rsResult && <p>
        Rust (WASM): Fib({num}) = {rsResult} (Time taken: {rsTimeTaken} ms)
      </p>}
    </>
  );
}

export default App;
