import { useState, useEffect } from 'react';

export function usePerformance() {
  const [loadTime, setLoadTime] = useState<number | null>(null);

  useEffect(() => {
    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        setLoadTime(Math.round(lcpEntry.startTime));
      }
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });

    const fallbackTimer = setTimeout(() => {
      const paintEntries = performance.getEntriesByType('paint');
      if (paintEntries.length > 0) {
        const lastPaint = paintEntries[paintEntries.length - 1];
        setLoadTime(Math.round(lastPaint.startTime));
      } else {
        setLoadTime(Math.round(performance.now()));
      }
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return loadTime;
}