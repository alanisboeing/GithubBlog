import {
  ArrowSquareOut,
  Building,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import {
  ProfileCardContainer,
  ProfileDescription,
  ProfileFeatures,
} from "./styles";

export function ProfileCard() {
  const { userData } = useContext(UserContext);

  return (
    <ProfileCardContainer>
      <img src={userData.avatar_url} alt="" />
      <ProfileDescription>
        <header>
          <h1>{userData.name}</h1>
          <nav>
            <a href={userData.html_url}>
              <span>github</span>
              <ArrowSquareOut size={15} weight="bold" />
            </a>
          </nav>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ProfileFeatures>
          <li>
            <GithubLogo size={15} weight="fill" />
            <span>{userData.login}</span>
          </li>
          <li>
            <Building size={15} weight="fill" />
            <span>AGPR5</span>
          </li>
          <li>
            <Users size={18} weight="fill" />
            <span>
              {userData.followers}
              {" "}seguidores
            </span>
          </li>
        </ProfileFeatures>
      </ProfileDescription>
    </ProfileCardContainer>
  );
}
