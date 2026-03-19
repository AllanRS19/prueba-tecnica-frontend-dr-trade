type QueryParams = Record<string, string | undefined>;

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

interface CharacterCardProps {
    character: Character;
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
}

interface CharactersPaginationProps {
    currentPage: number;
    totalPages: number;
}