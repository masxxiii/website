export interface Note {
    slug: string;
    data: {
        title: string;
        date: string;
        tags: string[];
        summary: string;
        draft?: boolean;
    };
    body: string;
    render: () => Promise<{
        Content: any;
        headings: any[];
        remarkPluginFrontmatter: Record<string, any>;
    }>;
}

export type SortDirection = 'asc' | 'desc';

export interface NoteFilterOptions {
    query?: string;
    tag?: string;
    page?: number;
    limit?: number;
    sortBy?: keyof Note['data'];
    sortDirection?: SortDirection;
}
