export const fetcher = async (endpoint: string, noCache = false, revalidateIn = 0) => {
    const options: RequestInit = {};
    if (noCache) options.cache = 'no-store';
    if (revalidateIn) options.next = {
        revalidate: revalidateIn,
    };
    const response = await fetch(endpoint, options);
    if (!response.ok) throw new Error('Something went wrong!');
    return response.json();
}
