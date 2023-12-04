import {PostStatus} from "@/types/post-status";
import {Author} from "@/types/author";
import {Category} from "@/types/category";

export class Post {
    id!: number;
    author_id?: number;
    category_id?: number;
    title!: string;
    seo_title?: string;
    excerpt?: string;
    body!: string;
    image?: string;
    slug!: string;
    meta_description?: string;
    meta_keywords?: string;
    status!: PostStatus;
    featured?: number | boolean;
    schema?: string;
    read_count!: number;
    created_at!: Date;
    updated_at?: Date;
    author!: Author;
    category?: Category;
}
