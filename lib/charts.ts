export function groupBy<T>(
    data: T[],
    key: (item: T) => string
): ChartDataItem[] {
    const map: Record<string, number> = {};

    data.forEach((item) => {
        const group = key(item) || "Unknown";
        map[group] = (map[group] || 0) + 1;
    });

    return Object.entries(map).map(([name, value]) => ({
        name,
        value,
    }));
}

export function getTopN(data: ChartDataItem[], limit = 5) {
    const sorted = [...data].sort((a, b) => b.value - a.value);

    const top = sorted.slice(0, limit);
    const rest = sorted.slice(limit);

    const other = rest.reduce((sum, item) => sum + item.value, 0);

    if (other > 0) {
        top.push({ name: "Other", value: other });
    }

    return top;
}

// Specific charts
export function getStatusData(characters: Character[]) {
    return groupBy(characters, (c) =>
        c.status === "unknown" ? "Unknown" : c.status
    );
}

export function getSpeciesData(characters: Character[]) {
    return getTopN(groupBy(characters, (c) => c.species));
}

export function getGenderData(characters: Character[]) {
    return groupBy(characters, (c) => c.gender);
}