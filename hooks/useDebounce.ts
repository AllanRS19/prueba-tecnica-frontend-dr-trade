import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number = 1000) {

    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timeOut);
    }, [value, delay]);

    return debouncedValue;
}