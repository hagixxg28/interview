import { Comment } from './comment';

export class Article {
    public constructor(
        public id?: number,
        public title?: string,
        public body?: string,
        public startDate?: Date,
        public comments?: Comment[],
        public showComments?: boolean
    ) { }
}    