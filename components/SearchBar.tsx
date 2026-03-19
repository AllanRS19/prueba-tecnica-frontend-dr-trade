'use client';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";
import { Search } from "lucide-react";

const SearchBar = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const [searchTerm, setSearchTerm] = useState("");
    const debouncedTerm = useDebounce(searchTerm, 1000);

    useEffect(() => {

        const currentValue = searchParams.get("name") || "";
        // Check if value is the same or not
        // If value is the same, we can return
        if (debouncedTerm === currentValue) return;

        const params = new URLSearchParams(searchParams.toString());

        if (debouncedTerm !== "") {
            params.set("name", debouncedTerm);
        } else {
            params.delete("name");
        }

        router.replace(`?${params.toString()}`);
    }, [debouncedTerm, router]);

    return (
        <div className="search-input-container">
            <Search />
            <input
                type="text"
                className="search-input"
                placeholder="Search for a character name..."
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
        </div>
    )
}

export default SearchBar;