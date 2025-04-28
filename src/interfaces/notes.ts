export interface NoteType {
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
