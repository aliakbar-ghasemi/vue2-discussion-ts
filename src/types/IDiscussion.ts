import { Comment } from "./IComment";

export interface Discussion extends Comment {
  replies?: Discussion[];
  discussionForeignKey?: number;
}
