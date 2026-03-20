// The function groups the data by a specific property
// and counts the amount that belong to each group
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

// This function sorts the data by highest value
// and selects up to N top items and the rest is sent to other
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

// This function groups characters by their status
// Since the API shows "unknown" in lowercase, unlike "Alive" or "Dead",
// We need to normalize it, so it matches the format of the other two
export function getStatusData(characters: Character[]) {
    return groupBy(characters, (c) =>
        c.status === "unknown" ? "Unknown" : c.status
    );
}

// Groups characters by species and keeps only the top 5 species
export function getSpeciesData(characters: Character[]) {
    return getTopN(groupBy(characters, (c) => c.species));
}