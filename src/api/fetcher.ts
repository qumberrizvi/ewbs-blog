export const fetcher = async (endpoint: string) => {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error('Something went wrong!');
    return response.json();
}
