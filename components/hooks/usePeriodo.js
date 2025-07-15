import { useState } from "react";

export function usePeriodo(defaultValue = "4semanas") {
  const [periodo, setPeriodo] = useState(defaultValue);
  return { periodo, setPeriodo };
}