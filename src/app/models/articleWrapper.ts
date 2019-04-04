import { Article } from './article';

export class ArticleWrapper {
    public constructor(
        public article: Article,
        public comments: Comment[]
    ) { }
}    