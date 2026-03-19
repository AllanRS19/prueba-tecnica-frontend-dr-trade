import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const ELLIPSIS = 'ellipsis' as const;
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