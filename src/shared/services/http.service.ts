class HttpService {
    protected baseURL = import.meta.env.VITE_API_BASE_URL

    protected async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        const response = await fetch(endpoint, options);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json() as Promise<T>;
    }

    get<T>(
        endpoint: string,
        params?: Record<string, string | number | boolean>,
        headers: HeadersInit = {}
    ): Promise<T> {
        const url = new URL(endpoint, this.baseURL);

        if (params) {
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key].toString()));
        }

        return this.request<T>(url.toString(), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        });
    }
}

export const httpService = new HttpService();