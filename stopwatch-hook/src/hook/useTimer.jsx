import { useEffect, useMemo, useState } from "react";

function useTimer(initialValue, active, pause, complete) {
  const [current, setCurrent] = useState(initialValue);

  useEffect(() => {
    let handler;

    if (complete) {
      setCurrent(initialValue);
    } else if (active && !pause) {
      handler = setInterval(() => {
        setCurrent((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(handler);
  }, [initialValue, active, pause, complete]);

  return { current, setCurrent };
}

export default useTimer;
