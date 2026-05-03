"use client";

import { useEffect, useState } from "react";

export function usePrefersHover(): boolean {
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return matches;
}
