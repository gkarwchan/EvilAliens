import React, { useState } from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from './SpeedCounter.css';

export default function SpeedCounter() {
  useStyles(s);
  const MAX_SPEED = 20;
  const MIN_SPEED = 0;
  const STEP = 1;
  const [count, setCount] = useState(MIN_SPEED);
  const increment = () =>
    setCount(count === MAX_SPEED ? MAX_SPEED : count + STEP);
  const decrement = () =>
    setCount(count === MIN_SPEED ? MIN_SPEED : count - STEP);
  return (
    <div className={s.speedCounterPage}>
      <div className={s.wrapperCounter}>
        Current Speed {count / 10}
        <div>
          <button type="button" onClick={increment} className={s.buttonAsLink}>
            Increase Speed
          </button>
        </div>
        <div>
          <button type="button" onClick={decrement} className={s.buttonAsLink}>
            Decrease Speed
          </button>
        </div>
      </div>
    </div>
  );
}
