import {IAuthor} from './author.interface';

export interface IComment {
  id: string;
  createdTime: string;
  author: IAuthor;
  body: string;
}
