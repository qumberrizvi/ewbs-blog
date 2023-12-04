class Link {
    url?: string;
    label!: string;
    active!: boolean;
}

export class Paginator<T> {
    current_Page!: number;
    data!: T[];
    first_page_url!: string;
    from!: number;
    last_page!: number;
    last_page_url!: string;
    links!: Link[];
    next_page_url?: string;
    path!: string;
    per_page!: number;
    prev_page_url?: number;
    to!: number;
    total!: number;

    constructor(data: T[]) {
        this.data = data;
    }
}
