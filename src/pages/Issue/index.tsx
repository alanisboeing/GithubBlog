import { NavLink, useParams } from "react-router-dom";
import {
  IssueContainer,
  ProfileCardContainer,
  ProfileFeatures,
} from "./styles";
import {
  ArrowLeft,
  ArrowSquareOut,
  ChatCircle,
  GithubLogo,
  Timer,
} from "@phosphor-icons/react";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function Issue() {
  const { userData } = useContext(UserContext);
  const { number } = useParams<string>();

  const { issuePosts, searchIssues } = useContext(UserContext);

  useEffect(() => {
    searchIssues("");
  }, []);

  const openedIssue = issuePosts.find((issue) => issue.number == number);
  return (
    <IssueContainer>
      {openedIssue && (
        <ProfileCardContainer>
          <nav>
            <NavLink to={"/"}>
              <ArrowLeft size={15} />
              <span>Voltar</span>
            </NavLink>
            <NavLink to={userData.html_url}>
              <span>github</span>
              <ArrowSquareOut size={15} weight="bold" />
            </NavLink>
          </nav>

          <h1>{openedIssue.title}</h1>
          <ProfileFeatures>
            <li>
              <GithubLogo size={17} weight="fill" />
              <span>{userData.login}</span>
            </li>
            <li>
              <Timer size={18} weight="fill" />
              <span>
                {" "}
                {formatDistanceToNowStrict(new Date(openedIssue.updated_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </li>
            <li>
              <ChatCircle size={18} weight="fill" />
              <span>{openedIssue.comments} comentários</span>
            </li>
          </ProfileFeatures>
        </ProfileCardContainer>
      )}

      <p>
        {<Markdown remarkPlugins={[remarkGfm]}>{openedIssue?.body}</Markdown>}
      </p>
    </IssueContainer>
  );
}
