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

    if (!response.ok) {
        const errorBody = await response.json().catch((err) => err);

        throw new Error(`API Error: ${response.status}: ${errorBody.error || response.statusText}`);
    }

    return response.json();
}