import { useState } from "react"

export const useInput = (inititalValue) => {
    const [value, setValue] = useState(inititalValue);

    const onChange = (e) => {
        setValue(e.tatget.value);
    }

    return {
        value,
        onChange
    }
}