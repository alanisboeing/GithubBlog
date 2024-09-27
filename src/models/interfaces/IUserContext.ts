import { IPost } from "./IPost";
import { IUser } from "./IUser";

export interface IUserContext {
  userData: IUser,
  issuePosts: IPost[],
  setIssuePosts: React.Dispatch<React.SetStateAction<IPost[]>>,
  searchIssues: (query: string)=> Promise<void>
}
