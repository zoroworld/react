import { useEffect, useState, useRef } from "react";

function useThrottle(value, interval) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      const now = Date.now();
      if (now - lastExecuted.current >= interval) {
        setThrottledValue(value);
        lastExecuted.current = now;
      }
    }, interval);

    return () => clearTimeout(handler);
  }, [value, interval]);

  return throttledValue;
}

export default useThrottle;
