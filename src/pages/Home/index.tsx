import { useContext, useEffect } from "react";
import { ProfileCard } from "./components/ProfileCard";
import {
  HomeContainer,
  PostCardContainer,
  PostsContainer,
  SearchPostsInput,
  SearchPostsSection,
} from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISearchForm } from "../../models/interfaces/ISearchForm";
import { IPost } from "../../models/interfaces/IPost";
import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale";
import { UserContext } from "../../contexts/UserContext";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const searchFormSchema = z.object({
  searchPosts: z.string(),
});

type searchFormSchemaType = z.infer<typeof searchFormSchema>;

export function Home() {
  const {issuePosts, searchIssues} = useContext(UserContext)

  const { register, handleSubmit } = useForm<searchFormSchemaType>({
    resolver: zodResolver(searchFormSchema),
  });
  useEffect(()=>{
    searchIssues("");

  },[])


  
  function handleSearchPosts(data: ISearchForm) {
    searchIssues(data.searchPosts);
  }

  return (
    <HomeContainer>
      <ProfileCard />
      <SearchPostsSection>
        <header>
          <h1>Publicações</h1>
          <span>6 publicações</span>
        </header>
        <form onSubmit={handleSubmit(handleSearchPosts)}>
          <SearchPostsInput
            type="search"
            placeholder="Buscar counteúdo"
            // onBlur={(event) => handleSearchPosts(event)}
            {...register("searchPosts")}
          />
        </form>
      </SearchPostsSection>

      <PostsContainer>
        {issuePosts &&
          issuePosts.map((post: IPost) => {
            return (
              <PostCardContainer href={`issue/${post.number}`} key={post.id} >
                <header>
                  <h1>{post.title}</h1>
                  <span>
                    {formatDistanceToNowStrict(new Date(post.updated_at), {
                        addSuffix: true,
                        locale: ptBR
                      })}
                  </span>
                </header>
                <p>
                {<Markdown remarkPlugins={[remarkGfm]}>{post.body}</Markdown>}
                </p>
              </PostCardContainer>
            );
          })}
      </PostsContainer>
    </HomeContainer>
  );
}
