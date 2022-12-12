import { useState } from 'react';
import { createWorkerFactory, terminate } from '@shopify/web-worker';
const createWorker = createWorkerFactory(() => import('./worker'));

function App() {
  const [isBusy, setIsBusy] = useState(false);
  const [jsResult, setJsResult] = useState(0);
  const [rsResult, setRsResult] = useState(0);
  const [jsTimeTaken, setJsTimeTaken] = useState(0);
  const [rsTimeTaken, setRsTimeTaken] = useState(0);
  let num = 44;

  const handleClickJs = async () => {
    const jsWorker = createWorker();
    let t0 = performance.now();
    const result = await jsWorker.fibjs(num);
    const timeTaken = performance.now() - t0;
    terminate(jsWorker);
    setJsResult(result);
    setJsTimeTaken(timeTaken);
    setIsBusy(false);
  }

  const handleClickRs = async () => {
    const rsWorker = createWorker();
    let t0 = performance.now();
    const result = await rsWorker.fibrs(num);
    const timeTaken = performance.now() - t0;
    terminate(rsWorker);
    setRsResult(result);
    setRsTimeTaken(timeTaken);
    setIsBusy(false);
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
