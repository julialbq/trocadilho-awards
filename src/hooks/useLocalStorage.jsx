import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const [allValues, setAllvalues] = useState([]);
  const saved = localStorage.getItem(key);
  const parsed = JSON.parse(saved);

  function saveValue(value) {
    setValue(value);

    const updatedValues = [...allValues, value];
    setAllvalues(updatedValues);

    window.localStorage.setItem(`${key}`, JSON.stringify(updatedValues));
  }

  function resetValue(key) {
    window.localStorage.removeItem(key);
    setValue(defaultValue);
  }

  return { value, parsed, saveValue, resetValue };
};
