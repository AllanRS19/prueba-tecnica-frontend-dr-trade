import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const ELLIPSIS = 'ellipsis' as const;

// Helper function to build the numbers used for the pagination
export const buildPageNumbers = (
    currentPage: number,
    totalPages: number,
): (number | typeof ELLIPSIS)[] => {
    const MAX_VISIBLE_PAGES = 5;

    const pages: (number | typeof ELLIPSIS)[] = [];

    if (totalPages <= MAX_VISIBLE_PAGES) {
        for (let i = 1; i <= totalPages; i += 1) {
            pages.push(i);
        }
        return pages;
    }

    pages.push(1);

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) {
        pages.push(ELLIPSIS);
    }

    for (let i = start; i <= end; i += 1) {
        pages.push(i);
    }

    if (end < totalPages - 1) {
        pages.push(ELLIPSIS);
    }

    pages.push(totalPages);

    return pages;
};

// Get the favorites from the localStorage
export const getFavorites = (): number[] => {

    if (typeof window === "undefined") return [];

    const data = localStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
};

// Either add or remove a favorite from the localStorage
export const toggleFavorite = (id: number): number[] => {
    const favorites = getFavorites();

    console.log(id);

    let updated: number[];

    if (favorites.includes(id)) {
        // remove
        updated = favorites.filter((fav) => fav !== id);
    } else {
        // add
        updated = [...favorites, id];
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    return updated;
};

// Check if a specific character is already in favorites
export const isFavorite = (id: number): boolean => {
    return getFavorites().includes(id);
};