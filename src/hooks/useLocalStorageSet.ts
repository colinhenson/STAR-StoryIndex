import { useState, useEffect, useCallback } from "react";

export function useLocalStorageSet(key: string) {
  const [items, setItems] = useState<Set<number>>(new Set());

  // Hydrate from localStorage after mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        setItems(new Set(JSON.parse(stored) as number[]));
      }
    } catch {
      // Ignore malformed data
    }
  }, [key]);

  const persist = useCallback(
    (next: Set<number>) => {
      setItems(next);
      try {
        if (next.size === 0) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify([...next]));
        }
      } catch {
        // Storage full or unavailable
      }
    },
    [key]
  );

  const toggle = useCallback(
    (id: number) => {
      const next = new Set(items);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      persist(next);
    },
    [items, persist]
  );

  const clear = useCallback(() => {
    persist(new Set());
  }, [persist]);

  return [items, toggle, clear] as const;
}
