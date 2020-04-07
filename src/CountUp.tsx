import React, { useState } from 'react';

export const CountUp = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};
