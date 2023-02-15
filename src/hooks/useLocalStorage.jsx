import { useState } from "react"

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(defaultValue)
    const [allValues, setAllvalues] = useState([])
    const saved = localStorage.getItem(key);
    JSON.parse(saved)

  function saveValue(value) {
    setValue(value)
    const updatedAllValues = [...allValues, value]
    setAllvalues(updatedAllValues)
    window.localStorage.setItem(`${key}`, JSON.stringify(allValues))
  }

  function resetValue(key) {
      window.localStorage.removeItem(key)
      setValue(defaultValue)  
  }

  return { value, saveValue, resetValue };
}
