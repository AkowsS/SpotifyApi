import {
  Container,
  Logo,
  InputDiv,
  ProfileImg,
  DivLogo,
  ProfileDiv,
  LoginButton
} from "./Header.styles";
import SpotifyImg from "@/public/icons/spotify-color-svgrepo-com.svg";
import { useContext } from "react";
import { FindContext } from "@/context/Context";
import SearchIcon from "@/public/icons/search.png";

export const Header: React.FC = () => {
  const { setTerm, onLogButtonClick, onSearch, user,setUser } = useContext(FindContext);

  return (
    <Container>
      <DivLogo>
        <Logo src={SpotifyImg} />
        <p>MakeList</p>
      </DivLogo>
      <InputDiv>
        <input type="text" onChange={(event) => setTerm(event.target.value)} />
        <button onClick={() => onSearch()}>
          <p>search</p>
          <img src={SearchIcon} alt="" />
        </button>
      </InputDiv>
      <LoginButton
        style={!user?.images[0].url? { display: "block" } : { display: "none" }}
        onClick={onLogButtonClick}
      >
        Login
      </LoginButton>
      <div
        onClick={()=>setUser(null)}
        style={user?.images[0].url?{ display: "block" } : { display: "none" }}
      >
        <ProfileDiv>
          <ProfileImg src={user?.images[0]?.url} />
        </ProfileDiv>
      </div>
    </Container>
  );
};
