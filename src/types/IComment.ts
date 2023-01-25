import { User } from "./IUser";

export interface Comment {
  id: number;
  date: number; // unix timestamp in milliseconds.
  user: User;
  text: string;
  likes: number;
  iLikedIt: boolean;
}
