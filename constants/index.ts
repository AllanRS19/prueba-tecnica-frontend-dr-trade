import { ChartColumn, Heart, LucideIcon, UserRound } from "lucide-react";

interface NavLinksProps {
    label: string;
    path: string;
    icon?: LucideIcon;
}

export const navLinks: NavLinksProps[] = [
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