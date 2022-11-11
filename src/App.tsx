import React, { useEffect, useState } from 'react';
import init, { add, sub, mult } from "rust-libs";

function App() {
  const [addResult, setAddResult] = useState(0);
  const [subResult, setSubResult] = useState(0);
  const [multResult, setMultResult] = useState(0);

  let input1 = 15;
  let input2 = 12;

  useEffect(() => {
    init().then(() => setAddResult(add(input1, input2)));
  }, [input1, input2]);


  const funcSub = async () => {
    await init();
    setSubResult(sub(input1, input2));
  }

  funcSub();

  init().then(() => setMultResult(mult(input1, input2)));

  return (
    <>
      <p>{input1} + {input2} = {addResult}</p>
      <p>{input1} - {input2} = {subResult}</p>
      <p>{input1} * {input2} = {multResult}</p>
    </>
  );
}

export default App;
