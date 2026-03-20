import { useEffect, useState } from "react";

// Debounce hook to delay the searchInput
// Prevents the API from being called many times and impacting performance negatively
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