import { useState } from 'react';

function App() {
  const [isBusy, setIsBusy] = useState(false);
  const [jsResult, setJsResult] = useState(0);
  const [rsResult, setRsResult] = useState(0);
  const [jsTimeTaken, setJsTimeTaken] = useState(0);
  const [rsTimeTaken, setRsTimeTaken] = useState(0);
  let num = 44;

  const handleClickJs = async () => {
    const jsWorker = new Worker(new URL('./jsworker.js', import.meta.url));
    jsWorker.postMessage(num);
    jsWorker.onmessage = (e) => {
      // console.log("Result =", e.data[0], "(time taken =", e.data[1], "ms)");
      setJsResult(e.data[0]);
      setJsTimeTaken(e.data[1]);
      jsWorker.terminate();
      setIsBusy(false);
    }
  }

  const handleClickRs = async () => {
    const rsWorker = new Worker(new URL('./rsworker.js', import.meta.url));
    rsWorker.postMessage(num);
    rsWorker.onmessage = (e) => {
      // console.log("Result =", e.data[0], "(time taken =", e.data[1], "ms)");
      rsWorker.terminate();
      setRsResult(e.data[0]);
      setRsTimeTaken(e.data[1]);
      setIsBusy(false);
    }
  }

  return (
    <>
      <button onClick={() => { setIsBusy(true); handleClickJs(); }}>Calculate fibjs</button>
      <button onClick={() => { setIsBusy(true); handleClickRs(); }}>Calculate fibrs</button>
      {isBusy && <p>Please wait. Working...</p>}
      <p>Javascript: Fib({num}) = {jsResult} (Time taken: {jsTimeTaken} ms)</p>
      <p>Rust: Fib({num}) = {rsResult} (Time taken: {rsTimeTaken} ms)</p>
    </>
  );
}

export default App;
