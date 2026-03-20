import { ChartColumn, Heart, LucideIcon, UserRound } from "lucide-react";

export const navLinks: Array<{ label: string; path: string; icon?: LucideIcon }> = [
    {
        label: 'Characters',
        path: '/',
        icon: UserRound
    },
    {
        label: 'Favorites',
        path: '/favorites',
        icon: Heart
    },
    {
        label: 'Statistics',
        path: '/stats',
        icon: ChartColumn
    }
];