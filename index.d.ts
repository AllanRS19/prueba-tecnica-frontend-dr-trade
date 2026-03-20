type QueryParams = Record<string, string | undefined>;

type ChartDataItem = {
    name: string;
    value: number;
};

interface Character {
    id: number;
    name: string;
    status: 'alive' | 'dead' | 'unknown';
    species: string;
    image: string;
    gender: string;
    origin: {
        name: string;
    }
    episode: string[];
}

interface CharacterCardProps extends Character {
    isFavoritePage?: boolean;
}

interface Episode {
    id: string;
    name: string;
    episode: string;
    url: string;
}

interface Info {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
}

interface ApiResponse<T> {
    info?: Info;
    results: T[];
}

interface NoResultsProps {
    icon: string;
    title: string;
    description: string;
    redirectTo?: string;
    redirectText?: string;
    children?: React.ReactNode;
}

interface CharactersPaginationProps {
    currentPage: number;
    totalPages: number;
}