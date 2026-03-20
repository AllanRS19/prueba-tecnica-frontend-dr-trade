import qs from "query-string";

export async function fetcher<T>(
    endpoint: string,
    params?: QueryParams,
    revalidate = 60
): Promise<T> {

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!API_BASE_URL) throw new Error('API Endpoint is not defined');

    const url = qs.stringifyUrl({
        url: `${API_BASE_URL}/${endpoint}`,
        query: params
    }, { skipEmptyString: true, skipNull: true });

    const response = await fetch(url, { next: { revalidate } });

    // console.log(response);

    if (!response.ok) {
        const errorBody = await response.json().catch((err) => err);

        if (errorBody.error !== "There is nothing here.") {

            if (response.status === 404 && endpoint.startsWith('/character/')) {
                return {} as T;
            } else {
                return { info: undefined, results: [] } as T;
            }

        }

        throw new Error(`API Error: ${response.status}: ${errorBody?.error || response.statusText}`);
    }

    return response.json();
}

export async function getAllCharacters(): Promise<Character[]> {
    const results: Character[] = [];
    let next: string | null = "/character";

    while (next) {
        const res = await fetcher<ApiResponse<Character>>(next);

        if (!res) break;

        results.push(...res.results);

        next = res.info?.next
            ? res.info.next.replace(process.env.NEXT_PUBLIC_API_BASE_URL!, "")
            : null;
    }

    return results;
}