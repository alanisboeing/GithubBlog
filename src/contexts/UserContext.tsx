import { createContext, ReactNode, useEffect, useState } from "react";
import { apiGithub } from "../libs/axios";
import { IUser } from "../models/interfaces/IUser";
import { IUserContext } from "../models/interfaces/IUserContext";
import { IPost } from "../models/interfaces/IPost";

export const UserContext = createContext({} as IUserContext);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<IUser>({} as IUser);
  const [issuePosts, setIssuePosts] = useState<IPost[]>([] as IPost[]);

  async function searchIssues(query: string) {
    try {
      const { data } = await apiGithub.get(`/search/issues`, {
        params: {
          q: `${query} repo:alanisboeing/GithubBlog`,
        },
      });
      console.log(data.items)
      setIssuePosts(data.items);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    async function fetchUser(userName: string) {
      try {
        const { data } = await apiGithub.get<IUser>(`/users/${userName}`);
        setUserData(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser("alanisboeing");
  }, []);

  return (
    <UserContext.Provider
      value={{
        userData,
        issuePosts,
        setIssuePosts,
        searchIssues
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
